import React, { useState } from 'react';
import FilterShops from '../FilterShops/FilterShops';
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from 'react-router-dom';
import Style from "../Products/Products.module.css";
import { useParams } from "react-router-dom";
  

    export function getShops(category){
        return axios.get(`http://127.0.0.1:8000/api/shops/${category}`)
    }

    export default function Shops() {
        const { category } = useParams();
        let {isLoading , data} = useQuery("getShops",() =>  getShops(category));
        const [ratingFilter, setRatingFilter] = useState(null);
        const [filteredShops , SetFilteredShops] = useState(null);
         
        const onRatingChange =  (rating) => {      
            
            if (rating === 1) {
              const sortedShops = data?.data.shops.sort((a, b) => b.rating - a.rating);
              SetFilteredShops(sortedShops);
              setRatingFilter(1);
            }
            else{
            setRatingFilter(null);
            SetFilteredShops(null)
            }
           
        };
        
    return <>
        <div className="container-fluid">
            <div className="row">
            {/* Fixed Left Sidebar */}
                <div className="col-lg-3 col-md-4 col-sm-12 bg-light p-3 position-fixed vh-100">
                    <FilterShops onRatingChange={onRatingChange} />
                </div>
            
                <div className="col-lg-9 col-md-8 col-sm-12 offset-lg-3 offset-md-4 p-3">
                
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="container py-2">
                        <div className="row row-cols-5 g-6">
                            { (ratingFilter == 1 ? filteredShops : data?.data.shops).map((shop) => (
                                <div key={shop.id} className="col-md-2">
                                    <Link
                                        className={`cursor-pointer py-3 px-2 card  ${Style.card} h-100 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-0-hover`}
                                        to="#"
                                    >
                                        {/* <img
                                            src={shop.thumbnail}
                                            alt=".."
                                            className="w-60 card-img-top"
                                        /> */}
                                        <div className="card-body">
                                            <span
                                                className={`text-main font-sm fw-bolder card-text`}
                                            >
                                                {shop.name}
                                            </span>
                                            <p>{shop.rating}</p>
                                        
                                            {/* <i
                                                className={`fa-solid fa-star ${Style.ratingstar}`}
                                            ></i>
                                            <i
                                                className={`fa-solid fa-star ${Style.ratingstar}`}
                                            ></i>
                                            <i
                                                className={`fa-solid fa-star ${Style.ratingstar}`}
                                            ></i>
                                            <i
                                                className={`fa-solid fa-star ${Style.ratingstar}`}
                                            ></i>
                                            <i
                                                className={`fa-solid fa-star ${Style.ratingstar}`}
                                            ></i> */}
                                        
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
        </>
    }
