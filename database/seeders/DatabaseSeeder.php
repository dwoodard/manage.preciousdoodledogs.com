<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // create dogs with measurements
        \App\Models\Dog::factory(10)->create()->each(function ($dog) {
            $dog->measurements()->saveMany(\App\Models\Measurement::factory(rand(1, 10))->create());
        });


    }
}
