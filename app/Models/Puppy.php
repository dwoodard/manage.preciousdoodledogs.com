<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Puppy extends Model
{
    use HasFactory;

    protected $table = 'puppies';

    protected $fillable = [
        'litter_id',
        'name',
        'gender',
        'adult_name',
        'collar_color',
        'birthday',
        'price',
        'paid'

    ];

    // measurements
    public function measurements(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        // polymorphic relationship
        return $this->morphMany(Measurement::class, 'measureable');
    }

    public function litter()
    {
        return $this->belongsTo('App\Models\Litter');
    }

    public function mother()
    {
        return $this->litter->hasOne('App\Models\Dog', 'id', 'dame_id');
    }

    public function father()
    {
        return $this->litter->hasOne('App\Models\Dog', 'id', 'sire_id');
    }
}
