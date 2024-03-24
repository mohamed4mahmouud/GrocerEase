<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Cart;
use App\Models\Shop;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\CartProduct;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductsTest extends TestCase
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
    public function testGetAllProducts()
    {
        $response = $this->get('/api/products');

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }

    public function testGetProductById()
    {
        $product = Product::factory()->create();

        $response = $this->get("/api/products/{$product->id}");

        $response->assertStatus(200)
            ->assertJson(['data' => ['products' => $product->toArray()]]);
    }

    public function testCreateProduct()
    {
        Storage::fake('cloudinary');

        $user = User::factory()->create();
        $shop = Shop::factory()->create();
        $category = Category::factory()->create();

        $file = UploadedFile::fake()->image('product.jpg');

        $response = $this->actingAs($user)->postJson('/api/shops/' . $shop->id . '/categories/' . $category->id . '/products', [
            'title' => 'Test Product',
            'description' => 'This is a test product',
            'price' => 10.99,
            'quantity' => 5,
            'image' => $file,
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }

    public function testUpdateProductById()
    {
        $product = Product::factory()->create();

        $response = $this->actingAs($product->user)->putJson("/api/updateproducts/{$product->id}", [
            'title' => 'Updated Product',
            'description' => 'Updated description',
            'price' => 15.99,
            'quantity' => 10,
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }

    public function testDeleteProduct()
    {
        $product = Product::factory()->create();

        $response = $this->actingAs($product->user)->delete("/api/deleteproduct/{$product->id}");

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }

    public function testGetRelatedProducts()
    {
        $product = Product::factory()->create();

        $response = $this->postJson('/api/RelatedProducts', [
            'id' => $product->id,
            'category_id' => $product->category_id,
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }

    public function testGetLoggedUserCart()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/api/get-cart');

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['cart']]);
    }

    public function testDeleteCartItem()
    {
        $cartItem = CartProduct::factory()->create();

        $response = $this->actingAs($cartItem->cart->user)->delete("/api/delete-product-cart/{$cartItem->product_id}");

        $response->assertStatus(200)
            ->assertJson(['message' => 'Cart item deleted successfully']);
    }

    public function testClearCart()
    {
        $cart = Cart::factory()->create();

        $response = $this->actingAs($cart->user)->delete('/api/clear-cart');

        $response->assertStatus(200)
            ->assertJson(['message' => 'Cart cleared successfully']);
    }

    public function testUpdateQuantity()
    {
        $cartItem = CartProduct::factory()->create();

        $response = $this->postJson('/api/update-quantity', [
            'product_id' => $cartItem->product_id,
            'quantity' => 2,
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['cart']]);
    }

    public function testGetShopProductsByCategory()
    {
        $shop = Shop::factory()->create();
        $category = Category::factory()->create();
        $products = Product::factory(5)->create(['shop_id' => $shop->id, 'category_id' => $category->id]);

        $response = $this->get("/api/shops/{$category->name}/{$shop->id}/products/{$category->id}");

        $response->assertStatus(200)
            ->assertJsonStructure(['data' => ['products']]);
    }
}
