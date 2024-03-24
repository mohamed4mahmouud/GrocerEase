<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Coupon extends Model
{
    use HasFactory;
    protected $table = 'copouns';

    protected $fillable = [
        'body',
        'Expiry_date',
        'discount',
        'Status'
    ];

}
