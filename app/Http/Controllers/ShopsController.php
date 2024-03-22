<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;


class ShopsController extends Controller
{
    use GeneralTrait;

    public function getAllShops()
    {

    public function getAllShops()
    {
        $shops = Shop::all();
        return $this->returnData('shops', $shops, 'Success');
    }

    public function getCategorizedShops(string $shopCategory)
    {
    public function getCategorizedShops(string $shopCategory)
    {

        $shops = Shop::where('category', $shopCategory)->get();

        return $this->returnData('shops', $shops, 'Success');
    }
    public function createShop(Request $request)
    {
        $shop = Shop::create(
            [
                'name' => $request->input('name'),
                'location' => $request->input('location'),
                'category' => $request->input('category'),
                "rating" => $request->input('rating')
            ],
            
        );
        return $this->returnSuccessMessage("Shop Created Successfully");
    }
}
