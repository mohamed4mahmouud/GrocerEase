<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Category;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CategoryTest extends TestCase
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
    public function testGetAllCategories()
    {
        $response = $this->get('/api/categories');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'image',
                        'user_id',
                        'created_at',
                        'updated_at'
                    ]
                ],
                'message'
            ]);
    }

    public function testAddCategory()
    {
        $user = User::factory()->create();

        $categoryData = [
            'name' => 'Test Category',
            'image' => 'test_image.jpg',
            'user_id' => $user->id,
        ];

        $response = $this->actingAs($user)->postJson('/api/add-categories', $categoryData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'image',
                    'user_id',
                    'created_at',
                    'updated_at'
                ],
                'message'
            ]);
    }
    public function testGetCategory()
    {
        $category = Category::factory()->create();

        $response = $this->get('/api/categories/' . $category->id);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'image',
                    'user_id',
                    'created_at',
                    'updated_at'
                ],
                'message'
            ]);
    }
    public function testUpdateCategory()
    {
        $user = User::factory()->create();
        $category = Category::factory()->create(['user_id' => $user->id]);

        $updatedData = [
            'name' => 'Updated Category Name',
            'image' => 'updated_image.jpg',
        ];

        $response = $this->actingAs($user)->putJson('/api/update-category/' . $category->id, $updatedData);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'id' => $category->id,
                    'name' => 'Updated Category Name',
                    'image' => 'updated_image.jpg',
                    'user_id' => $user->id,
                ],
                'message' => 'Updated'
            ]);
    }

    public function testDeleteCategory()
    {
        $user = User::factory()->create();
        $category = Category::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->deleteJson('/api/delete-category/' . $category->id);

        $response->assertStatus(200)
            ->assertJson([
                'data' => '',
                'message' => 'Deleted'
            ]);

        $this->assertDatabaseMissing('categories', ['id' => $category->id]);
    }
}
