<?php

namespace App\Http\Controllers;

// use GoogleMaps;
use App\Traits\GeneralTrait;
use GoogleMaps\Facade\GoogleMapsFacade;


class TrackingController extends Controller
{
    use GeneralTrait;

    public function index()
    {
        $response = GoogleMapsFacade::load('geocoding')
		->setParam (['address' =>'santa cruz'])
 		->get();
        return $response;
    }

    private function geocodeAddress($address)
    {
        return GoogleMapsFacade::load('geocoding')
            ->setParam(['address' => $address])
            ->get();
    }
}