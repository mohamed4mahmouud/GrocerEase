<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryValidate;
use App\Models\Category;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use GeneralTrait;
    public function getAllCategories()
    {
        try {
            $categories = Category::all();
            return $this->returnData('categories',$categories,'Success');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get categories');
        }

    }

    public function addCategory(CategoryValidate $request)
    {

        try {

            if($request->validated()){
                $newCategory = Category::create([
                    'name'=> $request->name,
                    'image'=> $request->image,
                    "user_id" => $request->user()->id,
                ]);

                return $this->returnData('categories',$newCategory,'Success');

            }else {
                $errors = $request->errors();
                return $this->returnError(400, $errors);
            }

        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get categories');
        }
    }

    public function getCategory(string $id)
    {
        try {
            $category = Category::find($id);
            if($category){
                return $this->returnData('category',$category,'Success');
            }else{
                return $this->returnError(404, 'Category not found');
            }
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get categories');
        }
    }

    public function updateCategory(CategoryValidate $request , string $id)
    {

        try {
              //check if request valid
        if(!$request->validated()){
            $errors = $request->errors();
            return $this->returnError(400, $errors);
        }
        //find category
        $category = Category::find($id);

        $userId = $request->user()->id;

        //Check if the current user attempting to update a category is the owner of the category.
        if($userId !== $category->user_id){
             // If the user is not the owner, return an error response with status code 401 (Unauthorized)
            return $this->returnError(401, 'Unauthorized: Only the owner can perform this action.');
        }

        //if no category return error
        if(!$category){
            return $this->returnError(404, 'Category not found');
        }

        //update category
        $category->update($request->validated());
        return $this->returnData('category',$category,'Updated');

        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get categories');
        }
    }

    public function deleteCategory(Request $request,String $id)
    {
        try {
            $category = Category::find($id);

            if(!$category){
                return $this->returnError(404, 'Category not found');
            }

            $userId = $request->user()->id;

            //Check if the current user attempting to delete a category is the owner of the category.
            if($userId !== $category->user_id){
                   // If the user is not the owner, return an error response with status code 401 (Unauthorized)
                return $this->returnError(401, 'Unauthorized: Only the owner can perform this action.');
            }

            $category->delete();
            return $this->returnData('category','','Deleted');

        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get categories');
        }
    }

}
