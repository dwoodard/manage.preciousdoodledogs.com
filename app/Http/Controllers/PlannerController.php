<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\DogResource;
use App\Models\Dog;
use Inertia\Inertia;
use Inertia\Response;

class PlannerController extends Controller
{

    /**
     * @return Response
     */
    public function index()
    {
        $dogs = auth()->user()->dogs()->with([
            // 'media',
            // 'measurements',
            'heats',
            'litters',
            // 'traits'
            ])
            ->orderBy('created_at', 'desc')
            //all females
            ->where('gender', 'female')
            ->whereNull('retired_at')
            ->get();

            $dogs = collect($dogs)->map(function (Dog $dog ) {
                
                // $dog = $dog->toArray();
                $dog = [
                'name' => $dog['name'],
                'breed' => $dog['breed'],
                'get_next_est_heat_date_attribute' => $dog->getNextEstHeatDateAttribute()
                ];
                
                

                return $dog;
            });


        $data = [
            'dogs' => $dogs
            // 'dogs' => $dogs->toArray()
        ];

        return Inertia::render('Admin/Planner/index', $data);
    }

    public function create()
    {
         
    }

    public function edit(Dog $dog)
    {
         
    }

    public function store(Request $request)
    {
         
    }

    public function update(Request $request, Dog $dog): \Illuminate\Http\RedirectResponse
    {
         
    }

}
