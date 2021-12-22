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
        $litters = !request()->has('showArchived')
            ? Litter::active()->get()->load(['dame', 'stud', 'puppies'])
            : Litter::archived()->get()->load(['dame', 'stud', 'puppies']);

        $data = [
            'litters' => $litters
        ];
//        return $data['litters'][0];
        return Inertia::render('Admin/Litters/index', $data);
    }

    //edit
    public function edit(Litter $litter)
    {
        $data = [
            'litter' => $litter->load(['dame', 'stud', 'puppies'])
        ];

        return Inertia::render('Admin/Litters/edit', $data);
    }

    public function update(Request $request, Litter $litter)
    {
        if ($request->input('archive_reason')) {
            $request->merge(['archived_at' => now()]);
        } else {
            $request->merge(['archived_at' => null]);
        }

        $litter->update($request->all());
        $litter->save();

        return redirect()->back();
    }

}
