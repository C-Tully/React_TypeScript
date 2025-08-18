<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\BusinessLogicController;

Route::post('/p', [BusinessLogicController::class, 'processLogic']);

Route::get('/', function () {
    return view('welcome');
});
