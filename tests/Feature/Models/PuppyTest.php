<?php

namespace Tests\Feature\Models;

use App\Models\Dog;
use App\Models\Litter;
use App\Models\Puppy;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PuppyTest extends TestCase
{
    use DatabaseMigrations, RefreshDatabase;

    /** @test */
    public function it_can_make_a_new_puppy()
    {
        $data = [
            'litter_id' => Litter::factory()->create()->id,
            'name' => 'Puppy',
            'adult_name' => 'Puppy Adult',
            'collar_color' => 'Black',
        ];

        $puppy = Puppy::factory()->create($data);

        $this->assertDatabaseHas('puppies', $data);
    }

    /** @test */
    // it has a relationship with litter
    public function it_has_a_relationship_with_litter()
    {
        $puppy = Puppy::factory()->create();

        $this->assertInstanceOf(Litter::class, $puppy->litter);
    }

    /** @test */
    // it has a relationship with dog (dame_id mother)
    public function it_has_a_relationship_with_dog_dame()
    {
        $puppy = Puppy::factory()->create([
            'litter_id' => Litter::factory()->create([
                'dame_id' => Dog::factory()->create([
                    'gender' => 'female'
                ])->id,
            ])->id,
        ]);

        $this->assertInstanceOf(Dog::class, $puppy->mother);
    }


}
