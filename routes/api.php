<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;

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
Route::middleware(['auth:sanctum', 'checkAdminToken'])->get('/users', [UsersController::class, 'getAllUsers']);
Route::get('/products', [ProductsController::class, 'getAllProducts']);
Route::get('/products/{id}', [ProductsController::class, 'getProductById']);
Route::middleware(['auth:sanctum', 'checkStoreOwnerToken'])->post('/addproducts', [ProductsController::class, 'create']);
Route::middleware(['auth:sanctum'])->put('/updateproducts/{id}', [ProductsController::class, 'updateById']);
Route::middleware(['auth:sanctum'])->delete('/deleteproduct/{id}', [ProductsController::class, 'deleteproduct']);

