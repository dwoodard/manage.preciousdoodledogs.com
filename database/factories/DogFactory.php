<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        //  name, breed, gender, outside_stud, weight, height, generation, retired_at

        $gender = $this->faker->randomElement( ['male', 'female'])       ;
        return [
            'name' => $this->faker->name(),
            "breed" => $this->faker->randomElement(['poodle', 'goldendoodles', 'labradoodle', 'cavapoo']),
            "size" => $this->faker->randomElement(["mini", "toy", "teacup", "standard", "medium", "micro", "pocket"]),
            "generation" => $this->faker->randomElement(["f1b", "f1", "f2b", "f2bb", "multigen"]),
            "birthday" => $this->faker->dateTimeBetween('-6 year', 'now'),
            "gender" => $gender,
            "outside_stud" => $gender !== 'female' ? $this->faker->numberBetween(0,1) : null,
            "retired_at" => rand(0,100) > 75 ? $this->faker->dateTimeBetween('-1 year', 'now') : null,
        ];
    }
}
