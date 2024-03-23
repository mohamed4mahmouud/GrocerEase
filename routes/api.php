<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShopsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TrackingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/forgot-password',[AuthController::class, 'forgotPassword']);
    Route::post('/verify-reset-password',[AuthController::class, 'verifyResetCode']);
    Route::post('/reset-password',[AuthController::class, 'resetPassword']);

});

//Get All users for admin panel
Route::middleware(['auth:sanctum','checkAdminToken'])->get('/users',[UsersController::class,'getAllUsers']);

Route::get('/products',[ProductsController::class,'getAllProducts']);
Route::get('/products/{id}', [ProductsController::class, 'getProductById']);
Route::post('/RelatedProducts', [ProductsController::class, 'getRelatedProduct']);

Route::middleware(['auth:sanctum'])->group(function(){
    //Products Routes
    Route::put('/updateproducts/{id}', [ProductsController::class, 'updateById']);
    Route::delete('/deleteproduct/{id}', [ProductsController::class, 'deleteproduct']);
    //Cart Routes
    Route::post('/add-to-cart' , [ProductsController::class ,'addProductToCart']);
    Route::get('/get-cart' , [ProductsController::class ,'getLoggedUserCart']);
    Route::delete('/delete-product-cart/{id}' , [ProductsController::class ,'deleteCartItem']);
    Route::delete('/clear-cart' , [ProductsController::class ,'clearCart']);
    //User Profile Routes
    Route::get('/user/profile',[UsersController::class,'show']);
    Route::put('/user/profile/edit', [UsersController::class, 'edit']);
    //Orders Route
    Route::post('/orders',[OrdersController::class,'getAllOrders']);
    Route::get('/orders/{id?}',[OrdersController::class,'getOrderById']);

    Route::post('/logout',[AuthController::class,'logout']);
    //change password route
    Route::put('/changepassword',[AuthController::class,'changePassword']);

    //reviews route
    Route::post('/products/{product}/reviews',[ReviewController::class , 'addReview']);
    Route::put('/products/{product}/reviews/{review}',[ReviewController::class , 'updateReview']);
    Route::delete('/products/{product}/reviews/{review}',[ReviewController::class , 'deleteReview']);

});
//reviews route to get all reviews related to product with avg_rating
Route::get('/products/{product}/reviews',[ReviewController::class , 'getAllReviews']);

Route::middleware(['auth:sanctum'])->post('/update-quantity' , [ProductsController::class ,'updateQuantity']);
//Coupon Routes
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->get('/coupons', [CouponController::class,  'getAllCoupons']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->get('/coupons/{id}', [CouponController::class,  'getCoupon']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->post('/coupons', [CouponController::class,  'createCoupon']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->put('/coupons/{id}', [CouponController::class,  'updateCoupon']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->delete('/coupons/{id}', [CouponController::class,  'deleteCoupon']);
Route::middleware(['auth:sanctum'])->put('/coupons', [CouponController::class,  'checkCouponIsValid']);
Route::middleware(['auth:sanctum'])->put('/Discount', [CouponController::class,  'updateDiscount']);

// shops routes
Route::get('/shops/{shopCategory}', [ShopsController::class, 'getCategorizedShops']);
Route::get('/shops', [ShopsController::class, 'getAllShops']);
Route::get('/filteredShops/{category}', [ShopsController::class, 'getFilteredShops']);
Route::post('/store/create', [ShopsController::class, 'createShop'])->name('shops.create');
Route::post('/checkPlaces/{category}', [ShopsController::class, 'checkPlaces']);

Route::get('/categories',[CategoryController::class , 'getAllCategories']);
Route::get('/categories/{category}',[CategoryController::class , 'getCategory']);
Route::middleware(['auth:sanctum','checkStoreOwnerToken'])->group(function(){
    Route::delete('/delete-category/{category}',[CategoryController::class,  'deleteCategory']);
    Route::post('/add-categories',[CategoryController::class , 'addCategory']);
    Route::put('/update-category/{category}',[CategoryController::class,  'updateCategory']);
    //add product route
    Route::post('/shops/{shop}/categories/{category}/products', [ProductsController::class, 'create']);
});


Route::post('/payment', [OrdersController::class, 'processPayment']);
Route::get('/deliveries/{delivery}',[TrackingController::class,'getDeliveryLocation']);
Route::put('/deliveries/{delivery}',[TrackingController::class,'updateLocation']);
