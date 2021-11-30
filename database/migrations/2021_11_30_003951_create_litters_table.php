<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLittersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('litters', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dame_id'); // Dog ID
            $table->unsignedBigInteger('stud_id')->nullable(); // Dog ID
            $table->enum('status', ['expected', 'born', 'sold', 'delivered'])->default('expected');
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
        Schema::dropIfExists('litters');
    }
}
