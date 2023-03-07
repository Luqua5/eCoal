<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use  App\Models\User;


class AuthController extends Controller
{
    public function register(Request $request) {
        $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users',
                    'password' => 'required|string|min:8',
        ]);

        $user = User::create([
                    'name' => $validatedData['name'],
                    'email' => $validatedData['email'],
                    'password' => Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
        ]);
    }


    public function login(Request $request){
        $validatedData = $request->validate([
                'email' => 'required|string|email|max:255',
                'password' => 'required|string',
        ]);        
        
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request) {
        Auth::user()->tokens()->delete();
        return response()->json(["message" => "Logout."]);
    }

    public function test(){
        return response()->json(["message" => "Test."]);
    }

    public function article(){
        return response()->json(["message" => "Article."]);
    }

    public function articleById($id){
        return response()->json(["message" => "$id"]);
    }


    
}
