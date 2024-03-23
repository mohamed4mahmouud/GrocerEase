<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
    public function testUserLogin()
    {
        $user = User::factory()->create([
            'email' => 'farah@example.com',
            'password' => bcrypt('123456789'),
        ]);

        $loginData = [
            'email' => 'test@example.com',
            'password' => 'testpassword',
        ];

        $response = $this->postJson('/api/auth/login', $loginData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'accessToken',
                'token_type',
                'msg',
            ]);
    }
    public function testForgotPassword()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
        ]);

        $response = $this->postJson('/api/auth/forgot-password', ['email' => 'test@example.com']);

        $response->assertStatus(200);
    }

    public function testResetPassword()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
        ]);

        $resetCode = str_pad(random_int(1, 9999), 4, "0", STR_PAD_LEFT);

        PasswordReset::create([
            'email' => $user->email,
            'token' => bcrypt($resetCode),
        ]);

        $resetData = [
            'email' => 'test@example.com',
            'otp' => $resetCode,
            'new_password' => 'newpassword',
            'confirm_password' => 'newpassword',
        ];

        $response = $this->postJson('/api/auth/reset-password', $resetData);

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'accessToken',
                     'token_type',
                     'msg',
                 ]);
    }

    public function testChangePassword()
    {
        $user = User::factory()->create([
            'password' => bcrypt('oldpassword'),
        ]);

        $userData = [
            'current_password' => 'oldpassword',
            'new_password' => 'newpassword',
            'confirm_password' => 'newpassword',
        ];

        $response = $this->actingAs($user)->postJson('/api/auth/change-password', $userData);

        $response->assertStatus(200)
                 ->assertJson([
                     'message' => 'Password Changed Successfully',
                 ]);
    }
}
