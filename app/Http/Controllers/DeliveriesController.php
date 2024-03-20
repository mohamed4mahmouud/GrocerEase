<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Illuminate\Http\Request;

class DeliveriesController extends Controller
{
    public function updatePosition(Request $request, Delivery $delivery){
        $request->validate([
            'longitude'=>['required','numeric'],
            'latitude'=>['required','numeric'],
        ]);
        
    }
}
