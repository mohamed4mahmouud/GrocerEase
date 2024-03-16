<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use Stripe\PaymentIntent;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function processPayment(Request $request)
{
    $request->validate([
       'token' => 'required',
    ]);

    Stripe::setApiKey(env('STRIPE_SECRET'));

    // Create a customer
    $customer = \Stripe\Customer::create();

    // Attach the payment method to the customer
    $paymentMethod = $this->createPaymentMethod($request->token);
    $paymentMethod->attach(['customer' => $customer->id]);

    // Create a PaymentIntent with the customer and payment method
    $paymentIntent = PaymentIntent::create([
        'amount' => 1000, // Amount in cents
        'currency' => 'usd',
        'customer' => $customer->id,
        'payment_method' => $paymentMethod->id,
        'confirmation_method' => 'manual',
        'confirm' => true,
    ]);

    // Retrieve the client secret
    $clientSecret = $paymentIntent->client_secret;

    return response()->json(['client_secret' => $clientSecret]);
}

private function createPaymentMethod($token)
{
    return \Stripe\PaymentMethod::create([
        'type' => 'card',
        'card' => [
            'token' => $token,
        ],
    ]);
}
}
