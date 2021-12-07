<?php

namespace App\Http\Controllers;

use App\Models\Heat;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // store the heat
        Heat::create($request->all());
        return redirect()->back();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Heat  $heat
     * @return \Illuminate\Http\Response
     */
    public function show(Heat $heat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Heat  $heat
     * @return \Illuminate\Http\Response
     */
    public function edit(Heat $heat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Heat  $heat
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Heat $heat): \Illuminate\Http\RedirectResponse
    {
        Heat::findOrFail($heat->id)->update($request->all());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Heat  $heat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Heat $heat)
    {
        // delete the heat
        Heat::findOrFail($heat->id)->delete();
    }
}
