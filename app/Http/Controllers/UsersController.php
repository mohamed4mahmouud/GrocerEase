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

    
}
