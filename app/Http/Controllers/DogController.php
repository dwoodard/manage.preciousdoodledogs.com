<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DogController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET /admin/dogs
     * @return Response
     */
    public function index(): Response
    {

        $data = [
            // if all but retired_at is null, it will be omitted
            'dogs' => Dog::all()->map(function (Dog $dog) {
                return [
                    'id' => $dog->id,
                    'name' => $dog->name,
                    'gender' => $dog->gender,
                    'breed' => $dog->breed,
                    'generation' => $dog->generation,
                    'size' => $dog->size,
                    'age' => $dog->age,
                    'outside_stud' => $dog->outside_stud,
                    'weight' => $dog->weight,
                    'height' => $dog->height,
                    'is_retired' => $dog->is_retired,
                ];
            }),
        ];







        return Inertia::render('Admin/Dogs/Index', $data);
    }


}
