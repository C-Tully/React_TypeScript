<?php

namespace App\Http\Controllers;
// use App\Builder\DatabaseConfig; test
use App\Builder\DockerDatabase;

use Illuminate\Http\Request;

class BusinessLogicController extends Controller
{
    public function processLogic(Request $request) {
        dd('Laravel::BusinessLogicController::processLogic::');
        // Business logic        

        $db = new DockerDatabase();

        // $data = $request->all(); // assuming POST data is passed
        // DB interaction with models
        $result = YourModel::create($data);

        // Return response
        return response()->json(['status' => 'success', 'data' => $result]);
    }
}

