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
            <div className="container text-center">
                <p className="h1 mt-5">Select a service</p>
                <div className="row d-flex  col-md-12 mt-5">
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/superMarket.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Supermarkets</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/pharmacy.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Pharmacy</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/fruits.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2 mb-5">Fruits & Vegetables</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/butchery.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Butchery & Seafood</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/bakeries.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Bakeries & Cakes</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <Link className="text-decoration-none text-dark">
                        <img src="../../images/pets.png" alt="superMarket" className={`${style.category} rounded-pill mb-3 w-50`}/>
                        <p className="h2">Pets</p>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
