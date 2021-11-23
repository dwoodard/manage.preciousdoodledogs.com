<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;

class DogResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return $this->collection->map(function ($dog) {
                return [
                    'id' => $dog->id,
                    'name' => $dog->name,
                    'breed' => $dog->breed,
                    'age' => $dog->age,
                    'weights' => $dog->getMeasurements('weight'),
                    'heights' => $dog->getMeasurements('height'),
                    'created_at' => $dog->created_at,
                    'updated_at' => $dog->updated_at,
                    'media' => $dog->getMedia('dogs')->map(function ($media) {
                        return $media->toArray();
                    }),
                ];
            })->toArray();
    }
}
