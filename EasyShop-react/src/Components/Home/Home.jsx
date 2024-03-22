import React from "react";
import HomeSlider from "./HomeSlider/HomeSlider";
import Slide1 from "./HomeSlider/Slide1";
import Slide2 from "./HomeSlider/Slide2";
import Slide3 from "./HomeSlider/Slide3";
import Slide4 from "./HomeSlider/Slide4";
import Slide5 from "./HomeSlider/Slide5";
import Slide6 from "./HomeSlider/Slide6";
import { Link } from 'react-router-dom';
import style from "./Home.module.css";

export default function Home() {
    const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

    return (
        <>  
            <HomeSlider components={slides} intervalTime={3000} />
            <div className="container text-center ">
                <p className="h1 mt-5">Select a service</p>
                <div className="row d-flex  col-md-12 mt-5 mb-5">
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/supermarket'}>
                        <img src="../../images/superMarket.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Supermarkets</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/pharmacy'}>
                        <img src="../../images/pharmacy.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Pharmacy</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/Grocery'}>
                        <img src="../../images/fruits.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Green Groceries</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/Butchery'}>
                        <img src="../../images/butchery.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Butchery & Seafood</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/Bakery'}>
                        <img src="../../images/bakeries.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Bakeries & Cakes</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark" to={'/shops/pet_shop'}>
                        <img src="../../images/pets.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Pets</p>
                    </Link>
                    </div>
                </div>
            </div>
            <div className={`${style.homeFooter} text-center`}>
                <div className="col-md-12 d-flex row justify-content-around p-5">
                    <div className="col-md-12 mb-5 mt-2">
                        <p className="h1">Why Choose <span className={`${style.diffColor}`}>Talabatk Eh</span></p>
                    </div>
                    <div className="col-md-2 text-start">
                        <img src="../../images/tel.png" alt="tel" />
                        <p className="h3 mt-4">Discover new flavours & people</p>
                        <p className="h6">Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.</p>
                    </div>
                    <div className="col-md-2 text-start">
                        <img src="../../images/whole.png" alt="whole" />
                        <p className="h3 mt-4">Buy <br />wholesale</p>
                        <p className="h6">We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices.</p>
                    </div>
                    <div className="col-md-2 text-start">
                        <img src="../../images/group.png" alt="group" />
                        <p className="h3 mt-4">Support your community</p>
                        <p className="h6">By buying in bulk from local and Canadian producers you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community.</p>
                    </div>
                    <div className="col-md-2 text-start">
                        <img src="../../images/like.png" alt="like" />
                        <p className="h3 mt-4">Enjoy the best quality</p>
                        <p className="h6">We only offer great tasting, all natural foods that are better for you, and organic if possible.</p>
                    </div>
                    <div className="col-md-2 text-start">
                        <img src="../../images/heart.png" alt="heart" />
                        <p className="h3 mt-4">Enjoy Club Level Service</p>
                        <p className="h6">As a member of our club, we will make sure you are delighted with our service or we will make it right!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
