<?php

namespace App\Http\Controllers;

use App\Models\league;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    public function leagueByCountry($country)
    {
        $league = new league();
        $theLeagues = $league->leagueByCountry($country)->toJson();
        return response()->json($theLeagues);
    }

    public function allLeagues() {
        $league = new league();
        $theLeagues = $league->allLeagues()->toJson();
        return response()->json($theLeagues);
    }

    public function leagueByType($type)
    {
        $league = new league();
        $theLeagues = $league->leagueByType($type)->toJson();
        return response()->json($theLeagues);
    }
}
