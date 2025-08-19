<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
// use App\Http\Controllers\BusinessLogicController;
use App\Http\Controller\PostController;

// Route::post('/p', [BusinessLogicController::class, 'processLogic']);

Route::get('/posts/get-top-posts', [PostController::class, 'topPosts']);

Route::get('/', function () {
    return view('welcome');
});
