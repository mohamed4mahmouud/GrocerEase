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
        Schema::table('cart_product', function (Blueprint $table) {
            $table->integer('price');
            $table->string('product_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cart_product', function (Blueprint $table) {
            $table->dropColumn('price');
            $table->dropColumn('product_name');
        });
    }
};