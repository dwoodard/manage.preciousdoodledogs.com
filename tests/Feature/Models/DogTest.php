<?php

namespace Tests\Feature;

use App\Http\Resources\DogResource;
use App\Models\Dog;
use App\Models\Heat;
use App\Models\Litter;
use App\Models\Measurement;
use App\Models\Traits;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class DogTest extends TestCase
{
    use DatabaseTransactions, DatabaseMigrations;


    /** @test */
    // test Dog has attributes
    public function dog_has_attributes()
    {
        $dog = Dog::factory()->create();

        $this->assertDatabaseHas('dogs', [
            'name' => $dog->name,
            'breed' => $dog->breed,
            'gender' => $dog->gender,
            'birthday' => $dog->birthday,
            'size' => $dog->size,
            'generation' => $dog->generation,
            'outside_stud' => $dog->outside_stud,
            'retired_at' => $dog->retired_at,
        ]);
    }

    // check when there is no birthday, that if age returns null
    /** @test */
    public function check_when_there_is_no_birthday_that_if_age_returns_null()
    {
        $dog = Dog::factory()->create([
            'birthday' => null,
        ]);

        $this->assertNull($dog->age);
    }

    // check when there is a birthday, that if age returns the age of the dog
    /** @test */
    public function check_when_there_is_a_birthday_that_if_age_returns_the_age_of_the_dog()
    {
        $dog = Dog::factory()->create([
            // one year old from now
            'birthday' => now()->subYear(),
        ]);

        //years old
        $this->assertEquals(1, $dog->age['years']);
        // months old
        $this->assertEquals(12, $dog->age['months']);
        // days old
        $this->assertEquals(365, $dog->age['days']);
    }

    // dog should have a relationship with called genes
    // dog->genes()->get() should return all the genes that belong to the dog
    /** @test */
    public function dog_should_have_a_relationship_with_called_traits()
    {
        $dog = Dog::factory()->create();
        $traits = Traits::factory()->create();
        $dog->traits()->save($traits);
        $this->assertEquals($dog->traits->toArray(), $traits->toArray());
    }

    // dog can set measurements
    /** @test */
    public function dog_can_set_measurements()
    {
        //set auth user
        $this->actingAs(User::factory()->create());

        // create a dog
        $dog = Dog::factory()->create();

        // set the measurements
        $dog->setMeasurements(['weight' => '1', 'height' => '100']);
        $dog->measurements;

        $this->assertEquals(1, $dog->measurements->where('type', 'weight')->first()->value);
        $this->assertEquals(100, $dog->measurements->where('type', 'height')->first()->value);
    }

    // dog can call DogResource Collection
    /** @test */
    public function dog_can_call_dog_resource_collection()
    {
        // set auth user
        $loggedInUser = User::factory()->create();
        $loggedInUser->assignRole('admin');
        $this->actingAs($loggedInUser);

        // create 2 dogs
        $dogs = Dog::factory()->count(2)->create();

        // set the measurements for the dogs
        $dogs->each(function ($dog) {
            //create 10 measurements of weight
            for($i = 0; $i < 10; $i++) {
                $dog->setMeasurements(['weight' => rand(1, 5), 'height' => rand(3,20)]);
            }
        });

        $dogs = new DogResource(Dog::with('measurements')->get());

//         dd($dogs->collection->toArray());

        //assert that the collection has 10 measurements
        $firstDog = $dogs->collection->first();

        $weightMeasurements = $firstDog->getMeasurements(Measurement::weight)->map(function ($measurement) {
            return [
                    'type' => $measurement->type,
                    'unit' => $measurement->unit,
                    'value' => (int) $measurement->value,
            ];
        });
        //assert that the collection has 10 measurements
        $this->assertEquals(10, $weightMeasurements->count());

        // assert that all the types are weight
        $this->assertEquals('weight', $weightMeasurements->first()['type']);

        // assert that there are a total of 2 dogs
        $this->assertEquals(2, $dogs->collection->count());

    }

    // check if dog has a relationship with traits, measurements and media
    /** @test */
    public function check_if_dog_has_a_relationship_with_keys()
    {
        // set auth user
        $loggedInUser = User::factory()->create();
        $loggedInUser->assignRole('admin');
        $this->actingAs($loggedInUser);

        // Setup
        $dog = Dog::factory()->create();
        $traits = Traits::factory()->create();
        $measurements = Measurement::factory()->create([
            'unit' => Measurement::units['weight'],
            'type' => 'weight',
            'value' => '1',
        ]);

        $dog->traits()->save($traits);
        $dog->measurements()->save($measurements);

         // check if keys (traits, media, measurements) in dog exist
        $keys = [
            'traits',
            'media',
            'measurements'
        ];
        foreach ($keys as $key) {
            $this->assertArrayHasKey($key, $dog);
        }
    }

    // get dogs next_due_date
    /** @test */
    public function get_dogs_next_due_date()
    {
        // Setup
        $dog = Dog::factory()->create([
            'gender' => 'female'
        ]);
        $dog->heats()->save(Heat::factory()->create([
            'heat_at' => Carbon::now()->subDays(Heat::FIRST_HEAT_ESTIMATE_HEAT_IN_WEEKS),
        ]));



        // create 3 litters for this dog
        $litters = Litter::factory()->count(3)->create([
            'dame_id' => $dog->id,
            'stud_id' => Dog::factory()->create()->id,
            'mated_at' => Carbon::now()->subDays(Dog::PREGNANCY_DURATION_IN_DAYS-1),
            'got_pregnant' => true,
        ]);
        $dog->litters()->saveMany($litters);

        // assert that the next due date is 63 days from now as a Y-m-d
        $this->assertEquals(Carbon::now()->format('Y-m-d'), $dog->next_due_date);

    }

    // latest Heat
    /** @test */
    public function it_can_get_the_latest_heat()
    {
        // Setup
        $dog = Dog::factory()->create([
            'gender' => 'female'
        ]);

        $date = Carbon::now()->subDays(Heat::FIRST_HEAT_ESTIMATE_HEAT_IN_WEEKS);

        $dog->heats()->save(Heat::factory()->create([
            'heat_at' => $date->format('Y-m-d')
        ]));


        $this->assertEquals($date->format('Y-m-d'), $dog->latest_heat->heat_at);
    }

    // dogs can have puppies



}
