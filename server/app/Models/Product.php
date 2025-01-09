<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'Name',
        'Category',
        'Discription',
        'Model',
        'Price',
        'Discount',
        'Quantity',
        'image',
        'additionalImage-0',
        'additionalImage-1',
        'additionalImage-2'
    ];
    //
}