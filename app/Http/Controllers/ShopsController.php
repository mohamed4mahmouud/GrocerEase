<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;


class ShopsController extends Controller
{
    public function getAllShops(){

        $filteredShops = Shop::orderBy('rating','desc')->get();
        $shops = Shop::all();

        return response()->json([
            'shops'=> $shops,
            'filteredShops'=>$filteredShops

        ],200);
    }
}
