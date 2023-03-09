<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    public function articleOnId($id)
    {
        return $this->where('id', $id)->get();
    }

    public function allArticles()
    {
        return $this->all();
    }


    public function deleteArticle($id)
    {
        return $this->where('id', $id)->delete();
    }
    
    public function updateArticle($id, $validatedData)
    {
        return $this->where('id', $id)->update([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'thumbnailURL' => $validatedData['thumbnailURL'],
            'league_id' => $validatedData['league_id']
        ]);
    }
}
