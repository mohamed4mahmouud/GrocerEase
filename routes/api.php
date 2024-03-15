<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
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

Route::group(['prefix'=>'auth'],function(){
    Route::post('/register',[AuthController::class,'register']);
    Route::post('/login',[AuthController::class,'login']);
});
Route::middleware(['auth:sanctum','checkAdminToken'])->get('/users',[UsersController::class,'getAllUsers']);
Route::get('/products',[ProductsController::class,'getAllProducts']);

Route::get('/categories',[CategoryController::class , 'getAllCategories']);
Route::get('/categories/{category}',[CategoryController::class , 'getCategory']);
Route::post('/add-categories',[CategoryController::class , 'addCategory']);
Route::put('/update-category/{category}',[CategoryController::class,  'updateCategory']);
Route::delete('/delete-category/{category}',[CategoryController::class,  'deleteCategory']);

Route::middleware(['auth:sanctum'])->get('/user/profile',[UsersController::class,'show']);
Route::middleware(['auth:sanctum'])->put('/user/profile/edit', [UsersController::class, 'edit']);
