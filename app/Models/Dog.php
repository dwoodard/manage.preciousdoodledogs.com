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

    const PREGNANCY_DURATION_IN_DAYS = 63;
    const NEXT_EST_MATED_FROM_LAST_HEAT_AT_IN_DAYS = 10;
    const NEXT_EST_XRAY_IN_DAYS = 53;
    const WEEKS_BETWEEN_HEATS = 28;

    protected $table = 'dogs';

    protected $fillable = [
        'user_id',
        'name',
        'breed',
        'gender',
        'birthday',
        'size',
        'generation',
        'outside_stud',
        'can_stud',
        'retired_at',
        'akc',
        'ckc',
        'embark',
        'notes'
    ];

    protected $casts = [
        'birthday' => 'date:Y-m-d',
    ];

    // Relationships
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    // traits
    public function traits(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Traits::class);
    }

    //heats
    public function heats(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Heat::class);
    }

    // litters
    public function litters(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Litter::class, 'dame_id', 'id')
            ->where('dame_id', $this->id)
            ->orderBy('mated_at', 'desc');
    }

    // measurements
    public function measurements(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        // polymorphic relationship
        return $this->morphMany(Measurement::class, 'measureable');
    }

    //setMeasurements
    //example use: $dog->setMeasurements(['weight' => '10', 'height' => '10']);
    public function setMeasurements(array $measurements)
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

    public function getMeasurements(string $type = null)
    {
        $measurements = $this->measurements()->get();

        if ($type) {
            $measurements = $measurements->where('type', $type);
        }

        return $measurements;
    }

    // Attributes //

    // latest_heat
    public function getLatestHeatAttribute()
    {
        //check if there is a heat
        if ($this->heats->count() <= 0) {
            return null;
        }

        //get the latest heat
        $latest_heat = $this->heats->sortByDesc('heat_at')->first()->heat_at;

        //return the heat
        return $latest_heat;
    }

    // age
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

    // next_est_mated_at
    public function getNextEstMatedAtAttribute()
    {
        if (!$this->heats->count()) {
            return null;
        }

        // get the latest heat and add 8 days to it
        $next_est_mated_at = (Carbon::parse($this->latest_heat))
            ->addDays(self::NEXT_EST_MATED_FROM_LAST_HEAT_AT_IN_DAYS)
            ->format('Y-m-d');

        return $next_est_mated_at;
    }

    // xray_est_at
    public function getXrayEstAtAttribute()
    {
        if (!$this->litters->count()) {
            return null;
        }

        $xray_est_at = (Carbon::parse($this->litters->last()->created_at))
            ->addDays(self::NEXT_EST_XRAY_IN_DAYS)
            ->format('Y-m-d');

        return $xray_est_at;
    }

    // latest_mated_at
    public function getLatestMatedAtAttribute()
    {
        if (!$this->litters->count()) {
            return null;
        }

        // get the latest heat and add 8 days to it
        $latest_mated_at = (Carbon::parse($this->litters()->orderBy('mated_at', 'desc')->first()->mated_at))
            ->format('Y-m-d');

        return $latest_mated_at;
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
            return Carbon::parse($heat->heat_at)->diffInDays();
        }

        return null;
    }


    // weeks_between_heats
    public function getWeeksBetweenHeatsAttribute()
    {
        $heats = $this->heats()->get();

        if ($heats->count() < 2) {
            return null;
        }

        // sort descending by heat_at
        $heats = $heats->sortByDesc('heat_at');

        // get the first and second heat

        $first_heat = $heats->first();
        $second_heat = $heats->get(1);

        // take the last two heats and get the difference in weeks
        $weeks_between_heats = Carbon::parse($first_heat->heat_at)
            ->diffInWeeks(Carbon::parse($second_heat->heat_at));

        return $weeks_between_heats;
    }

    // days_until_next_heat
    public function getDaysUntilNextHeatAttribute()
    {
        $heat = $this->heats()->latest()->first();
        if (!$heat) {
            return null;
        }
        return $heat->created_at->diffInDays();
    }

    // next_est_heat_date
    public function getNextEstHeatDateAttribute()
    {
        // if no bithday, return null
        if ($this->birthday === null) {
            return null;
        }

        $heats = $this->heats()->orderBy('heat_at', 'asc')->pluck('heat_at');

        // if no heats, return 9 months from birthday
        if ($heats->count() === 0) {
            return $this->birthday->addMonths(9)->format('Y-m-d');
        }


        // if one heat estimate the next heat date which is weeks between heats
        if ($heats->count() === 1) {
            return Carbon::parse($this->latest_heat)
                ->addWeeks(Heat::BETWEEN_HEATS_IN_WEEKS)
                ->format('Y-m-d');
        }


        // if dog has 2 or more heats, estimate the next heat date by calculating the weeks between
        // all the heats and getting the average and add it to the last heat date
        if ($heats->count() > 1) {

            $weeks_between_heats = $heats->map(function ($heat, $key) use ($heats) {

                //check if the last key in the array
                if ($key === $heats->count() - 1) {
                    return null;
                }

                $heat1 = Carbon::parse($heats[$key]);
                $heat2 = Carbon::parse($heats[$key + 1]);

                return $heat1->diffInWeeks($heat2);

            });

        }

        // $weeks_between_heats get average in weeks
        $weeks_between_heats = collect($weeks_between_heats)->avg();

        // add weeks between heats to the last heat date
        $next_est_heat_date = Carbon::parse($this->latest_heat)
            ->addWeeks($weeks_between_heats)
            ->format('Y-m-d');

        return $next_est_heat_date;
    }

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

    private function getLatestMeasurement(string $string)
    {
        $measurement = $this->getMeasurements($string)->sortByDesc('measured_at')->first();

        if ($measurement) {
            // return the value and unit
            return $measurement->value . ' ' . $measurement->unit;
        }

        return null;
    }
    public function simple(){
        return parent::toArray();
    }
    public function toArray()
    {
        $dog = [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'breed' => $this->breed,
            'gender' => $this->gender,
            'birthday' => $this->birthday ? $this->birthday->format('Y-m-d') : null,
            'age' => $this->age,
            'size' => $this->size,
            'generation' => $this->generation,
            'notes' => $this->notes,
            'akc' => $this->akc,
            'ckc' => $this->ckc,
            'embark' => $this->embark,
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
            $dog['litters'] = $this->litters()->without('litters')->get()->toArray();


            $dog['heats']['all'] = $this->heats()->with('measurements')
                ->orderBy('heat_at', 'desc')
                ->get()
                ->toArray();
            $dog['heats']['next_est_heat_date'] = $this->next_est_heat_date;
            $dog['heats']['next_est_mated_at'] = $this->next_est_mated_at;


            $dog['calculations'] = [
                'next_est_mated_at' => $this->next_est_mated_at,
                'xray_est_at' => $this->xray_est_at,
                'latest_mated_at' => $this->latest_mated_at,
                'latest_litter' => $this->latest_litter,
                'days_since_last_heat' => $this->days_since_last_heat,
                'days_until_next_heat' => $this->days_until_next_heat,
                'next_est_heat_date' => $this->next_est_heat_date,
                'next_due_date' => $this->next_due_date
            ];
        }

        if ($this->gender === 'male') {
            $dog['outside_stud'] = $this->outside_stud;
            $dog['can_stud'] = $this->can_stud;
        }

        return $dog;
    }

    /**
     * @return string
     */
    private function heatsToArray(): string
    {
        dump($this->heats()->get());
        return $this->heats()->get()->pluck('heat_at')->join(',');
    }


}
