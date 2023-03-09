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
            $table->foreignId('home') -> references('id') -> on('teams') -> onDelete('cascade');
            $table->foreignId('away') -> references('id') -> on('teams') -> onDelete('cascade');
            $table->foreignId('league_id') -> references('id') -> on('league') -> onDelete('cascade');
            $table->date('date');
            $table->integer('season');
            $table->integer('scoreHome');
            $table->integer('scoreAway');
            $table->timestamps();
        });


        $fixture = Http::withHeaders([
            'X-RapidAPI-Key' => 'ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb',
	        'X-RapidAPI-Host' => 'api-football-v1.p.rapidapi.com'
        ])->get('https://v3.football.api-sports.io/fixtures');
        $fixture = json_decode($fixture, true);

        foreach ($fixture['response'] as $key => $value) {
            DB::table('match')->insert([
                'home' => $value['teams']['home']['id'],
                'away' => $value['teams']['away']['id'],
                'league_id' => $value['league']['id'],
                'season' => $value['league']['season'],
                'date' => $value['fixture']['date'],
                'scoreHome' => $value['goals']['home'],
                'scoreAway' => $value['goals']['away'],
                
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('match');
    }
};
