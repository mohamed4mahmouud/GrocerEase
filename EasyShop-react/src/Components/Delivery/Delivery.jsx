import React, { useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import LocationUpdaterComponent from "../Pusher/LocationUpdater";
import { useParams } from "react-router-dom";

const Delivery = (props) => {
    const [delivery, setDelivery] = useState(null);
    const [location, setLocation] = useState(null);

    // Function to handle location updates
    const handleLocationUpdate = (newLocation) => {
        setDelivery(newLocation);
    };

    useEffect(() => {
        setDelivery(props.order.delivery);
    }, []);

    if (!delivery && !location) return <div>Loading...</div>;
    // Convert latitude and longitude to numbers
    const latitude = parseFloat(props.order.delivery.latitude);
    const longitude = parseFloat(props.order.delivery.longitude);

    // Check if conversion was successful
    if (isNaN(latitude) || isNaN(longitude)) {
        return <div>Error: Latitude and longitude must be valid numbers</div>;
    }

    const coordinates = {
        lat: latitude,
        lng: longitude,
    };
    //console.log(coordinates);
    return (
        <div id="map" style={{ width: "100%", height: "400px" }}>
            <MapContainer coordinates={coordinates} />
            <LocationUpdaterComponent onUpdateLocation={handleLocationUpdate} />
        </div>
    );
};

export default Delivery;
