<?php

namespace Database\Factories;

use App\Models\Dog;
use App\Models\TraitOptions;
use Illuminate\Database\Eloquent\Factories\Factory;

class TraitsFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $traitOptions = collect();
        // create a new dog
        $traitOptions['dog_id'] = Dog::factory()->make();

        TraitOptions::all()->each(function ($trait) use (&$traitOptions) {
            $traitOptions["$trait->code"] = $this->faker->randomElement($trait->alleles ? explode(',', $trait->alleles) : "");
        });




        return $traitOptions->toArray();

//        return [
//            "dog_id" => $this->faker->randomElement(Dog::all()->pluck('id')->toArray()),
//            "MC1R" => "Em,Eg,Ee",
//            "CBD103" => "KBky",
//            "Intensity-Loci" => "Intermediate Red Pigmentation",
//            "ASIP" => "ayat",
//            "MLPH" => "DD",
//            "TYRP1" => "BB",
//            "MITF" => "SS",
//            "Harlequin" => "hh",
//            "RSPO2" => "FF",
//            "FGF5" => "GT",
//            "MC5R" => "CT",
//            "FOXI3" => "NN",
//            "SLC45A2" => "NN",
//            "KRT71" => "CT",
//            "BMP3" => "AC",
//            "T" => "CC",
//            "LMBR1" => "CC",
//            "ALX4" => "NN",
//            "IGF1" => "NI",
//            "IGFR1" => "GG",
//            "STC2" => "TA",
//            "GHR-E191K" => "GA",
//            "GHR-P177L" => "CT",
//            "EPAS1" => "GG",
//            "POMC" => "NN",
//        ];
    }
}
