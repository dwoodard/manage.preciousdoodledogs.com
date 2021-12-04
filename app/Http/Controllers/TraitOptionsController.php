<?php

namespace App\Http\Controllers;

use App\Models\TraitOptions;
use Illuminate\Http\Request;

class TraitOptionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return TraitOptions[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index()
    {
        return TraitOptions::all();
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
     * @param  \App\Models\TraitOptions  $traitOptions
     * @return \Illuminate\Http\Response
     */
    public function show(TraitOptions $traitOptions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TraitOptions  $traitOptions
     * @return \Illuminate\Http\Response
     */
    public function edit(TraitOptions $traitOptions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TraitOptions  $traitOptions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TraitOptions $traitOptions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TraitOptions  $traitOptions
     * @return \Illuminate\Http\Response
     */
    public function destroy(TraitOptions $traitOptions)
    {
        //
    }
}
