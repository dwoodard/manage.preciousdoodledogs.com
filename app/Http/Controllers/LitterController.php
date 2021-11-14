<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LitterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('Admin/Litters/Index');
    }

}
