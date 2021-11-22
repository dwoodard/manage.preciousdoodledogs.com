<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TraitOptionsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category' => $this->faker->word,
            'trait' => $this->faker->word,
            'description' => $this->faker->sentence,
            'alleles' => $this->faker->regexify('[A-Z]{2,4}[a-z]{2,4}'),
        ];
    }
}
