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
        //create an array of fake dates
        $dates = [];
        for ($i = 0; $i < rand(1, 5); $i++) {
            $dates[] = $this->faker->dateTimeBetween('-1 year', 'now');
        }

        return [
            'dame_id' => null,
            'stud_id' => null,
            'dates_mated_at' => $dates,
            'archived_at' => rand(0, 100) < 2 ? $this->faker->dateTimeBetween('-1 year', 'now') : null,
            'got_pregnant' => rand(0, 100) > 99,
        ];
    }
}
