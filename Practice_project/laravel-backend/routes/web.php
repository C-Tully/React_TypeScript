<?php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/api');
});

//wrap this in a debug mode if statement if need be.
Route::get('/ping', function () {
    return response()->json(['status' => 'ok']);
});