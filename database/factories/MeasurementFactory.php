<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MeasurementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $measurable = $this->faker->randomElement([
            'App\Models\Dog',
            'App\Models\Puppy',
        ]);


        return [
            "measureable_type" => $measurable,
            "measureable_id" => function () use ($measurable) {
                return $measurable::factory()->create()->id;
            },
            "type" => $this->faker->randomElement(['weight', 'height']),
            "value" => $this->faker->randomFloat(2, 1, 100),
            "measured_at" => $this->faker->dateTimeBetween('-6 months', 'now'),
        ];
    }
}
