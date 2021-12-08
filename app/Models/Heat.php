<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Heat extends Model
{
    use HasFactory;

    protected $fillable = [
        'dog_id',
        'heat_at'
    ];

    const BETWEEN_HEATS_IN_WEEKS = 28; // average number of heats in weeks

    // heats have measurements polymorphism
    public function measurements(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(Measurement::class, 'measureable')->orderBy('measured_at', 'asc');
    }


    public function toArray()
    {
        return parent::toArray();
    }
}
