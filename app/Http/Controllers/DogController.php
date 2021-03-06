<?php

namespace App\Http\Controllers;

use App\Http\Resources\DogResource;
use App\Models\Dog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DogController extends Controller
{

    /**
     * @return Response
     */
    public function index()
    {
        $dogs = auth()->user()->dogs()->with([
            'media',
            'measurements',
            'heats',
            'litters',
            'traits'])
            ->orderBy('created_at', 'desc')
            ->whereNull('retired_at')
            ->get();

        $data = [
            'dogs' => $dogs->toArray()
        ];

        return Inertia::render('Admin/Dogs/index', $data);
    }

    public function create()
    {
        return Inertia::render('Admin/Dogs/create');
    }

    public function edit(Dog $dog)
    {
        $data = [
            'dog' => $dog->toArray()
        ];

        return Inertia::render('Admin/Dogs/edit', $data);
    }

    public function store(Request $request)
    {
        $dog = Dog::create($request->all());
        $dog->traits()->create(['dog_id' => $dog->id]);

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
