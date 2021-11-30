<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Litter extends Model
{
    use HasFactory;

    protected $fillable = [
        "dame_id",
        "status",
    ];
}
