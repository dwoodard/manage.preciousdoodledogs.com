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
            'dogs' => Dog::orderBy('created_at', 'DESC')->get()
                ->map(function (Dog $dog) {
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
                    'created_at' => $dog->created_at->format('Y-m-d H:i:s'),
                    'updated_at' => $dog->updated_at->format('Y-m-d H:i:s'),

                ];
            }),
        ];

        return Inertia::render('Admin/Dogs/index', $data);
    }

    public function create()
    {
        return Inertia::render('Admin/Dogs/create');
    }

    public function edit()
    {
        return Inertia::render('Admin/Dogs/edit');
    }

    public function store(Request $request)
    {
        $dog = Dog::create($request->all());

        //validation
        $request->validate([
            'name' => 'required',
        ]);


        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $dog->addMediaFromRequest('image')->toMediaCollection('dogs');
        }
        return redirect()->back();
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
