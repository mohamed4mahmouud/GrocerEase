<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Review;
use App\Models\Product;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReviewTest extends TestCase
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
    protected function signIn()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user);
        return $user;
    }

    public function testAddReview()
    {
        $user = $this->signIn();
        $product = Product::factory()->create();

        $response = $this->postJson(route('products.reviews.store', ['product' => $product->id]), [
            'comment' => 'Great product!',
            'rate' => 5
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'message' => 'success'
            ]);

        $this->assertDatabaseHas('reviews', [
            'comment' => 'Great product!',
            'rating' => 5,
            'user_id' => $user->id,
            'product_id' => $product->id
        ]);
    }

    public function testGetAllReviews()
    {
        $product = Product::factory()->create();
        Review::factory()->count(3)->create(['product_id' => $product->id]);

        $response = $this->getJson(route('products.reviews.index', ['product' => $product->id]));

        $response->assertStatus(200)
            ->assertJsonStructure([
                'reviews',
                'averageRating',
                'message'
            ]);
    }

    public function testUpdateReview()
    {
        $user = $this->signIn();
        $product = Product::factory()->create();
        $review = Review::factory()->create(['user_id' => $user->id, 'product_id' => $product->id]);

        $response = $this->putJson(route('products.reviews.update', ['product' => $product->id, 'review' => $review->id]), [
            'comment' => 'Updated comment',
            'rate' => 4
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'message' => 'Updated'
            ]);

        $this->assertDatabaseHas('reviews', [
            'id' => $review->id,
            'comment' => 'Updated comment',
            'rating' => 4
        ]);
    }

    public function testDeleteReview()
    {
        $user = $this->signIn();
        $product = Product::factory()->create();
        $review = Review::factory()->create(['user_id' => $user->id, 'product_id' => $product->id]);

        $response = $this->deleteJson(route('products.reviews.destroy', ['product' => $product->id, 'review' => $review->id]));

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'message' => 'Review Deleted'
            ]);

        $this->assertDatabaseMissing('reviews', ['id' => $review->id]);
    }
}
