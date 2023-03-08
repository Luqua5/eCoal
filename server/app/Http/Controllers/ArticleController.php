<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function article(){
        $article = new article();
        $allArticles = $article->allArticles()->toJson();
        return response()->json($allArticles);
    }

    public function articleById($id){
        $article = new article();
        $theArticle = $article->articleOnId($id)->toJson();
        return response()->json($theArticle);
        
    }

    public function addArticle(Request $request){
        $article = new article();
        $article->addArticle();
        return response()->json(["message" => "Article added."]);
    }

    public function removeArticle($id){
        $article = new article();
        $article->removeArticle($id);
        return response()->json(["message" => "Article removed."]);
    }
}
