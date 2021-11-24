<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
    use HasFactory;

    const weight = 'weight';
    const height = 'height';

    const units = [
        self::weight => 'ounces',
        self::height => 'inches',
    ];

    protected $fillable = [
        'dog_id',
        'user_id',
        'type',
        'value',
        'unit',
        'measured_at',
    ];

}
