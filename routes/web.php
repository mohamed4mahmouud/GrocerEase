<?php

use App\Http\Controllers\OrdersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/checkout/{cartId?}/{shipping_address?}/{user?}/{shopId?}', [OrdersController::class, 'checkout'])->name('checkout');
// Route::get('/checkout', [OrdersController::class, 'checkout'])->name('checkout');

Route::get('/success', [OrdersController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [OrdersController::class, 'cancel'])->name('checkout.cancel');
Route::post('/webhook', [OrdersController::class, 'webhook'])->name("checkout.webhook");
