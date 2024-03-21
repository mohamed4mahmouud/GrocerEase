import React from 'react';
import { useQuery } from 'react-query';

const Delivery = () => {
    const { data, isLoading, error } = useQuery('deliveryData', async () => {
        const token = 'NHcL5ZHooqFEc1IrdqCdx1yLvdoRMmDcKu6RTEt80c648843'; // Your bearer token

        const response = await fetch('http://localhost:8000/api/orders/1', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Convert latitude and longitude to numbers
    const latitude = parseFloat(data.delivery.latitude);
    const longitude = parseFloat(data.delivery.longitude);

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
        </div>
    );
};

const MapContainer = ({ coordinates }) => {
    // Use useEffect to initialize the map once the coordinates are available
    React.useEffect(() => {
        async function initMap() {
            try {
                const google = window.google; // Ensure google is loaded in window scope

                const position = { lat: coordinates.lat, lng: coordinates.lng };
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 14,
                    center: position,
                });

                new google.maps.Marker({
                    position: position,
                    map: map,
                    title: "Delivery Location",
                });

            } catch (error) {
                console.error('Error initializing map:', error);
            }
        }

        initMap();
    }, [coordinates]); // Run this effect when coordinates change

    return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default Delivery;
