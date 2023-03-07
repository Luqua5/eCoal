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
        Schema::create('match', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team1_id') -> references('id') -> on('teams') -> onDelete('cascade');
            $table->foreignId('team2_id') -> references('id') -> on('teams') -> onDelete('cascade');
            $table->foreignId('league_id') -> references('id') -> on('league') -> onDelete('cascade');
            $table->date('date');
            $table->integer('score1');
            $table->integer('score2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('match');
    }
};
