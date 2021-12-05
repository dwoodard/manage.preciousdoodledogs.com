<?php

namespace Tests\Feature\Models;

use App\Models\TraitOptions;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TraitOptionsTest extends TestCase
{

    use DatabaseMigrations, RefreshDatabase;

    /** @test */
    public function it_should_show_all_the_trait_options()
    {
        $traitOptions = TraitOptions::all();
        $this->assertNotEmpty($traitOptions);
    }
}
