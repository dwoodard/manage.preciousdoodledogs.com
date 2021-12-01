<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Heat extends Model
{
    use HasFactory;

    const BETWEEN_HEATS_IN_WEEKS = 28; // average number of heats in weeks
    const FIRST_HEAT_ESTIMATE_HEAT_IN_WEEKS = 9; // first heat estimate in weeks
}
