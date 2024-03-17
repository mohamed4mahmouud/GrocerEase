<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ShopsController;
use App\Http\Controllers\ProductsController;

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
});
Route::middleware(['auth:sanctum','checkAdminToken'])->get('/users',[UsersController::class,'getAllUsers']);
Route::get('/products',[ProductsController::class,'getAllProducts']);
Route::get('/products/{id}', [ProductsController::class, 'getProductById']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->post('/addproducts', [ProductsController::class, 'create']);
Route::middleware(['auth:sanctum'])->put('/updateproducts/{id}', [ProductsController::class, 'updateById']);
Route::middleware(['auth:sanctum'])->delete('/deleteproduct/{id}', [ProductsController::class, 'deleteproduct']);


//Cart Routes
Route::middleware(['auth:sanctum'])->post('/add-to-cart' , [ProductsController::class ,'addProductToCart']);
Route::middleware(['auth:sanctum'])->get('/get-cart' , [ProductsController::class ,'getLoggedUserCart']);
Route::middleware(['auth:sanctum'])->delete('/delete-product-cart/{id}' , [ProductsController::class ,'deleteCartItem']);
Route::middleware(['auth:sanctum'])->delete('/clear-cart' , [ProductsController::class ,'clearCart']);



Route::get('/shops/{shopCategory}',[ShopsController::class,'getAllShops']);
Route::get('/allData',[ProductsController::class,'Search']);
Route::get('/categories',[CategoryController::class , 'getAllCategories']);
Route::get('/categories/{category}',[CategoryController::class , 'getCategory']);
Route::middleware(['auth:sanctum','checkStoreOwnerToken'])->delete('/delete-category/{category}',[CategoryController::class,  'deleteCategory']);
Route::middleware(['auth:sanctum','checkStoreOwnerToken'])->post('/add-categories',[CategoryController::class , 'addCategory']);
Route::middleware(['auth:sanctum','checkStoreOwnerToken'])->put('/update-category/{category}',[CategoryController::class,  'updateCategory']);

Route::middleware(['auth:sanctum'])->get('/user/profile',[UsersController::class,'show']);
Route::middleware(['auth:sanctum'])->put('/user/profile/edit', [UsersController::class, 'edit']);
Route::post('/payment', [StripeController::class, 'processPayment']);
