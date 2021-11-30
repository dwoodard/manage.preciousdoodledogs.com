<?php

namespace Database\Factories;

use App\Models\Litter;
use Illuminate\Database\Eloquent\Factories\Factory;

class PuppyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'litter_id' => Litter::factory()->create()->id,
            'name' => $this->faker->name,
            'adult_name' => $this->faker->name,
            'collar_color' => $this->faker->colorName,
            'birthday' => $this->faker->dateTimeBetween('-6 months', '-1 days')
        ];
    }
}
