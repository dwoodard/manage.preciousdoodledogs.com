<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TraitOptions extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'category',
        'trait',
        'code',
        'description',
        'alleles',
    ];
}
