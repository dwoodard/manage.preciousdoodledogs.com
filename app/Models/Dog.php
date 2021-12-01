<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Mixed_;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Dog extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    const  PREGNANCY_DURATION_IN_DAYS = 63;

    protected $table = 'dogs';

    protected $fillable = [
        'name',
        'breed',
        'gender',
        'birthday',
        'size',
        'generation',
        'outside_stud',
        'can_stud',
        'retired_at',
    ];

    protected $casts = [
        'birthday' => 'date:Y-m-d',
    ];

    // Relationships
    public function traits(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Traits::class);
    }

    //heats
    public function heats(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Heat::class);
    }

    public function measurements(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        // polymorphic relationship
        return $this->morphMany(Measurement::class, 'measureable');
    }

    //setMeasurements
    //example use: $dog->setMeasurements(['weight' => '10', 'height' => '10']);
    public function setMeasurements(array $measurements): void
    {
        foreach ($measurements as $type => $value) {
            $this->measurements()->create([
                'type' => $type,
                'value' => $value,
                'unit' => Measurement::units[$type],
                'measured_at' => now(),
            ]);
        }
    }

    public function litters()
    {
        return $this->hasMany(Litter::class, 'dame_id', 'id');
    }


    public function getMeasurements(string $type = null)
    {
        $measurements = $this->measurements()->get();

        if ($type) {
            $measurements = $measurements->where('type', $type);
        }

        return $measurements;
    }

    protected function getAgeAttribute()
    {
        // if there is no birthday, return null
        if ($this->birthday === null) {
            return null;
        }

        // return age as an array of years, months and days
        return [
            'years' => $this->birthday->diffInYears(),
            'months' => $this->birthday->diffInMonths(),
            'days' => $this->birthday->diffInDays(),
            'readable' => $this->birthday->diffForHumans(),
            'formatted' => $this->birthday->format('Y-m-d')
        ];
    }

    //latest_heat
    public function getLatestHeatAttribute()
    {
        if (!$this->heats->count()) {
            return null;
        }

        return $this->heats()->latest()->first();
    }

    // latest_litter
    public function getLatestLitterAttribute()
    {
        return $this->litters()->latest()->first();
    }

    // days_since_last_heat
    public function getDaysSinceLastHeatAttribute()
    {
        $heat = $this->heats()->latest()->first();
        if ($heat) {
            return $heat->created_at->diffInDays();
        }
        return null;
    }

    // days_since_last_heat

    // days_until_next_heat

    // next_est_heat_date

    //next_due_date
    public function getNextDueDateAttribute()
    {
        if (!$this->latest_litter) {
            return null;
        }

        $matedAt = Carbon::parse($this->latest_litter->mated_at);
        $nextDueDate = $matedAt->addDays(Dog::PREGNANCY_DURATION_IN_DAYS - 1);
        return $nextDueDate->format('Y-m-d');
    }


    public function toArray()
    {
        $dog = [
            'id' => $this->id,
            'name' => $this->name,
            'breed' => $this->breed,
            'gender' => $this->gender,
            'birthday' => $this->birthday ? $this->birthday->format('Y-m-d') : null,
            'age' => $this->age,
            'size' => $this->size,
            'generation' => $this->generation,
            'weight' => $this->getLatestMeasurement('weight'),
            'height' => $this->getLatestMeasurement('height'),
            'measurements' => $this->getMeasurements(),
            'traits' => $this->traits()->get()->makeHidden(['id', 'dog_id'])->first(),
            'media' => $this->getMedia('dogs')
                ->map(function ($media) {
                    return $media->toArray();
                }),

        ];

        if ($this->gender === 'female') {
            $dog['litters'] = $this->litters;
            $dog['heats'] = $this->heats()->get();
        }
        if ($this->gender === 'male') {
            $dog['outside_stud'] = $this->outside_stud;
            $dog['can_stud'] = $this->can_stud;
        }

        return $dog;
    }

    private function getLatestMeasurement(string $string)
    {
        $measurement = $this->getMeasurements($string)->sortByDesc('measured_at')->first();

        if ($measurement) {
            // return the value and unit
            return $measurement->value . ' ' . $measurement->unit;
        }

        return null;
    }
}
