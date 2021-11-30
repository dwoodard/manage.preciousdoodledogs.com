<?php

namespace Database\Factories;

use App\Models\Dog;
use Illuminate\Database\Eloquent\Factories\Factory;

class LitterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dame_id' => Dog::factory()->create()->id,
//            'stud_id' => Dog::factory()->create()->id,
            'status' => $this->faker->randomElement(['expected', 'born', 'sold', 'delivered']),

        ];
    }
}
