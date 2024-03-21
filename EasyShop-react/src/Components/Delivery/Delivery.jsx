import React, { useState } from 'react';
import MapContainer from './MapContainer';
import LocationUpdaterComponent from '../Pusher/LocationUpdater';

const Delivery = () => {
    const [delivery, setDelivery] = useState(null);
    const [location, setLocation] = useState(null);

    // Function to handle delivery data fetching
    const fetchDeliveryData = async () => {
        try {
            const token = '1JMzH3saJ2JSLm5U6dQ4R3AGJfyFSTSyp2W6C4BYc302b455'; // Your bearer token
            const response = await fetch('http://localhost:8000/api/orders/1', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setDelivery(data.delivery);
        } catch (error) {
            console.error('Error fetching delivery data:', error);
        }
    };

    // Effect to fetch delivery data once when component mounts
    React.useEffect(() => {
        fetchDeliveryData();
    }, []);

    // Function to handle location updates
    const handleLocationUpdate = (newLocation) => {
        setDelivery(newLocation);
    };

    if (!delivery && !location) return <div>Loading...</div>;
    // Convert latitude and longitude to numbers
    const latitude = parseFloat(delivery.latitude);
    const longitude = parseFloat(delivery.longitude);

    // Check if conversion was successful
    if (isNaN(latitude) || isNaN(longitude)) {
        return <div>Error: Latitude and longitude must be valid numbers</div>;
    }

    const coordinates = {
        lat: latitude,
        lng: longitude
    };
    console.log(coordinates)
    return (
        <div id="map" style={{ width: "100%", height: "400px" }}>
            <MapContainer coordinates={coordinates} />
            <LocationUpdaterComponent onUpdateLocation={handleLocationUpdate} />
        </div>
    );
};

export default Delivery;
