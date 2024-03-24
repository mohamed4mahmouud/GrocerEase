<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Product;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Requests\CouponRequest;
use App\Models\Cart;

class CouponController extends Controller
{

    use GeneralTrait;

    // @desc  Get list of coupons
    // @access Owner
    public function getAllCoupons()
    {
        try {
            $coupons = Coupon::all();
            return $this->returnData('coupon' , $coupons , 'success');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get coupons');
        }
    }

    // @desc  Create coupon
    // @access Owner
    public function createCoupon(CouponRequest $request)
    {
        try {
            if(!$request->validated()){
                $errors = $request->errors();
                return $this->returnError(422, $errors);
            }

            $coupon = Coupon::create([
                'body'=> $request->body,
                'discount'=> $request->discount,
                'Expiry_date'=> Carbon::parse($request->expiry_date)
            ]);
            return $this->returnData('Coupon' , $coupon , 'created');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while Create coupon');
        }
    }

    // @desc  Get coupon
    // @access Owner
    public function getCoupon(string $id)
    {
        try{
            $coupon = Coupon::find($id);

            if(!$coupon){
                return $this->returnError(404 , 'Coupon not found');
            }

            return $this->returnData('coupon',$coupon , "success");

        }catch (\Exception $e){
            return $this->returnError(500, 'Error occurred while get coupon');
        }
    }

    // @desc  Update coupon
    // @access Owner
    public function updateCoupon(Request $request, string $id)
    {
        try{
            $coupon = Coupon::find($id);

            if(!$coupon){
                return $this->returnError(404 , 'Coupon not found');
            }

            $coupon->update([
                'body' => $request->body,
                'discount' => $request->discount,
                'Expiry_date' => $request->expiry_date
            ]);

            return $this->returnData('coupon',$coupon , "Updated");
        } catch (\Exception $e){
            return $this->returnError(500, 'Error occurred while update coupon');
        }
    }

    // @desc  delete coupon
    // @access Owner
    public function deleteCoupon(string $id)
    {
        try{
            $coupon = Coupon::find($id);

            if(!$coupon){
                return $this->returnError(404 , 'Coupon not found');
            }

            $coupon->delete();
            return $this->returnSuccessMessage('Coupon Deleted');

        } catch (\Exception $e){
            return $this->returnError(500, 'Error occurred while delete coupon');
        }
    }

    // @desc  check coupon Is Valid
    public function checkCouponIsValid(Request $request)
    {
        try {
            $reqCoupon = $request->coupon;
            $coupon = Coupon::where('body' , $reqCoupon)->first();

            if(!$coupon){
                return $this->returnError(404 , 'Invalid Coupon');
            }

            $expiryDate = Carbon::parse($coupon->Expiry_date);

            // Check if expiry date is greater than now
            if ($expiryDate->isPast()) {
                return $this->returnError(400, 'Coupon has expired');
            }

            if(!$coupon->Status){
                return $this->returnError(400, 'Invalid Coupon');
            }

            $discountedPrice = $request->total_price - $coupon->discount;

            $coupon->update([
                'Status' => false
            ]);

            return response()->json([
                'discountedPrice' => $discountedPrice,

                'message' =>'success'
            ]);

        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while check coupon');
        }
    }
}
