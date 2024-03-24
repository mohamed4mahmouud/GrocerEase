<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product::class;

    public function definition(): array
    {
        $category = Category::whereBetween('id', [19, 24])->inRandomOrder()->first();
        $user = User::all()->random();
        $shop = Shop::where('category', 'butchery')->inRandomOrder()->first();

        return [
            'title' => fake()->sentence(3),
            'user_id' => $user->id,
            'shop_id' => $shop->id,
            'category_id' => $category->id,
            'image' => fake()->imageUrl(),
            'article' => fake()->paragraph(),
            'discount' => fake()->numberBetween(0, 90),
            'description' => fake()->sentence(),
            'price' => fake()->randomFloat(2, 10, 100),
            'quantity' => fake()->numberBetween(1, 100),
        ];
    }
}
