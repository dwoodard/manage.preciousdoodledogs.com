<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traits extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'traits';

    protected $fillable = [
        'name',
        'description',
        'type',
        'value',
        'dog_id',
    ];


   public function dog() {
        return $this->belongsTo('App\Models\Dog');
    }
}
