<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuppiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puppies', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('litter_id')->nullable();
            $table->string('name', 45)->nullable();
            $table->string('adult_name', 45)->nullable();
            $table->string('collar_color', 45)->nullable();
            $table->dateTime('birthday')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('puppies');
    }
}
