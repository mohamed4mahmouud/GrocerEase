<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Models\Order;
use Stripe\PaymentIntent;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use App\Http\Requests\OrderValidation;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class OrdersController extends Controller
{
    use GeneralTrait;
    public function getAllOrders(Request $request){
        //Getting Auth User-> Orders
        if ($request->user()) {
            $orders=$request->user()->orders;
            return $this->returnData('orders',$orders,"success");
        }else{
            // If no login for faster shopping 
            // We sending empty orders object
            return $this->returnData('orders',null,"success");
        }
    }
    public function getOrderById(Request $request,$id){
        $order=Order::find($id);

        if ($request->user()->id==$order->user_id) {
            return $this->returnData("order",$order,"success");

        }else{
            return $this->returnError(401,"unAuthorized");
        }
    }

    



    //Payment 
    public function checkout()
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        //Get Order by its id
        $products = Order::find(1)->cart;
        $lineItems = [];                       
        $totalPrice = 0;
        foreach ($products as $product) {
            $totalPrice += $product->price;
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->name,
                        'images' => [$product->image]
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => 1,
            ];
        }
        $session = \Stripe\Checkout\Session::create([
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $order = new Order();
        $order->status = 'unpaid';
        $order->total_price = $totalPrice;
        $order->session_id = $session->id;
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
                throw new NotFoundHttpException;
            }
            // $customer = \Stripe\Customer::retrieve($session->customer);

            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                throw new NotFoundHttpException();
            }
            if ($order->status === 'unpaid') {
                $order->status = 'paid';
                $order->save();
            }

            return view('products.checkout-success');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
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
                if ($order && $order->status === 'unpaid') {
                    $order->status = 'paid';
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
