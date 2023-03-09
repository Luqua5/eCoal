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
            'content' => 'required|string',
            'thumbnailURL' => 'required',
            'league_id' => 'required|integer',
            'leadStory' => 'integer',
        ]);

        
        
        $f = $request->file('thumbnailURL')->hashName();
        
        $request->file('thumbnailURL')->storeAs('upload', $f);
        $validatedData['thumbnailURL'] = $f;

        $article = new article();

        $article->title = $validatedData['title'];
        $article->content = $validatedData['content'];
        $article->thumbnailURL = $validatedData['thumbnailURL'];
        $article->league_id = $validatedData['league_id'];
        if(isset($validatedData['leadStory'])){
            $article->leadStory = $validatedData['leadStory'];
        }
        

        $article->save();

        

        return response()->json(['message' => 'Article added successfully']);
    }

    public function updateArticle(Request $request, $id){
        $validatedData = $request->validate([
            'title' => 'required|string|max:50',
            'content' => 'required|string',
            'thumbnailURL' => 'required',
            'league_id' => 'required|integer',
            'leadStory' => 'integer',
        ]);

        $f = $request->file('thumbnailURL')->hashName();
        
        $request->file('thumbnailURL')->storeAs('upload', $f);
        $validatedData['thumbnailURL'] = $f;

        
        $article = new article();

        $article->updateArticle($id, $validatedData);     

        return response()->json(['message' => 'Article updated successfully']);
    }
}
