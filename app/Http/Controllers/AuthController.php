<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserValidation;

class AuthController extends Controller
{
    public function register(UserValidation $request)
    {
        $user = User::create($request->validated());
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        return response()->json([
            'message' => 'Successfully created user'. $user,
            'accessToken' => $token,
        ], 201);
    }
    public function login (Request $request){

        $credientials= request(['email','password']);
        if (!Auth::attempt($credientials)) {
            return response()->json([
                'message'=>'UnAuthorized'
            ],401);
        }
        $user=$request->user();
        $tokenResult=$user->createToken('Personal Access Token');
        $token=$tokenResult->plainTextToken;
        return response()->json([
            'accessToken'=>$token,
            'token_type'=>'Bearer'
        ]);
        }
    }

