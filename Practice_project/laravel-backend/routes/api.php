<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controller\PostController;

Route::prefix('posts')->group(function () {
  Route::get('/posts/get-top-posts', [PostController::class, 'topPosts']);
  Route::get('/{id}', [PostController::class, 'show']);
  // Route::post('/', [PostController::class, 'store']);
});

Route::prefix('users')->group(function () {  
  Route::post('/login', [UserController::class, 'loginUser']);
  Route::get('/{id}', [UserController::class, 'show']);
});

