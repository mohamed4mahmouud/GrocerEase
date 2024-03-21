<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    use GeneralTrait;
    public function getAllUsers(){
        $users=User::all();
        return $this->returnData('users',$users,'Success');
    }
    public function show(Request $request){
        $user = $request->user();

        if($user){
            return $this->returnData('users',$user,'Success');
        }else{
            return $this->returnError(401,'Invalid');
        }

    }
    public function edit(Request $request)
    {
        $user = $request->user();

        $user->update([
            'name'=>$request->name,
            'phone'=>$request->phone,
            'address'=>$request->address
        ]);

        return response()->json(['message' => 'Profile updated successfully']);
    }

}
