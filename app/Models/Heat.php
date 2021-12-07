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

    public function toArray()
    {
        return parent::toArray();
    }
}
