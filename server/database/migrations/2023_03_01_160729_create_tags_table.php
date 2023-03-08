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
        Schema::create('league', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('country');
            $table->string('logoURL');
            $table->string('type');
            $table->string('flagURL')->nullable();
            $table->string('code')->nullable();
            $table->timestamps();
        });

        $league = Http::withHeaders([
            'X-RapidAPI-Key' => 'ce91996be2mshac0be530ceebf14p1d3fecjsn68a8a1fd9afb',
	        'X-RapidAPI-Host' => 'api-football-v1.p.rapidapi.com'
        ])->get('https://api-football-v1.p.rapidapi.com/v3/leagues');
        $league = json_decode($league, true);

        foreach ($league['response'] as $key => $value) {
            DB::table('league')->insert([
                'name' => $value['league']['name'],
                'country' => $value['country']['name'],
                'logoURL' => $value['league']['logo'],
                'type' => $value['league']['type'],
                'flagURL' => $value['country']['flag'],
                'code' => $value['country']['code'],
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tags');
    }
};
