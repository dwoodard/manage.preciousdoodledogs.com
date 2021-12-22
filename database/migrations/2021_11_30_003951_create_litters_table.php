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
            $table->unsignedBigInteger('dame_id')->nullable(); // Dog ID
            $table->unsignedBigInteger('stud_id')->nullable(); // Dog ID
            $table->date('mated_at')->nullable();
            $table->date('archived_at')->nullable();
            $table->enum('archive_reason', ['Grown/Gone', 'No Puppies'])->nullable();
            $table->boolean('got_pregnant')->default(true);
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
