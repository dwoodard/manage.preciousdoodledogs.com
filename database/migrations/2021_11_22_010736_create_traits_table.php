<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTraitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traits', function (Blueprint $table) {
            $table->id();
            $table->string('dog_id')->nullable();

            // Traits
            $table->string("MC1R")->nullable();
            $table->string("CBD103")->nullable();
            $table->string("Intensity Loci")->nullable();
            $table->string("ASIP")->nullable();
            $table->string("MLPH")->nullable();
            $table->string("TYRP1")->nullable();
            $table->string("MITF")->nullable();
            $table->string("H")->nullable();
            $table->string("RSPO2")->nullable();
            $table->string("FGF5")->nullable();
            $table->string("MC5R")->nullable();
            $table->string("FOXI3")->nullable();
            $table->string("SLC45A2")->nullable();
            $table->string("KRT71")->nullable();
            $table->string("BMP3")->nullable();
            $table->string("T")->nullable();
            $table->string("LMBR1")->nullable();
            $table->string("ALX4")->nullable();
            $table->string("IGF1")->nullable();
            $table->string("IGFR1")->nullable();
            $table->string("STC2")->nullable();
            $table->string("GHR_E191K")->nullable();
            $table->string("GHR_P177L")->nullable();
            $table->string("EPAS1")->nullable();
            $table->string("POMC")->nullable();

            $table->string("Merle")->nullable();
            $table->string("R")->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traits');
    }
}
