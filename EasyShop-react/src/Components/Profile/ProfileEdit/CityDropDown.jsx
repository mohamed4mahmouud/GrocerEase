import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import style from '../Profile.module.css';

const CityDropDown = () => {
  const egyptCities = [
    'Al Sharqia',
    'Alexandria',
    'Aswan',
    'Asyut',
    'Beheira',
    'Beni Suef',
    'Cairo',
    'Dakahlia',
    'Damietta',
    'Faiyum',
    'Gharbia',
    'Giza',
    'Ismailia',
    'Kafr el-Sheikh',
    'Luxor',
    'Matrouh',
    'Minya',
    'Monufia',
    'New Valley',
    'North Sinai',
    'Port Said',
    'Qalyubia',
    'Qena',
    'Red Sea',
    'Sohag',
    'South Sinai',
    'Suez'
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="city" className={`${style.dropCity} form-control mb-4`}>
          {selectedCity || 'Select City'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {egyptCities.map((city, index) => (
            <Dropdown.Item key={index} onClick={() => handleCitySelect(city)}>
              {city}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CityDropDown;
