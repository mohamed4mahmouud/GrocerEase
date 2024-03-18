<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLogin;
use App\Models\User;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserValidation;

class AuthController extends Controller
{
    use GeneralTrait;
    public function register(UserValidation $request)
    {
        if ($request->validated()) {
            $user = User::create($request->validated());
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;
            return $this->returnData('token', $token, "User Created Successfully");
        } else {
            $errors = $request->errors();
            return $this->returnError(400, $errors);
        }
    }
    public function login(UserLogin $request)
    {
        //Validation Failure
        if ($request->validated()) {
            //Validation passes
            //Extract Credentials
            $credentials = request(['email', 'password']);

            //Login Attempt using Auth Facade Failure check

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'message' => 'Incorrect Email or Password'
                ], 401);
            }

            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;
            return response()->json([
                'accessToken' => $token,
                'token_type' => 'Bearer',
                'msg' => 'success'
            ]);
        } else {
            $errors = $request->errors();
            return $this->returnError(422, $errors);
        }
    }
}
