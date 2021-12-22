<?php

namespace App\Http\Controllers;

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
        //
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
        return Inertia::render('Admin/Puppies/edit', []);
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
        //
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
