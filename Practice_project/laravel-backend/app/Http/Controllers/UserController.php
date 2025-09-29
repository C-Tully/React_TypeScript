<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function login(Request $request) {

    $data = $request->validate([
      'email' => 'required|email|max:255',
      'password' => 'required|string|min:6'
    ]);

    $user = DB::table('users')->where('email', $data['email']->first());
    if($user && Hash::check($data['password']-> $user->password)) {
      return response()->json(['status' => 'success', 'user' => $user]);
    } 

    return response()->json([
      'status' => 'fail'        
    ],
      404
    );
  }
  
}