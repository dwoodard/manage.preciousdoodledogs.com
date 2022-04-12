<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PuppyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dogs = Puppy::with([
            'media',
            'measurements',
            'heats',
            'litters',
            'traits'])
            ->orderBy('created_at', 'desc')
            ->get();

        $data = [
            'dogs' => $dogs->toArray()
        ];

        return Inertia::render('Admin/Puppies/index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //save puppy
        $puppy = Puppy::create($request->all());

        //validation
        $request->validate([
            'name' => 'required',
        ]);


        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $puppy->addMediaFromRequest('image')->toMediaCollection('puppies');
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Puppy  $puppy
     * @return \Illuminate\Http\Response
     */
    public function show(Puppy $puppy)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Puppy  $puppy
     * @return \Illuminate\Http\Response
     */
    public function edit(Puppy $puppy)
    {
        $puppy->litter;

        $data = [
            'puppy' => $puppy->toArray()
        ];


        return Inertia::render('Admin/Puppies/edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Puppy  $puppy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Puppy $puppy)
    {
        $puppy->update($request->all());

        if ($request->hasFile('image') && $request->file('image')->isValid()) {

            $puppy->media()->delete($puppy->id);

            $puppy->addMediaFromRequest('image')->toMediaCollection('dogs');
        }

        $puppy->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Puppy  $puppy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Puppy $puppy)
    {
        //
    }
}
