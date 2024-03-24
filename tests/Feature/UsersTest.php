<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UsersTest extends TestCase
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
    public function testGetAllUsers()
    {
        // Create dummy users
        User::factory()->count(3)->create();

        // Hit the endpoint
        $response = $this->get('/api/users');

        // Assert response status and structure
        $response->assertStatus(200)
            ->assertJsonStructure(['status', 'message', 'data' => ['users']]);
    }
    public function testGetUserProfile()
    {
        // Create a user
        $user = User::factory()->create();

        // Hit the endpoint
        $response = $this->actingAs($user)->get('/api/user/profile');

        // Assert response status and structure
        $response->assertStatus(200)
            ->assertJsonStructure(['status', 'message', 'data' => ['users']]);
    }

    /**
     * Test updating a user profile.
     *
     * @return void
     */
    public function testUpdateUserProfile()
    {
        // Create a user
        $user = User::factory()->create();

        // New data for user profile update
        $newData = [
            'name' => 'New Name',
            'phone' => '123456789',
            'address' => 'New Address',
            'email' => 'newemail@example.com',
        ];

        // Hit the endpoint with updated data
        $response = $this->actingAs($user)
            ->put('/api/user/profile/edit', $newData);

        // Assert response status and message
        $response->assertStatus(200)
            ->assertJson(['message' => 'Profile updated successfully']);

        // Refresh user data from the database
        $user->refresh();

        // Assert that user profile data is updated correctly
        $this->assertEquals($newData['name'], $user->name);
        $this->assertEquals($newData['phone'], $user->phone);
        $this->assertEquals($newData['address'], $user->address);
        $this->assertEquals($newData['email'], $user->email);
    }
}
