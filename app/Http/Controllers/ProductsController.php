<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    use GeneralTrait;
    public function getAllProducts(){
        $products=Product::all();
        return $this->returnData('products',$products,'Success');
    }

    public function Search(){
        $products=Product::all();
        return response()->json([
            'result'=> $products
        ],200);
    }
}
