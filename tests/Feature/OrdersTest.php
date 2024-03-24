<?php

namespace Tests\Feature;

use Stripe\Stripe;
use Tests\TestCase;
use App\Models\Cart;
use App\Models\User;
use App\Models\Order;
use App\Models\Delivery;
use Stripe\Checkout\Session;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrdersTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function testGetAllOrders()
    {
        $user = User::factory()->create();
        $orders = Order::factory(3)->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->postJson('/api/orders');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => [
                             'id',
                             'shipping_address',
                             'shipping_date',
                             'price',
                             'status',
                             'user_id',
                             'shop_id',
                             'delivery_id',
                             'created_at',
                             'updated_at',
                             'delivery' => [
                                 'id',
                                 'order_id',
                                 'status',
                                 'latitude',
                                 'longitude',
                                 'created_at',
                                 'updated_at',
                             ]
                         ]
                     ],
                     'message'
                 ]);
    }

    // Test method for retrieving a specific order by ID
    public function testGetOrderById()
    {
        $user = User::factory()->create();
        $order = Order::factory()->create(['user_id' => $user->id]);
        $delivery = Delivery::factory()->create(['order_id' => $order->id]);

        $response = $this->actingAs($user)->getJson('/api/orders/' . $order->id);

        $response->assertStatus(200)
                 ->assertJson([
                     'order' => [
                         'id' => $order->id,
                         'shipping_address' => $order->shipping_address,
                         'shipping_date' => $order->shipping_date,
                         'price' => $order->price,
                         'status' => $order->status,
                         'user_id' => $order->user_id,
                         'shop_id' => $order->shop_id,
                         'delivery_id' => $order->delivery_id,
                     ],
                     'delivery' => [
                         'id' => $delivery->id,
                         'order_id' => $delivery->order_id,
                         'status' => $delivery->status,
                         'latitude' => $delivery->latitude,
                         'longitude' => $delivery->longitude,
                     ],
                     'msg' => 'success'
                 ]);
    }

    // Test method for handling payment processing
    public function testProcessPayment()
    {
        // Mock Stripe API call
        $this->mock(\Stripe\Checkout\Session::class, function ($mock) {
            $mock->shouldReceive('create')->once()->andReturn((object)['id' => 'mock_session_id', 'url' => 'mock_redirect_url']);
        });

        // Mock route for success URL
        Route::get('/success', function () {
            return view('success');
        })->name('checkout.success');

        $response = $this->postJson('/api/payment');

        $response->assertStatus(302)
                 ->assertRedirect('mock_redirect_url');
    }

    // Test method for handling the success URL after payment
    public function testSuccess()
    {
        $order = Order::factory()->create(['status' => 'new']);

        $response = $this->get('/success?session_id=TESTSESSIONID');

        $response->assertStatus(200)
                 ->assertViewIs('success');

        // Check if the order status is updated to 'payment received'
        $this->assertDatabaseHas('orders', [
            'id' => $order->id,
            'status' => 'payment received',
        ]);
    }

    public function testCancel()
    {
        $response = $this->get('/cancel');

        $response->assertStatus(200);
    }

    // Test method for webhook
    public function testWebhook()
    {
        // Assume webhook secret is set
        putenv('STRIPE_WEBHOOK_SECRET=TEST_WEBHOOK_SECRET');

        // Simulate Stripe webhook payload
        $payload = [
            'id' => 'evt_test_webhook',
            'type' => 'checkout.session.completed',
            'data' => [
                'object' => [
                    'id' => 'TESTSESSIONID',
                ],
            ],
        ];

        $response = $this->postJson('/webhook', $payload, ['Stripe-Signature' => 'TEST_SIGNATURE']);

        $response->assertStatus(200);
    }
}
