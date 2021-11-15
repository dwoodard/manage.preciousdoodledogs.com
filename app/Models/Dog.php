<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dog extends Model
{
    use HasFactory;

    protected $casts = [
        'birthday'  => 'date:Y-m-d',
    ];


    protected function getAgeAttribute()
    {
        return [
            'years' => $this->birthday->diffInYears(),
            'months' => $this->birthday->diffInMonths(),
            'days' => $this->birthday->diffInDays(),
        ];

    }

    public function getWeightAttribute($value)
    {
        return [
            'ounces' => $value,
            'pounds' => $value * 0.0625,
            'grams' => $value * 28.3495,
            'kilograms' => $value * 0.0283495,
        ];
    }

    public function getHeightAttribute($value)
    {
        return [
            'inches' => $value,
            'feet' => $value * 0.083333,
            'centimeters' => $value * 2.54,
            'meters' => $value * 0.0254,
        ];
    }
}
