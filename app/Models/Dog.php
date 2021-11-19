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
        'name',
        'birthday',
        'size',
        'generation',
        'outside_stud',
        'weight',
        'height',
        'retired_at',
    ];

    protected $casts = [
        'birthday'  => 'date:Y-m-d',
    ];

    protected function getAgeAttribute(): array
    {
        if (! $this->birthday) {
            return [];
        }
        return [
            'years' => $this->birthday->diffInYears(),
            'months' => $this->birthday->diffInMonths(),
            'days' => $this->birthday->diffInDays(),
        ];
    }

    public function setWeightAttribute($value)
    {
        //if value is an object, ignore
        if (is_object($value)) {

            // if value has key ounces get value from ounces
            if (isset($value->ounces)) {
                $value = $value->ounces;
            }
        }
        //if value is a string, convert to int
        if (is_string($value)) {
            $value = (int) $value;
        }
        // if value is an int, set it
        if (is_int($value)) {
            $this->attributes['weight'] = $value;
        }
    }

    public function getWeightAttribute($value): array
    {
        return [
            'ounces' => $value,
            'pounds' => $value * 0.0625,
            'grams' => $value * 28.3495,
            'kilograms' => $value * 0.0283495,
        ];
    }

    public function setHeightAttribute($value)
    {
        //if value is an object, ignore
        if (is_object($value)) {

            // if value has key inches get value from inches
            if (isset($value->inches)) {
                $value = $value->inches;
            }
        }
        //if value is a string, convert to int
        if (is_string($value)) {
            $value = (int) $value;
        }
        // if value is an int, set it
        if (is_int($value)) {
            $this->attributes['height'] = $value;
        }
    }

    public function getHeightAttribute($value): array
    {
        return [
            'inches' => $value,
            'feet' => $value * 0.083333,
            'centimeters' => $value * 2.54,
            'meters' => $value * 0.0254,
        ];
    }

}
