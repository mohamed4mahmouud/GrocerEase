<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryValidate;
use App\Models\Category;
use App\Traits\GeneralTrait;

class CategoryController extends Controller
{
    use GeneralTrait;
    public function getAllCategories()
    {
        $categories = Category::all();
        return $this->returnData('categories',$categories,'Success');
    }

    public function addCategory(CategoryValidate $request)
    {
        if($request->validated()){
            $newCategory = Category::create($request->validated());
            return $this->returnData('categories',$newCategory,'Success');
        }else {
            $errors = $request->errors();
            return $this->returnError(400, $errors);
        }
    }

    public function getCategory(string $id)
    {
        $category = Category::find($id);
        if($category){
            return $this->returnData('category',$category,'Success');
        }else{
            return $this->returnError(404, 'Category not found');
        }
    }

    public function updateCategory(CategoryValidate $request , string $id)
    {
        //check if request valid
        if(!$request->validated()){
            $errors = $request->errors();
            return $this->returnError(400, $errors);
        }
        //find category
        $category = Category::find($id);

        //if no category return error
        if(!$category){
            return $this->returnError(404, 'Category not found');
        }

        //update category
        $category->update($request->validated());
        return $this->returnData('category',$category,'Updated');
    }

    public function deleteCategory(String $id)
    {
        $category = Category::find($id);

        if(!$category){
            return $this->returnError(404, 'Category not found');
        }

        $category->delete();
        return $this->returnData('category','','Deleted');
    }

}
