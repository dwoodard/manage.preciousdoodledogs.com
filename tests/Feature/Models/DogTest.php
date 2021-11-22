<?php

namespace Tests\Feature;

use App\Http\Resources\DogResource;
use App\Models\Dog;
use App\Models\Measurement;
use App\Models\Traits;
use App\Models\User;
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
            'weight' => $dog->weight,
            'height' => $dog->height,
            'retired_at' => $dog->retired_at,

        ]);
    }

    // when saving a dog, it should have should take a weight as type int of ounces
    /** @test */
    public function dog_should_take_a_weight_as_type_int_of_ounces()
    {
        $dog = Dog::factory()->create([
            'weight' => '1',
        ]);

        $this->assertDatabaseHas('dogs', [
            'weight' => $dog->weight,
        ]);
    }

    // when saving a dog, it should convert the weight from string to int of ounces
    /** @test */
    public function dog_should_convert_the_weight_from_string_to_int_of_ounces()
    {
        // the difference between make and create is that make does not save the model to the database
        // check when the weight is a string, that it is converted to int of ounces
        $dog = Dog::factory()->make([
            'weight' => '1',
        ]);

        $this->assertTrue(is_int($dog->weight['ounces']));
    }

    // when saving a dog, it should have should take a height as type int of inches
    /** @test */
    public function dog_should_take_a_height_as_type_int_of_inches()
    {
        $dog = Dog::factory()->create([
            'height' => '1',
        ]);

        $this->assertDatabaseHas('dogs', [
            'height' => $dog->height,
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

    // dog can set meaurements
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

    // dogs can have puppies


}
