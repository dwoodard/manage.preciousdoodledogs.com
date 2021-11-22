<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
        'weight',
        'height',
        'retired_at',
    ];

    protected $casts = [
        'birthday' => 'date:Y-m-d',
    ];

    // Relationships
    public function traits(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Traits::class, 'dog_id', 'id');
    }

    public function measurements()
    {
        return $this->hasMany(Measurement::class, 'dog_id', 'id');
    }

    //setMeasurements
    //example use: $dog->setMeasurements(['weight' => '10', 'height' => '10']);
    public function setMeasurements(array $measurements): void
    {
        //if no auth user, throw exception
        if (! auth()->check()) {
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

    protected function setWeightAttribute($value)
    {
        //if value is an object, ignore
        if (is_object($value)) {

            // if value has key ounces get value from ounces
            if (isset($value->ounces)) {
                $this->attributes['weight'] = $value->ounces;
            }
        }

        //if value is an array
        if (is_array($value)) {

            // if value has key ounces get value from ounces
            if (isset($value['ounces'])) {
                $this->attributes['weight'] = $value['ounces'];
            }
        }

        //if value is an array, ignore
        if (is_array($value)) {
            // if value has key ounces get value from ounces
            if (isset($value->ounces)) {
                $this->attributes['weight'] = $value->ounces;
            }
        }

        //if value is a string, convert to int
        if (is_string($value)) {
            $this->attributes['weight'] = (int)$value;
        }

        // if value is an int, set it
        if (is_int($value)) {
            $this->attributes['weight'] = $value;
        }
    }

    protected function getWeightAttribute($value): array
    {
        return [
            'ounces' => $value,
            'pounds' => $value * 0.0625,
            'grams' => $value * 28.3495,
            'kilograms' => $value * 0.0283495,
        ];
    }

    protected function setHeightAttribute($value)
    {
        //if value is an object, ignore
        if (is_object($value)) {

            // if value has key inches get value from inches
            if (isset($value->inches)) {
                $value = $value->inches;
            }
        }

        /***********************
         * example of the shape of the value
         * [
         * 'inches' => 12,
         * 'feet' => 1,
         * ]
         ***********************/
        //if value is an array, ignore
        if (is_array($value)) {
            // if value has key inches get value from inches
            if (isset($value['inches'])) {
                $value = $value['inches'];
            }
        }

        //if value is a string, convert to int
        if (is_string($value)) {
            $value = (int)$value;
        }

        // if value is an int, set it
        if (is_int($value)) {
            $this->attributes['height'] = $value;
        }
    }

    protected function getHeightAttribute($value): array
    {
        return [
            'inches' => $value,
            'feet' => $value * 0.083333,
            'centimeters' => $value * 2.54,
            'meters' => $value * 0.0254,
        ];
    }

}
