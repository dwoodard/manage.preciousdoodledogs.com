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

        ]);

        $type = $this->faker->randomElement([
            'weight',
            'height',
            'temperature',

        ]);



        return [
            "measureable_type" => $measurable,
            "measureable_id" => function () use ($measurable) {
                return $measurable::factory()->create()->id;
            },
            "type" => $type,
            "value" => $this->faker->randomFloat(2, 1, 100),
            "unit" => $this->typeUnit($type),
            "measured_at" => $this->faker->dateTimeBetween('-6 months', 'now'),
        ];
    }

    private function typeUnit($type)
    {
        switch ($type) {
            case 'weight':
                return $this->faker->randomElement(['ounces', 'lbs']);
            case 'height':
                return $this->faker->randomElement(['cm', 'in']);
            case 'temperature':
                return $this->faker->randomElement(['C', 'F']);
        }
    }
}
