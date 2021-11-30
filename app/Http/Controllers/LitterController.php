<?php

namespace App\Http\Controllers;

use App\Models\Litter;
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
        // data

        $data = [
            'litters' => Litter::all()
        ];


        return Inertia::render('Admin/Litters/Index', $data);
    }

}
