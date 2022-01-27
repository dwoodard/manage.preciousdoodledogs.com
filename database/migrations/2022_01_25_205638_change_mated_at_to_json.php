<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeMatedAtToJson extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('litters', function (Blueprint $table) {
            $table->schemalessAttributes('dates_mated_at')->after('stud_id');
            $table->text('notes')->nullable()->after('got_pregnant');
            $table->dropColumn('mated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('litters', function (Blueprint $table) {
            $table->dropColumn('dates_mated_at');
            $table->date('mated_at')->nullable();
            $table->dropColumn('notes');
        });
    }
}
