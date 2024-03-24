<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Order;
use App\Models\Delivery;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DeliveriesTest extends TestCase
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
    public function testUpdatePosition()
    {
        $delivery = Delivery::factory()->create();
        $order = Order::factory()->create();

        $requestData = [
            'longitude' => 123.456, // Replace with actual longitude value
            'latitude' => 12.345, // Replace with actual latitude value
        ];

        $response = $this->putJson("/api/deliveries/{$delivery->id}", $requestData);

        $response->assertStatus(200);

        $this->assertDatabaseHas('deliveries', [
            'id' => $delivery->id,
            'order_id' => $order->id,
            'current_location' => json_encode([
                'longitude' => $requestData['longitude'],
                'latitude' => $requestData['latitude'],
            ]),
        ]);
    }
}
