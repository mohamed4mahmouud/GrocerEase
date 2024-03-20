<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable=[
        'shipping_address',
        'shipping_date',
        'price',
        'status',
        'user_id',
        'shop_id'
    ];
    public function shop(): BelongsTo{
        return $this->belongsTo(Shop::class);
    }
    public function user() : BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function cart(): BelongsTo{
        return $this->belongsTo(Cart::class);
    }
    public function delivery(): BelongsTo{
        return $this->belongsTo(Delivery::class);
    }
}
