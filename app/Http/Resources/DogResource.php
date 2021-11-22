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

        return [
            'data' => $this->collection
                // order by descending created_at
                ->sortByDesc(function ($dog) {
                    return $dog->created_at;
                })
                ->map(function ($dog) {
                    return [
                        'id' => $dog->id,
                        'name' => $dog->name,
                        'birthday' => $dog->birthday,
                        'age' => $dog->age,
                        'breed' => $dog->breed,
                        'size' => $dog->size,
                        'generation' => $dog->generation,
                        'gender' => $dog->gender,
                        'outside_stud' => $dog->outside_stud,
                        'weight' => $dog->weight,
                        'height' => $dog->height,
                        'retired_at' => $dog->retired_at,
                        'media' => $dog->getMedia('dogs')->toArray(),
//                    $this->whenLoaded('measurements', function () use ($dog) {
//                        return [
//                            'measurements' => MeasurementsResource::collection($dog->measurements)
//                        ];
//                    }),
                    ];
                }),
        ];
    }
}
