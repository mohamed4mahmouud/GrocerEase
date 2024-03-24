<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Coupon;
use Illuminate\Support\Carbon;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CouponTest extends TestCase
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
    public function testGetAllCoupons()
    {
        $response = $this->actingAs(User::factory()->create())->get('/api/coupons');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'body',
                        'Expiry_date',
                        'discount',
                        'created_at',
                        'updated_at'
                    ]
                ],
                'message'
            ]);
    }

    public function testCreateCoupon()
    {
        $user = User::factory()->create();

        $couponData = [
            'body' => 'TESTCOUPON',
            'Expiry_date' => now()->addDays(30)->format('Y-m-d'),
            'discount' => 10,
        ];

        $response = $this->actingAs($user)->postJson('/api/coupons', $couponData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'body',
                    'Expiry_date',
                    'discount',
                    'created_at',
                    'updated_at'
                ],
                'message'
            ]);
    }
    public function testGetCoupon()
    {
        $coupon = Coupon::factory()->create();

        $response = $this->actingAs(User::factory()->create())->get('/api/coupons/' . $coupon->id);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'id' => $coupon->id,
                    'body' => $coupon->body,
                    'Expiry_date' => $coupon->Expiry_date,
                    'discount' => $coupon->discount,
                ],
                'message' => 'success'
            ]);
    }

    public function testUpdateCoupon()
    {
        $coupon = Coupon::factory()->create();
        $newData = [
            'body' => 'UPDATEDCOUPON',
            'Expiry_date' => Carbon::now()->addDays(10)->format('Y-m-d'),
            'discount' => 15,
        ];

        $response = $this->actingAs(User::factory()->create())->putJson('/api/coupons/' . $coupon->id, $newData);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'id' => $coupon->id,
                    'body' => 'UPDATEDCOUPON',
                    'Expiry_date' => Carbon::now()->addDays(10)->format('Y-m-d'),
                    'discount' => 15,
                ],
                'message' => 'Updated'
            ]);
    }

    public function testDeleteCoupon()
    {
        $coupon = Coupon::factory()->create();

        $response = $this->actingAs(User::factory()->create())->delete('/api/coupons/' . $coupon->id);

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Coupon Deleted'
            ]);

        $this->assertDatabaseMissing('coupons', ['id' => $coupon->id]);
    }

    public function testCheckCouponIsValid()
    {
        $coupon = Coupon::factory()->create(['Expiry_date' => Carbon::now()->addDays(10)]);

        $requestData = [
            'coupon' => $coupon->body,
            'total_price' => 100, 
            'user' => User::factory()->create(),
        ];

        $response = $this->postJson('/api/coupons', $requestData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'discountedPrice',
                'message'
            ]);
    }
}
