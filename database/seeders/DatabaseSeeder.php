<?php

namespace Database\Seeders;

use App\Models\Dog;
use App\Models\Heat;
use App\Models\Litter;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use function rand;

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

        $dogs = Dog::factory()->count(100)->create();

        //for each dog
        $dogs->each(function ($dog) {

            $dog->measurements()->saveMany($this->createDogMeasurements($dog));

            $dog->traits()->saveMany(\App\Models\Traits::factory()->count(1)->create([
                'dog_id' => $dog->id,
            ]));

            if ($dog->gender === 'female') {
                $dog->litters()->saveMany($this->getLitterData($dog));
                $dog->litters->each(function ($litter) {

                    //Litter Creates the puppies
                    $litter->puppies()->saveMany($this->createPuppiesForLitterData($litter));

                    // puppy measurements
                    $litter->puppies->each(function ($puppy) use ($litter) {
                        $puppy->measurements()->saveMany($this->createPuppyMeasurementsData($litter));
                    });
                });

                $heats = $this->createDogHeatsData($dog);

                $dog->heats()->saveMany($heats);

                // add "progesterone" for $dog (dame)
                $heats->each(function ($heat) use ($dog) {
                    $heat->measurements()->saveMany($this->createDogsHeatMeasurementsData($heat));
                });
            }

        });


    }

    /**
     * @param $measurements
     * @return mixed
     */
    private function createDogMeasurements($dog)
    {
        //check if dog has an id
        if (!$dog->id) {
         return [];
        }

        $type = ['weight', 'height', 'temperature'][rand(0, 2)];
        $data = \App\Models\Measurement::factory()->count(10)
            ->create([
                'measureable_type' => 'App\Models\Dog',
                'measureable_id' => $dog->id,
                'type' => $type,
                'value' => rand(1, 100),
            ]);
        return $data;
    }

    /**
     * @param $dame
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    private function getLitterData($dame)
    {
        $stud = rand(0,100) < 90 ? Dog::inRandomOrder()->where('can_stud', 1)->first() : null;
        
        return \App\Models\Litter::factory()
            ->count(1)
            ->create([
                'dame_id' => $dame->id,
                'stud_id' => $stud ? $stud->id : null,
                'got_pregnant' => true
            ]);
    }

    /**
     * @param $litter
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    private function createPuppiesForLitterData($litter)
    {
        return \App\Models\Puppy::factory()->count(rand(1, 10))->create([
            'litter_id' => $litter->id,
        ]);
    }

    /**
     * @param $dog
     * @return \Illuminate\Support\Collection
     */
    private function createDogHeatsData($dog): \Illuminate\Support\Collection
    {
        $heats = collect();
        for ($i = 0; $i < 4; $i++) {
            $heats->push(Heat::factory()->create([
                'dog_id' => $dog->id,
                'heat_at' => Carbon::now()
                    ->subWeeks($i * Dog::WEEKS_BETWEEN_HEATS)
                    ->subDays(rand(0, 14))
                    ->addDays(rand(0, 14))
                    ->format('Y-m-d')
            ]));
        }
        return $heats;
    }

    /**
     * @param $litter
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    private function createPuppyMeasurementsData($litter)
    {
        return \App\Models\Measurement::factory()->count(rand(0, 10))
            ->create([
                'measureable_type' => 'App\Models\Puppy',
                'measureable_id' => $litter->puppies()->get()->random()->id,
                'type' => 'weight',
                'unit' => 'ounces'
            ]);
    }

    /**
     * @param $heat
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    private function createDogsHeatMeasurementsData($heat)
    {
        return \App\Models\Measurement::factory()->count(rand(0, 5))->create([
            'measureable_type' => \App\Models\Heat::class,
            'measureable_id' => $heat->id,
            'type' => 'progesterone',
            'unit' => 'ng/mL'
        ]);
    }
}
