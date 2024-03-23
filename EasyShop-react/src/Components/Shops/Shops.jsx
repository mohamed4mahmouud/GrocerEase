import React, { useEffect, useState } from "react";
import FilterShops from "../FilterShops/FilterShops";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Style from "../Products/Products.module.css";
import { useParams } from "react-router-dom";
import Location from "./Location";
import LocationModal from "./LocationModal/LocationModal";

function getShops(category) {
    return axios.get(`http://127.0.0.1:8000/api/shops/${category}`);
}

export function getRatingFilteredShops(category) {
    return axios.get(`http://127.0.0.1:8000/api/filteredShops/${category}`);
}
async function checkPlaces(places, category) {
    try {
        let data = {
            "places": places
        };
        const response = await axios.post(`http://127.0.0.1:8000/api/checkPlaces/${category}`, data);
        // const nearbyShops = response.data.shops;
    } catch (error) {
        console.error('Error fetching nearby shops:', error);
        throw error; 
    }
}
export default function Shops() {
    const { category } = useParams();
    const { isLoading, data } = useQuery("getShops", () => getShops(category));
    const { data: filteredByRate } = useQuery("getFilteredShops", () =>
        getRatingFilteredShops(category)
    );
    let {  data:NearByPlaces } = useQuery("checkPlaces", () => checkPlaces(places,category));
    const [ratingFilter, setRatingFilter] = useState(null);
    const [places, setPlaces] = useState(null);
    const [originalPlaces, setOriginalPlaces] = useState(null);
    const [filteredNearBy, setFilteredNearBy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handlePlacesReceived = (placesData) => {
        setPlaces(placesData);
        setOriginalPlaces(placesData);
    };

    const onRatingChange = (rating) => {
        if (rating === 1) {
            setRatingFilter(1);
            if (places) {
                const sortedPlaces = places.sort((a, b) => b.rating - a.rating);
                const filteredNearbyPlaces = sortedPlaces.filter(
                    (place) => place.rating >= 2.5
                );
                setFilteredNearBy(filteredNearbyPlaces);
                setRatingFilter(1);
            }
        } else {
            setFilteredShops(null);
            setFilteredNearBy(null);
            setRatingFilter(null);
            setPlaces(originalPlaces);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 p-3 mt-5">
                        <FilterShops onRatingChange={onRatingChange} />
                    </div>

                    {isLoading ? (
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="col-lg-6 col-md-4 col-sm-6">
                                <div className="container py-2 mt-3">
                                    <button onClick={openModal} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill pb-2" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                        </svg>
                                        <p className="h4 d-inline-block mb-5">Choose your Location &gt;</p>
                                    </button>
                                    <LocationModal isOpen={isModalOpen} onClose={closeModal}>
                                        <Location
                                            category={category}
                                            OnPlacedRecived={handlePlacesReceived}
                                        />
                                    </LocationModal>
                                    <div className="col-md-12">
                                    {renderShopItems()}
                                    </div>  
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );

    function renderShopItems() {
        const shopData = places ? (ratingFilter == 1 ? filteredNearBy : places) : (ratingFilter == 1 ? filteredByRate?.data.shops : data?.data.shops);
        return shopData.map((shop) => (
            <div key={shop.id} className="col-md-12 mb-3">
                <Link className={`cursor-pointer card shadow ${Style.card} text-decoration-none rounded-5`} to={`${shop.id}/products`}>
                    <div className="card-body col-md-12 d-flex p-0 " style={{ height: "150px" }}>
                        <div className="col-md-4">
                            {/* fetch img here */}
                            <img src="../../images/ezaby.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} className={`${Style.borderLeft}`}/>
                        </div>
                        <div className="col-md-6 ms-4 mt-4">
                            <span className={`text-main font-sm fw-bolder card-text h4`}>
                                {shop.name}
                            </span>
                        </div>
                        <div className="col-md-2 text-center mt-4">
                            <p className="fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8A00" className="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>{shop.rating}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        ));
    }
}