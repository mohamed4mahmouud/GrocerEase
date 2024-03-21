<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('image');
            $table->unsignedInteger('rating')->default(0)->enum([1,2,3,4,5]);
            $table->integer('discount')->nullable();
            $table->string('article')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('image');
            $table->dropColumn('rating');
            $table->dropColumn('discount');
            $table->dropColumn('article');
        });
    }
};
