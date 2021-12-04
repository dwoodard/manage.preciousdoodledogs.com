<?php

namespace App\Http\Controllers;

use App\Models\Traits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class TraitsController extends Controller
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Traits $traits
     * @return \Illuminate\Http\Response
     */
    public function show(Traits $traits)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Traits $traits
     * @return \Illuminate\Http\Response
     */
    public function edit(Traits $traits)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Traits $traits
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request): \Illuminate\Http\RedirectResponse
    {
        Traits::where(['dog_id' => $request->dog_id])->update($request->all());
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Traits $traits
     * @return \Illuminate\Http\Response
     */
    public function destroy(Traits $traits)
    {
        //
    }
}
