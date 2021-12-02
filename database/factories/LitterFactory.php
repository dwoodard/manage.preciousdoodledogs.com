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
            'dame_id' => null,
            'stud_id' => null,
            'mated_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'status' => $this->faker->randomElement(['expected', 'born', 'sold', 'delivered']),
            'got_pregnant' => rand(0, 100) > 99,
        ];
    }
}
