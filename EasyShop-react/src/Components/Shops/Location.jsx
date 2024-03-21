import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Location = () => {
    const [address, setAddress] = useState(null);
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
    });
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo&libraries=places`;
        googleMapScript.async = true;
        googleMapScript.onload = initMap;
        window.document.body.appendChild(googleMapScript);
    }, []);

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 31.19450345171376, lng: 29.918111030420878 },
            zoom: 13,
            mapTypeControl: false,
        });
        const card = document.getElementById("pac-card");
        const input = document.getElementById("pac-input");
        const options = {
            fields: ["formatted_address", "geometry", "name"],
            strictBounds: false,
        };

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

        const autocomplete = new google.maps.places.Autocomplete(input, options);

        autocomplete.bindTo("bounds", map);

        const infowindow = new google.maps.InfoWindow();
        const infowindowContent = document.getElementById("infowindow-content");

        infowindow.setContent(infowindowContent);

        const marker = new google.maps.Marker({
            map,
            anchorPoint: new google.maps.Point(0, -29),
        });

        map.addListener("click", (event) => {
            const clickedLat = event.latLng.lat();
            const clickedLng = event.latLng.lng();

            marker.setPosition(event.latLng);
            setMarker(marker);

            const geocoder = new google.maps.Geocoder();
            const latLng = new google.maps.LatLng(clickedLat, clickedLng);

            geocoder.geocode({ 'location': latLng }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        input.value = results[0].formatted_address;
                    } else {
                        console.error('No results found');
                    }
                } else {
                    console.error('Geocoder failed due to: ' + status);
                }

            });
            setPosition({
                latitude: clickedLat,
                longitude: clickedLng
            })
            getAddress();
        });

        autocomplete.addListener("place_changed", () => {
            infowindow.close();
            marker.setVisible(false);

            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {

                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
            setAddress(place.formatted_address);
        });

    }
    const getAddress = async () => {
        let resp = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo`
        );
        setAddress(resp.data.results[0].formatted_address);
        console.log(resp.data.results[0].formatted_address);
    };


    window.initMap = initMap;

    return (
        <div> <div className="form-group">
            <label htmlFor="pac-input">Location</label>
            <input
                type="text"
                className="form-control"
                id="pac-input"
                placeholder="Enter a location"
            />
        </div>
            <div id="map" style={{ width: "100%", height: "400px" }} className="mt-2"></div>
        </div>
    )
}


export default Location