<?php

namespace Tests\Feature;

use App\Models\User;
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

}
