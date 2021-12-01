<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dogs', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->date('birthday')->nullable();
            $table->string('breed')->nullable();
            $table->string('size')->nullable(); //(mini, toy, teacup, standard, medium, micro, pocket)
            $table->string('generation')->nullable(); //(f1b, f1, f2b, f2bb, multigen)
            $table->string('gender')->nullable();
            $table->boolean('outside_stud')->nullable();
            $table->boolean('can_stud')->nullable();
//            $table->string('weight')->nullable();
//            $table->string('height')->nullable();
            $table->date('retired_at')->nullable();
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
        Schema::dropIfExists('dogs');
    }
}
