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
                    'image' => $dog->getFirstMediaUrl('dogs'),

                ];
            }),
        ];

        return Inertia::render('Admin/Dogs/Index', $data);
    }

    public function create()
    {
        return Inertia::render('Admin/Dogs/create');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $input = $request->all();
        $dog = Dog::create($input);


        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $dog->addMediaFromRequest('image')->toMediaCollection('dogs');
        }
        return redirect()->route('admin.dogs.index');

    }

    public function update(Request $request, Dog $dog): \Illuminate\Http\RedirectResponse
    {
        $input = $request->all();
        $dog->update($input);
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $dog->addMediaFromRequest('image')->toMediaCollection('dogs');
        }
        return redirect()->route('admin.dogs.index');
    }

}
