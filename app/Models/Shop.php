<?php

namespace App\Models;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'category',
        'rating',
        'latitude',
        'longtitude'
    ];
    
    public function orders(){
        return $this->hasMany(Order::class);
    }

}
