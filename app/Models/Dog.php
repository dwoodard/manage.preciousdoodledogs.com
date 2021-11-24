<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Mixed_;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Dog extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'breed',
        'gender',
        'birthday',
        'size',
        'generation',
        'outside_stud',
//        'weight',
//        'height',
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

    public function measurements(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Measurement::class, 'dog_id', 'id');
    }

    //setMeasurements
    //example use: $dog->setMeasurements(['weight' => '10', 'height' => '10']);
    public function setMeasurements(array $measurements): void
    {
        //if no auth user, throw exception
        if (!auth()->check()) {
            throw new \Exception('No user logged in');
        }

        foreach ($measurements as $type => $value) {
            $this->measurements()->create([
                'dog_id' => $this->id,
                'user_id' => auth()->id(),
                'type' => $type,
                'value' => $value,
                'unit' => Measurement::units[$type],
                'measured_at' => now(),
            ]);
        }
    }

    public function getMeasurements(string $type = null)
    {
        $measurements = $this->measurements()->get();

        if ($type) {
            $measurements = $measurements->where('type', $type);
        }

        return $measurements;
    }

    // Setters and Getters
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
        ];
    }

    public function toArray()
    {
        return [
                'id' => $this->id,
                'name' => $this->name,
                'breed' => $this->breed,
                'gender' => $this->gender,
                'outside_stud' => $this->outside_stud,
                'birthday' => $this->birthday->format('Y-m-d'),
                'age' => $this->age,
                'size' => $this->size,
                'generation' => $this->generation,
                'weight' => $this->getMeasurements('weight')->sortByDesc('measured_at')->first(),
                'height' => $this->getMeasurements('height')->sortByDesc('measured_at')->first(),
                'measurements' => $this->getMeasurements(),
                'traits' => $this->traits()->get()->makeHidden(['id', 'dog_id'])->first(),
                'media' => $this->getMedia('dogs')
                    ->map(function ($media) {
                        return $media->toArray();
                    })
        ];
    }
}
