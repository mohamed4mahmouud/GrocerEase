<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Product;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use App\Http\Requests\ReviewRequest;

class ReviewController extends Controller
{
    use GeneralTrait;

    //@desc add review
    //@access users
    //@route post api/products/{product}/reviews
    public function addReview(ReviewRequest $request, Product $product)
    {
        try {
             // Check if the user has already created a review for this product
        $review = Review::where('user_id',$request->user()->id)->where('product_id', $product->id)->exists();

        if($review){
            return $this->returnError(400 , 'You have already created a review for this product.');
        }

        $newReview = Review::create([
            'comment' => $request->comment,
            'rating' => $request->rate,
            'user_id' => $request->user()->id,
            'product_id' => $product->id,
        ]);
        return $this->returnData('review',$newReview,'success');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while create Review');
        }
    }

    //@desc get all reviews
    //@access users
    //@route get api/products/{product}/reviews
    public function getAllReviews(Product $product)
    {
        try {
            $reviews = Review::where('product_id', $product->id)->get();

            if(!$reviews){
                return $this->returnError(404 , 'No reviews for this product');
            }

            return $this->returnData('reviews' , $reviews , 'success');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while get Reviews');
        }

    }

     //@desc update review
    //@access users
    //@route put api/products/{product}/reviews
    public function updateReview(ReviewRequest $request , Product $product , string $id)
    {
        try {
            $review = Review::find($id);

            if(!$review){
                return $this->returnError(404 , 'No review for this id');
            }

            // Check if the current user is the owner of the review
            if($review->user_id != $request->user()->id){
                return $this->returnError(401 , "You are not allowed to update this review");
            }

            // Update the review with new comment and rating
            $review->update([
                'comment'=> $request->comment,
                'rating' => $request->rate
            ]);
            return $this->returnData('review' , $review , 'Updated');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while update Review');
        }

    }

    //@desc delete review
    //@access users
    //@route delete api/products/{product}/reviews
    public function deleteReview(Request $request ,Product $product, string $id )
    {
        try {
            $review = Review::find($id);

        if(!$review){
            return $this->returnError(404 , 'No review for this id');
        }

        // Check if the current user is the owner of the review
        if($review->user_id != $request->user()->id){
            return $this->returnError(401 , "You are not allowed to delete this review");
        }

        $review->delete();
        return $this->returnSuccessMessage('Review Deleted');
        } catch (\Exception $e) {
            return $this->returnError(500, 'Error occurred while delete Review');
        }

    }
}
