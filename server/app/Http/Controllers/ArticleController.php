<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function article(){
        return response()->json(["message" => "Article"]);
    }

    public function articleById($id){

        return response()->json(["message" => "$id"]);
    }
}
