<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;


class ShopsController extends Controller
{
    public function getAllShops(string $shopCategory){

        $shops = Shop::where('category' ,$shopCategory)->get();
        $filteredShops = Shop::where('category' ,$shopCategory)->orderBy('rating','desc')->get();

        return response()->json([
            'shops'=> $shops,
            'filteredShops'=>$filteredShops

        ],200);
    }
}
