<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Litter extends Model
{
    use HasFactory;

    protected $fillable = [
        "dame_id",
        "stud_id",
        "status",
        "mated_at",
        "got_pregnant"
    ];

    public function dame(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        // dame is the mom of the litter. get the dog that is the mom of the litter
        return $this->belongsTo(Dog::class, 'dame_id');
    }

    public function stud()
    {
        // stud is the dad of the litter. get the dog that is the dad of the litter
        return $this->belongsTo(Dog::class, 'stud_id');

    }

    public function scopeMated($query)
    {
        // get litters that have been mated
        return $query->where('mated_at', '!=', null);
    }

    public function puppies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Puppy::class, 'litter_id');
    }

    public function toArray()
    {
        $litter = [
            'id' => $this->id,
            'dame_id' => $this->dame_id,
            'stud_id' => $this->stud_id,
            'status' => $this->status,
            'mated_at' => $this->mated_at,
            'got_pregnant' => $this->got_pregnant,
            'puppies' => $this->puppies()->get()->toArray()
        ];

        return $litter;
    }


}
