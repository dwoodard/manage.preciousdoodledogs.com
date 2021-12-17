<?php

namespace App\Http\Controllers;

use App\Models\Dog;
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

        $get = null;

        $data = [
            'litters' => Litter::active()
                ->get()
                ->load(['dame','stud', 'puppies'])
        ];
//        return $data['litters'][0];
        return Inertia::render('Admin/Litters/Index', $data);
    }

}
