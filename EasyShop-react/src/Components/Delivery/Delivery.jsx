import React, { useState } from 'react';
import MapContainer from './MapContainer';
import LocationUpdaterComponent from '../Pusher/LocationUpdater';

const Delivery = () => {
    const [deliveryData, setDeliveryData] = useState(null);
    const [location, setLocation] = useState(null);

    // Function to handle delivery data fetching
    const fetchDeliveryData = async () => {
        try {
            const token = 'NHcL5ZHooqFEc1IrdqCdx1yLvdoRMmDcKu6RTEt80c648843'; // Your bearer token
            const response = await fetch('http://localhost:8000/api/orders/1', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setDeliveryData(data);
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
        setLocation(newLocation);
    };

    if (!deliveryData || !location) return <div>Loading...</div>;

    // Convert latitude and longitude to numbers
    const latitude = parseFloat(location.latitude);
    const longitude = parseFloat(location.longitude);

    // Check if conversion was successful
    if (isNaN(latitude) || isNaN(longitude)) {
        return <div>Error: Latitude and longitude must be valid numbers</div>;
    }

    const coordinates = {
        lat: latitude,
        lng: longitude
    };

    return (
        <div id="map" style={{ width: "100%", height: "400px" }}>
            <MapContainer coordinates={coordinates} />
            <LocationUpdaterComponent onUpdateLocation={handleLocationUpdate} />
        </div>
    );
};

export default Delivery;
