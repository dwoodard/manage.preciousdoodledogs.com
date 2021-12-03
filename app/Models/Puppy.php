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
    ];

    public function litter()
    {
        return $this->belongsTo('App\Models\Litter');
    }

    public function mother()
    {
        return $this->litter->hasOne('App\Models\Dog', 'id', 'dame_id');
    }



}
