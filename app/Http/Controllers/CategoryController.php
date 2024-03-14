<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Traits\GeneralTrait;


use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use GeneralTrait;
    public function getAllCategories()
    {
        $categories = Category::all();
        return $this->returnData('categories',$categories,'Success');
    }

}
