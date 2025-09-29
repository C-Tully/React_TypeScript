<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function topPosts() {            
        $database = \App\Services\DatabaseManager::make(env('APP_ACTIVE_DATABASE', 'docker'));
        $database->buildConnection();

        $connection = $database->buildCommand();
        
        //small query for examples sake.
        $top5Posts = $connection
                        ->collection('posts')
                        ->orderBy('created_at', 'desc')
                        ->limit(5)
                        ->get();

        if($top5Posts->is_Empty()) {
            // return [];
            return response()
                ->json([
                    'status' => 'fail'        
                ],
                404
            );
        }

        return response()->json($top5Posts);
    }    
}
