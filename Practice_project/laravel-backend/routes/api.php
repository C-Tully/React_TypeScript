<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

Route::prefix('posts')->group(function () {
  Route::get('/posts/get-top-posts', [PostController::class, 'topPosts']);
  Route::get('/{id}', [PostController::class, 'show']);
  // Route::post('/new', [PostController::class, 'newPost']);
  // Route::post('/edit', [PostController::class, 'editPost']);
  // Route::post('/delete', [PostController::class, 'deletePost']);
});

Route::prefix('users')->group(function () {  
  // Route::get('/{id}', [UserController::class, 'show']);

  // Route::post('/edit', [UserController::class, 'editUser']);
  // Route::post('/delete', [UserController::class, 'deleteUser']);
  // Route::post('/new', [UserController::class, 'newUser']);

  Route::post('/login', [UserController::class, 'login']);
  Route::post('/logout', [UserController::class, 'logout']);
  
});

//Testing route
Route::get('/ping', function (Request $request) {
  return response()->json([
      'status' => 'ok',
      'service' => 'laravel-api',
      'time' => now(),
  ]);
});

