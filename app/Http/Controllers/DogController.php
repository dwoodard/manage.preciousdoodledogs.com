<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DogController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET /admin/dogs
     * @return Response
     */
    public function index(): Response
    {
        $data = [
            'dogs' => [
                ['name' => 'Fido'],
                ['name' => 'Buddy'],
                ['name' => 'Rover'],
                ['name' => 'Barkley'],
                ['name' => 'Buster'],
            ],
        ];
        return Inertia::render('Admin/Dogs/Index', $data);
    }


}
