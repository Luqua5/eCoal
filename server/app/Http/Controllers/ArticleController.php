<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function article(){

        return response()->json(["message" => "Article"]);
    }

    public function articleById($id){
        $article = new article();
        $theArticle = $article->articleOnId($id)->toJson();
        return response()->json($theArticle);
        
    }
}
