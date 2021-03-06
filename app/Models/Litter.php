<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributesTrait;


class Litter extends Model
{
    use HasFactory;
    use SchemalessAttributesTrait;


    protected $fillable = [
        "dame_id",
        "stud_id",
        "dates_mated_at",
        "archived_at",
        "archive_reason",
        "got_pregnant",
        "notes",
        "archived_at",
    ];

    protected $schemalessAttributes = [
        'dates_mated_at',
    ];

    public function scopeWithDates(): Builder
    {
        return $this->dates_mated_at->modelScope();
    }


    public function dame()
    {
        // dame is the mom of the litter. get the dog that is the mom of the litter
        return $this->belongsTo(Dog::class, 'dame_id', 'id');
    }

    public function stud()
    {
        // stud is the dad of the litter. get the dog that is the dad of the litter
        return $this->belongsTo(Dog::class, 'stud_id', 'id');
    }

//    public function scopeMated($query)
//    {
//        // get litters that have been mated
//        return $query->where('dates_mated_at', '!=', null);
//    }

    public function scopeActive($query)
    {
        // get litters that have not been mated
        return $query->where('archived_at', null);
    }

    public function scopeArchived($query)
    {
        // get litters where archived_at is not null
        return $query->where('archived_at', '!=', null);
    }

    public function puppies(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Puppy::class, 'litter_id', 'id');
    }

}
