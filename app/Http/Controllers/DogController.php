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
                    $dog->age = $dog->age;
                    $dog->getMedia('images');

                return $dog;
            }),
        ];

        return Inertia::render('Admin/Dogs/index', $data);
    }

    public function create()
    {
        return Inertia::render('Admin/Dogs/create');
    }

    public function edit(Dog $dog)
    {
        $dog->getMedia();
        return Inertia::render('Admin/Dogs/edit', [
            'dog' => $dog,
        ]);
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
        $dog->update($request->all());

        if ($request->hasFile('image') && $request->file('image')->isValid()) {

            $dog->media()->delete($dog->id);

            $dog->addMediaFromRequest('image')->toMediaCollection('dogs');
        }

        $dog->save();

        return redirect()->back();
    }

}
