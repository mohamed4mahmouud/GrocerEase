<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Http\Requests\UserLogin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserValidation;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Notifications\ResetPasswordVerificationNotification;
use Ichtrojan\Otp\Otp;

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
    public function  logout(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return $this->returnError(401, 'Unauthenticated');
        }
        try {
            $user->tokens()->delete();
        } catch (\Exception $e) {
            return $this->returnError(500, "Couldn't retrieve tokens");
        }
        return $this->returnSuccessMessage("Token revoked successfully");
    }

    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $user = User::where('email' , $request->email)->first();

        //check if user exist
        if(!$user){
            return $this->returnError(404,'There is no user with that email');
        }

        $user->notify(new ResetPasswordVerificationNotification());


        return $this->returnSuccessMessage('Emil sent with OTP');
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $otp = new Otp;
        $code = $otp->validate($request->email,$request->otp);

        if(!$code->status){
            return $this->returnError(401 ,'Incorrect Otp');
        }
        $user = User::where('email',$request->email)->first();

        //check if email is right
        if(!$user){
            return $this->returnError(404 , 'Incorrect email');
        }
            $user->update([
                'password' => $request->new_password
            ]);
            $user->save();

        //delete perv tokens
        $user->tokens()->delete();

        //generate new token for auth user
        $token = $user->createToken('Personal Access Token')->plainTextToken;

        return response()->json([
            'accessToken' => $token,
            'token_type' => 'Bearer',
            'msg' => 'password reset success'
        ]);
    }

    public function changePassword(Request $request)
    {
         $userId = $request->user()->id;
         $user = User::find($userId);

         if(!Hash::check($request->current_password , $user->password)){
            return $this->returnError(401,'Your current password is wrong');
         }

         if($request->new_password != $request->confirm_password){
            return $this->returnError(400,'Passwords must match');
         }

        $user->update([
            'password'=>$request->new_password,
        ]);
        $user->save();
        return $this->returnSuccessMessage('Password Changed Successfully');
    }
}
