<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Shop;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShopsTest extends TestCase
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
    public function testGetAllShops()
    {
        Shop::factory()->count(3)->create();

        $response = $this->get('/api/shops');

        $response->assertStatus(200)
            ->assertJsonStructure(['status', 'message', 'data' => ['shops']]);
    }
    public function testGetCategorizedShops()
    {
        $category = 'category';
        Shop::factory()->count(3)->create(['category' => $category]);

        $response = $this->get('/api/shops/' . $category);

        $response->assertStatus(200)
            ->assertJsonStructure(['status', 'message', 'data' => ['shops']]);
    }
    public function testCreateShop()
    {
        Storage::fake('public');
        $image = UploadedFile::fake()->image('shop.jpg');

        // Hit the endpoint with necessary data including image
        $response = $this->postJson('/api/store/create', [
            'name' => 'Shop Name',
            'location' => 'Shop Location',
            'category' => 'Shop Category',
            'rating' => 4.5,
            'latitude' => 123.456,
            'longitude' => 78.901,
            'image' => $image,
        ]);

        // Assert response status and message
        $response->assertStatus(200)
            ->assertJson(['status' => 'success', 'message' => 'Shop Created Successfully']);

        // Assert that the image was stored correctly
        $this->assertTrue(Storage::disk('public')->exists('shops/' . $image->hashName()));
    }

    /**
     * Test updating a shop.
     *
     * @return void
     */
    public function testUpdateShop()
    {
        // Create a shop
        $shop = Shop::factory()->create();

        Storage::fake('public');
        $updatedImage = UploadedFile::fake()->image('updated_shop.jpg');

        // Hit the endpoint with updated data including image
        $response = $this->putJson('/api/shops/' . $shop->id, [
            'name' => 'Updated Shop Name',
            'location' => 'Updated Shop Location',
            'category' => 'Updated Shop Category',
            'rating' => 4.2,
            'latitude' => 111.222,
            'longitude' => 333.444,
            'image' => $updatedImage,
        ]);

        // Assert response status and message
        $response->assertStatus(200)
            ->assertJson(['status' => 'success', 'message' => 'updated']);

        // Assert that the image was updated correctly
        $this->assertTrue(Storage::disk('public')->exists('shops/' . $updatedImage->hashName()));
    }

    public function testCheckPlaces()
    {
        // Create some shops with specific coordinates
        Shop::factory()->create(['latitude' => 10.0, 'longitude' => 20.0]);
        Shop::factory()->create(['latitude' => 30.0, 'longitude' => 40.0]);

        // Hit the endpoint with some places data
        $response = $this->postJson('/api/checkPlaces/SomeCategory', [
            'places' => [
                ['location' => ['lat' => 12.0, 'lng' => 22.0]],
                ['location' => ['lat' => 32.0, 'lng' => 42.0]],
            ],
        ]);

        // Assert response status and structure
        $response->assertStatus(200)
            ->assertJsonStructure(['status', 'message', 'data' => ['shops']]);
    }
}
