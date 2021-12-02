<?php

namespace Database\Factories;

use App\Models\Dog;
use Illuminate\Database\Eloquent\Factories\Factory;

class HeatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dog_id' => null,
            'heat_at' => $this->faker->dateTimeBetween('-6 months', 'now'),
        ];
    }
}
