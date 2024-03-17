<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
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

    public function addProductToCart(Request $request)
    {
        $userId  = $request->user()->id;
        $cart = Cart::where('user_id' ,$userId)->first();

        if(!$cart){
            //create cart for logged user
            $cart = Cart::create([
                'user_id'=> $userId,
            ]);
            $cart->products()->attach($request->product_id, ['quantity' => 1]);
            $cartItems = CartProduct::all();
            return $this->returnData('cart',$cartItems , 'success');
        }
        // Check if the product already exists in the cart
        $product = $cart->products()->where('product_id', $request->product_id)->first();

        if($product){
            // If the product already exists, increment its quantity
            $product->pivot->increment('quantity');
        } else {
            // Otherwise, attach the product to the cart with quantity 1
            $cart->products()->attach($request->product_id, ['quantity' => 1]);
        }
        $cartItems = CartProduct::all();
        return $this->returnData('cart',$cartItems , 'success');
    }

    public function getLoggedUserCart(Request $request)
    {
        $cart = Cart::where('user_id' , $request->user()->id)->first();

        //check if user have cart
        if($cart){
            $cartItems = CartProduct::all();
            return $this->returnData('cart', $cartItems , 'success') ;
        }else{
            return $this->returnError(404 , 'Cart is empty or does not exist');
        }
    }

    public function deleteCartItem(string $id)
    {
        $cartItem = CartProduct::where('product_id' , $id)->first();
        if($cartItem){
            $cartItem->delete();
            return $this->returnSuccessMessage('Cart item deleted successfully',200);
        }else {
            return $this->returnError(404 , "Cart item not found");
        }
    }

    public function clearCart(Request $request)
    {
        $cart = Cart::where('user_id',$request->user()->id)->first();

        if($cart){
            $cart->products()->detach();

            return $this->returnSuccessMessage('Cart cleared successfully',200);
        }else{
            return $this->returnError(404 , "Cart not found");
        }
    }
}
