<?php

namespace Tests\Feature;

use App\Models\Dog;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
use Tests\TestCase;

class DogControllerTest extends TestCase
{
    use DatabaseTransactions, DatabaseMigrations;

    /** @test */
    public function it_shows_a_list_of_all_dogs()
    {
        //sign in as a user
        $user = User::factory()->create();
        $user->assignRole('admin');
        $this->actingAs($user);

        // is user signed in?
        $this->assertAuthenticatedAs($user);

        // load the page
        $response = $this->get('/admin/dogs');

        $response->assertSuccessful();
    }

    //test if you can see the create page to create a dog
    /** @test */
    public function it_can_create_a_dog()
    {
        //sign in as a user
        $user = User::factory()->create();
        $user->assignRole('admin');
        $this->actingAs($user);

        // is user signed in?
        $this->assertAuthenticatedAs($user);

        // load the page
        $response = $this->get('/admin/dogs/create');

        $response->assertSuccessful();
    }

    //test if you can edit a dog
    /** @test */
    public function it_can_edit_a_dog()
    {
        //sign in as a user
        $user = User::factory()->create();
        $user->assignRole('admin');
        $this->actingAs($user);

        // is user signed in?
        $this->assertAuthenticatedAs($user);

        // create a dog
        $dog = Dog::factory()->create([
            'name' => 'Fido',
            'breed' => 'Labrador',
        ]);

        $newWeight = '30';

        // load the page
        $data = [
            'name' => 'Test Dog edit',
            'gender' => 'female',
            'breed' => 'goldendoodle',
            'birthday' => Carbon::now()->format('Y-m-d'),
            'size' => 'mini',
        ];

        $this->put("/admin/dogs/{$dog->id}", array_merge(
            $data,
        ));

        $this->assertDatabaseHas('dogs', [
            'name' => $data['name'],
            'gender' => $data['gender'],
            'breed' => $data['breed'],
            'size' => $data['size']
        ]);



        //check if it value changed
        $this->assertNotEquals( Dog::find($dog->id)->name , $dog->name);
    }

    //test if you can store a dog
    /** @test */
    public function it_can_store_a_dog()
    {
        //sign in as a user
        $user = User::factory()->create();
        $user->assignRole('admin');
        $this->actingAs($user);

        // is user signed in?
        $this->assertAuthenticatedAs($user);

        $data = [
            'name' => 'Test Dog',
            'gender' => 'female',
            'breed' => 'goldendoodle',
            'birthday' => Carbon::now()->format('Y-m-d'),
            'size' => 'mini',
        ];

        // load the page
        $response = $this->post('/admin/dogs', $data);


        //assert the database has dog
        $this->assertDatabaseHas('dogs', [
            'name' => $data['name'],
            'gender' => $data['gender'],
            'breed' => $data['breed'],
            'size' => $data['size']
        ]);
    }


}
