<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Delivery;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TrackingTest extends TestCase
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
    public function testGetDeliveryLocation()
    {
        // Create a delivery
        $delivery = Delivery::factory()->create();

        // Hit the endpoint
        $response = $this->get('/api/deliveries/' . $delivery->id);

        // Assert response status
        $response->assertStatus(200);

        // Assert response data structure
        $response->assertJsonStructure([
            'status',
            'message',
            'data' => ['location' => ['id', 'order_id', 'status', 'latitude', 'longitude']]
        ]);

        // Assert delivery location data
        $response->assertJson([
            'status' => 'success',
            'data' => [
                'location' => [
                    'id' => $delivery->id,
                    'order_id' => $delivery->order_id,
                    'status' => $delivery->status,
                    'latitude' => null, // Since no location has been set
                    'longitude' => null, // Since no location has been set
                ]
            ]
        ]);
    }

    public function testUpdateLocation()
    {
        // Create a delivery
        $delivery = Delivery::factory()->create();

        // Fake latitude and longitude
        $latitude = 40.7128;
        $longitude = -74.0060;

        // Hit the endpoint with latitude and longitude
        $response = $this->put('/api/deliveries/' . $delivery->id, [
            'latitude' => $latitude,
            'longitude' => $longitude,
        ]);

        // Assert response status
        $response->assertStatus(200);

        // Assert delivery location updated successfully
        $response->assertJson([
            'status' => 'success',
            'data' => [
                'delivery' => [
                    'id' => $delivery->id,
                    'order_id' => $delivery->order_id,
                    'status' => $delivery->status,
                ]
            ]
        ]);

        // Retrieve the updated delivery from the database
        $updatedDelivery = Delivery::find($delivery->id);

        // Assert delivery location updated in the database
        $this->assertEquals($latitude, DB::select(DB::raw("SELECT ST_X(current_location) FROM deliveries WHERE id = {$delivery->id}"))[0]->st_x);
        $this->assertEquals($longitude, DB::select(DB::raw("SELECT ST_Y(current_location) FROM deliveries WHERE id = {$delivery->id}"))[0]->st_y);
    }

    public function testUpdateLocationValidation()
    {
        // Create a delivery
        $delivery = Delivery::factory()->create();

        // Hit the endpoint without latitude and longitude
        $response = $this->put('/api/deliveries/' . $delivery->id, []);

        // Assert response status
        $response->assertStatus(422);

        // Assert validation error for latitude and longitude
        $response->assertJsonValidationErrors(['latitude', 'longitude']);
    }
}
