<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\Product;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    use GeneralTrait;

    public function getAllProducts()
    {
        $products = Product::all();
        return $this->returnData('products', $products, 'Success');
    }
    public function getProductById($id)
    {
        $products = Product::find($id);
        return $this->returnData('products', $products, 'Success');
    }
    public function create(Request $request)
    {
        try {
            if ($request->user()) {
                $products = new Product();

                $products->title = $request->input('title');
                $products->description = $request->input('description');
                $products->price = $request->input('price');
                $products->quantity = $request->input('quantity');
                $products->user_id = $request->user()->id;
                $products->save();

                return $this->returnData('products', $products, 'Success');
            }
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while creating the product.');
        }
    }
    public function updateById(Request $request, $id)
    {

        $products = Product::find($id);
        if ($request->user()->id !== $products->user_id) {
            return $this->returnError(403, 'Unauthorized');
        }
        try {
            $products->title = $request->input('title');
            $products->description = $request->input('description');
            $products->price = $request->input('price');
            $products->quantity = $request->input('quantity');

            $products->save();
            return $this->returnData('products', $products, 'Success');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while updating the product.');
        }
    }

    public function deleteproduct(Request $request, $id)
    {
        $products = Product::find($id);

        if ($request->user()->id !== $products->user_id) {
            return $this->returnError(403, 'Unauthorized');
        }
        try {
            $products->delete();
            return $this->returnData('products', $products, 'Success');
        } catch(\Exception $e) {
            return $this->returnError(500, 'Error occurred while deleting the product.');
        } 
    }

    public function Search(){
        $products=Product::all();
        $shops = Shop::all();
        
        return response()->json([
            'products'=> $products,
            'shops'=> $shops

        ],200);
    }
}
