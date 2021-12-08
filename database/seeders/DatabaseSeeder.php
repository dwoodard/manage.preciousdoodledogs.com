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

        $dogs = Dog::factory()->count(100)->create([
//            'name' => 'gidget',
//            'gender' => 'female'
        ]);

        //for each dog
        $dogs->each(function ($dog) {

            // measurement under a dog only
            $type = ['weight', 'height', 'temperature'][rand(0, 2)];

            $measurements = \App\Models\Measurement::factory()->count(10)
                ->create([
                    'measureable_type' => 'App\Models\Dog',
                    'measureable_id' => $dog->id,
                    // random element from array
                    'type' => $type,
                    'value' => rand(1, 100),
                ]);


            $dog->measurements()->saveMany($measurements);

            $dog->traits()->saveMany(\App\Models\Traits::factory()->count(1)->create([
                'dog_id' => $dog->id,
            ]));

            if ($dog->gender === 'female') {
                $dog->litters()->save(\App\Models\Litter::factory()->create([
                    'dame_id' => $dog->id,
                    'got_pregnant' => true
                ]));

                $heats = collect();
                for ($i = 0; $i < 4; $i++) {
                    $heats->push(
                        Heat::factory()->create([
                            'dog_id' => $dog->id,
                            'heat_at' => Carbon::now()
                                ->subWeeks($i * Dog::WEEKS_BETWEEN_HEATS)
                                ->subDays(rand(0, 14))
                                ->addDays(rand(0, 14))
                                ->format('Y-m-d')
                        ]));
                }

                $dog->heats()->saveMany($heats);

                // for each heat save a related measurement "progesterone"
                $heats->each(function ($heat) use ($dog) {

                    $measurements = \App\Models\Measurement::factory()->count(rand(0, 5))->create([
                        'measureable_type' => \App\Models\Heat::class,
                        'measureable_id' => $heat->id,
                        'type' => 'progesterone',
                        'unit' => 'ng/mL'
                    ]);


                    $heat->measurements()->saveMany($measurements);
                });
            }

        });


    }
}
