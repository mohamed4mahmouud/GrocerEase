import React from "react";
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
export default MapContainer;