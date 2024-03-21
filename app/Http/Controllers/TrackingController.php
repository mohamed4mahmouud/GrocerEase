<?php

namespace App\Http\Controllers;

// use GoogleMaps;

use App\Models\Delivery;
use App\Traits\GeneralTrait;
use Illuminate\Support\Facades\DB;
// use GoogleMaps\Facade\GoogleMapsFacade;
use Illuminate\Http\Request as Request;

class TrackingController extends Controller
{
    use GeneralTrait;
    public function getDeliveryLocation(Delivery $delivery) {
        $delivery = Delivery::query()
            ->select('id', 'order_id', 'status')
            ->selectRaw("GetLatitude(current_location) as latitude")
            ->selectRaw("GetLongitude(current_location) as longitude")
            ->where('id', $delivery->id)
            ->firstOrFail();
    
        return $this->returnData('location', $delivery, 'Delivery location retrieved successfully');
    }
    
    public function updateLocation(Request $request, Delivery $delivery)
    {
        $request->validate([
            'latitude' => ['required', 'numeric'],
            'longitude' => ['required', 'numeric'],
        ]);
        $delivery->update([
            'current_location' => DB::raw("POINT({$request->latitude}, {$request->longitude})")
        ]);
        return $this->returnData('delivery', $delivery, 'Delivery location updated successfully');
    }
}
