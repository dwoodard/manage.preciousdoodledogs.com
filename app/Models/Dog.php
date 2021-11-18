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
        'age',
        'breed'
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

    public function getWeightAttribute($value): array
    {
        return [
            'ounces' => $value,
            'pounds' => $value * 0.0625,
            'grams' => $value * 28.3495,
            'kilograms' => $value * 0.0283495,
        ];
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
