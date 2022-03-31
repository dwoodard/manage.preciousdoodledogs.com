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
            'litter_id' => null,
            'name' => $this->faker->name,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'adult_name' => rand(0, 1) ? $this->faker->name : null,
            'collar_color' => $this->faker->randomElement($this->getCollarColors()),
            'birthday' => $this->faker->dateTimeBetween('-6 months', '-1 days')
        ];
    }

    /**
     * @return string[]
     */
    private function getCollarColors(): array
    {
        $collorColors = [
            'red',
            'pink',
            'purple',
            'deep-purple',
            'indigo',
            'blue',
            'light-blue',
            'cyan',
            'teal',
            'green',
            'light-green',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deep-orange',
            'brown',
            'blue-grey',
            'grey'
        ];
        return $collorColors;
    }
}
