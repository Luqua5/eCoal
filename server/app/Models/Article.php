<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;


    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function articleOnId($id)
    {
        return $this->where('id', $id)->get();
    }

    public function allArticles()
    {
        return $this->all();
    }

    public function addArticle(){
        $article = new Article();
        $article->title = request('title');
        $article->content = request('content');
        $article->thumbnailURL = request('thumbnailURL');
        $article->mediaType = request('mediaType');
        $article->mediaURL = request('mediaURL');
        $article->leadStory = request('leadStory');
        $article->save();
    }

    public function removeArticle($id){
        $article = Article::find($id);
        $article->delete();
    }
}
