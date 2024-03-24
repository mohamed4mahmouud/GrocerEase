<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'description',
        'price',
        'quantity',
        'user_id',
        'image',
        'shop_id',
        'category_id',
        'discount',
        'article'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function cart()
    {
        return $this->belongsToMany(Cart::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function averageRating()
{
    return $this->reviews()->avg('rating');
}
}
