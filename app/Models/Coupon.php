<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Coupon extends Model
{
    use HasFactory;
    protected $table = 'copouns';

    protected $fillable = [
        'body',
        'expiry_date',
        'discount'
    ];

}
