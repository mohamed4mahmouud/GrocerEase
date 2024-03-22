<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
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
    public function testUserRegistration()
    {
        $userData = [
            'name' => 'Farah Ali',
            'email' => 'farah@example.com',
            'password' => '123456789',
            'address' => 'sidi bisher',
            'phone' => '01284971588'
        ];

        $response = $this->postJson('/api/auth/register', $userData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'token',
                'message'
            ]);
    }
}
