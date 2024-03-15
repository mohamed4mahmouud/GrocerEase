
import React, { useState } from "react";

export default function FilterShops({onRatingChange}) {
    const [rating, setRating] = useState('');

    const handleRatingChange = (event) => {
        const newRating =  parseInt(event.target.value);
        setRating(newRating);     
        onRatingChange(newRating);

      };
      const resetAll = () =>{  
        setRating('');
        onRatingChange('');
        console.log(rating);
      }

    return (
        <>
            <div className="container m-4">
                <button className="btn btnsColor rounded-pill">
                    Filter
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-filter ms-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                <button className="btn text-danger ms-2" onClick={resetAll}>Reset all</button>
                <p className="fs-5 fw-semibold mt-3">sort by</p>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="1"
                        checked={rating === "1"}
                        onChange={handleRatingChange}
                        
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                       Rating
                    </label>
                </div>
                <div className="form-check pt-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Delivery Time
                    </label>
                </div>
                <div className="form-check pt-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                       Distance
                    </label>
                </div>
                <div className="form-check pt-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                       Minimum orderd amount
                    </label>
                </div>
                <div className="form-check pt-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                       Most Frequently orderd
                    </label>
                </div>
            </div>
        </>
    );
}
