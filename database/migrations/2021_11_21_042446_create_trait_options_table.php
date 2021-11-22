<?php

use App\Models\TraitOptions;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTraitOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trait_options', function (Blueprint $table) {
            $table->id();
            $table->string('category'); // ex: ['Coat Color', 'Other Coat Traits', 'Body Size'].
            $table->string('trait'); // ex: ['E Locus', 'K Locus', 'Intensity Loci', 'A Locus']
            $table->string('code');
            $table->string('alleles')->nullable();  // comma separated list of alleles
            $table->text('description')->nullable();
        });

        // convert json to php array and seed all the genes
        $json = file_get_contents(database_path('seeders/trait_options.json'), true);

        $traits = collect(json_decode($json, true));

        // for each gene, create a new model and save it
        $traits->each(function ($trait) {
            TraitOptions::create($trait);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('genes');
    }
}
