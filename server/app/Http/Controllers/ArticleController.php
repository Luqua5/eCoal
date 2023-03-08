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

    public function deleteArticle($id){
        $article = new article();
        $article->deleteArticle($id);
        return response()->json(['message' => 'Article deleted successfully']);
    }

    public function addArticle(Request $request){
        $validatedData = $request->validate([
            'title' => 'required|string|max:50',
            'content' => 'required|text',
            'thumbnailURL' => 'required|string',
            'leadStory' => 'required|integer',
        ]);
        
        $article = new article();

        $article->title = $validatedData['title'];
        $article->content = $validatedData['content'];
        $article->thumbnailURL = $validatedData['thumbnailURL'];
        $article->leadStory = $validatedData['leadStory'];

        $article->save();

        

        return response()->json(['message' => 'Article added successfully']);
    }
}
