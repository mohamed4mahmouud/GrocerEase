import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';
const apiKey = "AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo";
function getNearbyShops(category, latitude, longitude) {
    return axios.post(`https://places.googleapis.com/v1/places:searchNearby`, {
        "includedTypes": ["restaurant"],
        "maxResultCount": 5,
        "locationRestriction": {
            "circle": {
                "center": {
                    "latitude": latitude,
                    "longitude": longitude
                },
                "radius": 500.0
            }
        }
    }, {
        headers: {
            "Content-Type": "application/json",
            "X-Goog-FieldMask": "places.displayName",
            "X-Goog-Api-Key": `${apiKey}`,
        }
    })
}

const Location = ({category , OnPlacedRecived}) => {

    const [address, setAddress] = useState(null);
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
    });
    const [marker, setMarker] = useState(null);

    const getAddress = async (lat, lng) => {
        let resp = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo`
        );
        setAddress(resp.data.results[0].formatted_address);
    };

    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo&libraries=places`;
        googleMapScript.async = true;
        googleMapScript.onload = initMap;
        window.document.body.appendChild(googleMapScript);
    }, []);
    // const category = "restaurant";
    // console.log(position.latitude, position.longitude);
    // const { isLoading, data } = useQuery("getNearbyShops", () => getNearbyShops(category, position.latitude, position.longitude));
    // console.log(data?.data)



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

            setPosition({
                latitude: clickedLat,
                longitude: clickedLng
            })

            getAddress(clickedLat, clickedLng);

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
        //    TODO: category =>pharmacy / pet_store / store/supermarket/bakery/department_store
            var request = {
                location: latLng,
                radius: 500,
                type: [category],
                maxResults: 5
            }
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback)
            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var places = [];
                    for (var i = 0; i < 5; i++) {
                        var place = {
                            name: results[i].name,
                            address: results[i].vicinity, // 'vicinity' provides the address
                            location: results[i].geometry.location,
                            rating: results[i].rating
                        };
                        places.push(place);
                    }
                }
                if (typeof OnPlacedRecived === 'function') {
                    OnPlacedRecived(places);
                } else {
                    console.error('OnPlacedRecived is not a function');
                }
            }
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
            setPosition({
                latitude:place.geometry.location.lat(),
                longitude:place.geometry.location.lng()
              })
        });
    }
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