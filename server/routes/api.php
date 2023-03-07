<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthController;
use App\Http\Controllers\LeagueController;
use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/league/country/{country}', [LeagueController::class,'leagueByCountry']);
Route::get('/league', [LeagueController::class,'allLeagues']);
Route::get('/league/type/{type}', [LeagueController::class,'leagueByType']);

Route::get('/article', [ArticleController::class,'article']);
Route::get('/article/{id}', [ArticleController::class,'articleById']);
Route::delete('/article/{id}', [ArticleController::class,'deleteArticle']);             
Route::post('/article', [ArticleController::class,'addArticle']);             



Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/logout',  [AuthController::class, 'logout']);

    Route::get('/user',  function (Request $request) {
                                return $request->user();
                         });
});




