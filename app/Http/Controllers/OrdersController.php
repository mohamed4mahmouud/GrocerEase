<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Models\Order;
use Stripe\PaymentIntent;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use App\Http\Requests\OrderValidation;
use App\Models\Cart;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OrdersController extends Controller
{
    use GeneralTrait;
    public function getAllOrders(Request $request)
    {
        //Getting Auth User-> Orders
        if ($request->user()) {
            $orders = $request->user()->orders;
            return $this->returnData('orders', $orders, "success");
        } else {
            // If no login for faster shopping 
            // We sending empty orders object
            return $this->returnData('orders', null, "success");
        }
    }
    public function getOrderById(Request $request, $id)
    {
        $order = Order::find($id);

        if ($request->user()->id == $order->user_id) {
            return $this->returnData("order", $order, "success");
        } else {
            return $this->returnError(401, "unAuthorized");
        }
    }





    //Payment 
    public function checkout($cartId, Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $shipping_address = $request->input('shipping_address');
        // dd($request->all());
        return $this->returnData('req', $request, 'Success');
        //Get Order by its id
        $products = Cart::find($cartId)->products;
        // return response()->json($products);
        $lineItems = [];
        $totalPrice = 0;
        foreach ($products as $product) {
            $totalPrice += $product->price;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->title,
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => $product->quantity,
            ];
        }
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
            'shipping_address_collection' => [
                'allowed_countries' => ['EG'],
            ],
            'shipping_address' => $shipping_address,
        ]);

        $order = new Order();
        $order->status = 'new';
        $order->shipping_address = $shipping_address;
        $order->shipping_date = now();
        $order->price = $totalPrice;
        $order->session_id = $session->id;
        //TODO :set user ID dynamically

        $order->user_id = 8;
        $order->shop_id = 1;
        $order->save();

        return redirect($session->url);
    }

    public function success(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        $sessionId = $request->get('session_id');

        try {
            $session = \Stripe\Checkout\Session::retrieve($sessionId);
            if (!$session) {
                return response()->json(["msg" => "session not found"]);
            }
            // $customer = \Stripe\Customer::retrieve($session->customer);

            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                return response()->json(["msg" => "order with that session not found"]);
            }
            if ($order->status === 'new') {
                $order->status = 'payment received';
                $order->save();
            }

            return view('success');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
        return redirect()->away('http://localhost:3000/');
    }
    public function webhook()
    {
        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response('', 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return response('', 400);
        }

        // Handle the event
        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object;

                $order = Order::where('session_id', $session->id)->first();
                if ($order && $order->status === 'new') {
                    $order->status = 'payment received';
                    $order->save();
                    // Send email to customer
                }

                // ... handle other event types
            default:
                echo 'Received unknown event type ' . $event->type;
        }

        return response('');
    }
}
