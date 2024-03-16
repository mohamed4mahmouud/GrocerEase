<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;


class ShopsController extends Controller
{
    use GeneralTrait;
    
    public function getAllShops(){
        $shops = Shop::all();
        return $this->returnData('shops', $shops, 'Success');

    }

    public function getCategorizedShops(string $shopCategory){

        $shops = Shop::where('category' ,$shopCategory)->get();
        $filteredShops = Shop::where('category' ,$shopCategory)->orderBy('rating','desc')->get();

        return response()->json([
            'shops'=> $shops,
            'filteredShops'=>$filteredShops

        ],200);
    }
}
