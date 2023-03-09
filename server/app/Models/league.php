<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class league extends Model
{
    use HasFactory;

    protected $table = 'league';

    public function leagueByCountry($country)
    {
        return $this->where('country', $country)->get();
    }

    public function allLeagues()
    {
        return $this->all();
    }
    
    public function leagueByType($type)
    {
        return $this->where('type', $type)->get();
    }

    public function leagueByID($id)
    {
        return $this->where('id', $id)->get();
    }
}
