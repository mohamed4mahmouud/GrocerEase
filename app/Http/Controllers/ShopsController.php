<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Shop;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;


class ShopsController extends Controller
{
    use GeneralTrait;

    public function getAllShops()
    {
        $shops = Shop::all();
        return $this->returnData('shops', $shops, 'Success');
    }


    public function getCategorizedShops(string $shopCategory)
    {

        $shops = Shop::where('category', $shopCategory)->get();

        return $this->returnData('shops', $shops, 'Success');
    }

    public function getFilteredShops(string $shopCategory)
    {
        $shops = Shop::where('category', $shopCategory)
            ->where('rating', '>', 4)
            ->orderBy('rating', 'desc')
            ->get();

        return $this->returnData('shops', $shops, 'Success');
    }
    public function getFilteredShopsByMinAmount(string $shopCategory)
    {
        $shops = Shop::where('category', $shopCategory)
            ->where('min_order', '<', 80)
            ->orderBy('min_order', 'asc')
            ->get();

        return $this->returnData('shops', $shops, 'Success');
    }

    public function createShop(Request $request)
    {
        try {
            $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath(), ['folder' => 'shops'])->getSecurePath();
            $shop = Shop::create(
                [
                    'name' => $request->input('name'),
                    'location' => $request->input('location'),
                    'category' => $request->input('category'),
                    "rating" => $request->input('rating'),
                    "latitude"=>$request->input('latitude'),
                    "longtitude"=>$request->input('longitude'),
                    'image' => $uploadedFileUrl
                ],
            );
            return $this->returnSuccessMessage("Shop Created Successfully");
        } catch (\Exception $e) {
            return $this->returnError(500 , 'Failed to create shop');
        }

    }

    public function updateShop(Request $request , string $id)
{
    try {
        $shop = Shop::find($id);

        if (!$shop) {
            return $this->returnError(404 , 'Shop not found');
        }

        // Check if the image file is provided in the request
        if ($request->hasFile('image')) {

                // Specify the folder where you want to upload the image
                $folder = 'shops';
                // Upload the image to Cloudinary with the specified folder
                $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath(), ['folder' => $folder])->getSecurePath();

        } else {
            // If no image file is provided, retain the existing image URL
            $uploadedFileUrl = $shop->image;
        }

        $shop->update([
            'name' => $request->name,
            'location' => $request->location,
            'category' => $request->category,
            'rating' => $request->rating,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'image' => $uploadedFileUrl
        ]);
        return $this->returnData('shop' , $shop , 'updated');

    } catch (\Exception $e) {
    return $this->returnError(500 , 'Failed to update shop');
    }
}


    public function checkPlaces(Request $request , string $category)
    {

        $shops = Shop::where('category',$category)->get();

        // Retrieve places from the request
        $places = $request->input('places');

        // Array to store shops near the places
        $nearbyShops = [];
        $addedShopIds = [];

        // Iterate over each place
        foreach ($places as $place) {
            // Extract latitude and longitude from the place
            $placeLatitude = $place['location']['lat'];
            $placeLongitude = $place['location']['lng'];

            // Iterate over each shop
            foreach ($shops as $shop) {
                $shopLatitude = (float) $shop->latitude;
                $shopLongitude = (float) $shop->longtitude;
                $distance = $this->calculateDistance($placeLatitude, $placeLongitude, $shopLatitude, $shopLongitude);


                if ($distance <= 1.0 && !in_array($shop->id, $addedShopIds)) {
                    $nearbyShops[] = $shop;
                    $addedShopIds[] = $shop->id;
                }
            }
        }

        // Return the nearby shops
        return $this->returnData('shops', $nearbyShops, 'Success');
    }

    // Function to calculate distance between two points (latitude and longitude)
    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $theta = $lon1 - $lon2;
        $distance = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $distance = acos($distance);
        $distance = rad2deg($distance);
        $distance = $distance * 60 * 1.1515;
        $distance = $distance * 1.609344;
        return $distance;
    }
    public function getShopById(string $cat,string $id)
    {
        $shop = Shop::find($id);
        return $this->returnData('shop', $shop, 'Success');
    }
}
