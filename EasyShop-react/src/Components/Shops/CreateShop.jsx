import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CreateShop() {
    const categories = {
        0: "Pharmacy",
        1: "Supermarket",
        2: "Bakery",
        3: "Gorocery",
    };
    const [address, setaddress] = useState("");
    const [position, setPosition] = useState({
        latitude: null,
        longitude: null,
    });


      useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            setPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          });
        } else {
          console.log("Geolocation is not available in your browser.");
        }
      }, []);

    const getAddress = async () => {
        let resp = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=AIzaSyCI_RuGZN52I_Iteqgn0CmvzeUCVAchVNo`
        );
        setaddress(
            resp.data.results[0].formatted_address
        )
        
    };

    const [selectedCategory, setSelectedCategory] = useState(""); 
    
    const handleChange = (e) => {
        setSelectedCategory(e.target.value); 
    };
    const [selectedName, setSelectedName] = useState(""); 
    
    const handleNameChange = (e) => {
        setSelectedName(e.target.value); 
    };
    const saveStore = async () => {
        let data = {
            'name':selectedName,
            'category':selectedCategory,
            'location':address
        }
         await axios.post("http://localhost:8000/api/store/create" , data);

    };
    return (
        <>
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Shop Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder=""
                            onChange={handleNameChange}
                        />
                    </div>
                    {/* TODO: iframe bya5od el location pin on map w y return el coordinates */}
                    <div class="form-group">
                        <label for="exampleInputPassword1">Location</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder=""
                        />
                    </div>

                    {/* TODO: Send all possible shop categories*/}
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleChange}
                    >
                        <option selected>Select Category</option>
                        {Object.keys(categories).map((c) => {
                                    return <option value={categories[c]}>{categories[c]}</option>;
                                })}
                    </select>
                    <button type="button"
                    onClick={getAddress}>
                        get your location
                    </button>
                    <button
                        type="button"
                        onClick={saveStore}
                        class="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
