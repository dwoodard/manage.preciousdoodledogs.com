<?php

namespace Database\Seeders;

use App\Models\Dog;
use App\Models\Heat;
use Carbon\Carbon;
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

        $dogs = Dog::factory()->count(10)->create();

        foreach ($dogs as $dog) {

             $measurement = [
                 'measureable_type' => 'App\Models\Dog',
                 'measureable_id' => $dog->id,
             ];
             $dog->measurements()->saveMany(\App\Models\Measurement::factory()->count(10)->create($measurement));

             $dog->traits()->save(\App\Models\Traits::factory()->create([
                 'dog_id' => $dog->id,
             ]));

             if ($dog->gender === 'female'){
                 $dog->litters()->save(\App\Models\Litter::factory()->create([
                     'dame_id' => $dog->id,
                 ]));

                 $heats = collect();
                 for ($i = 0; $i < 4; $i++) {
                     $heats->push(
                         Heat::factory()->create([
                             'dog_id' => $dog->id,
                             'heat_at' => Carbon::now()
                                 ->subWeeks($i * Dog::WEEKS_BETWEEN_HEATS)
                                 ->format('Y-m-d')
                         ]));
                 }

                 $dog->heats()->saveMany($heats);
             }




         }

    }
}
