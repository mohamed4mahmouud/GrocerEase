import React, { useEffect, useState } from 'react';
import pusher from './Pusher';

const LocationUpdaterComponent = ({ onUpdateLocation }) => {
    useEffect(() => {
        const channel = pusher.subscribe('delivery-channel');

        channel.bind('LocationUpdated', (data) => {
            onUpdateLocation(data); // Pass location data to parent component
        });

        return () => {
            pusher.unsubscribe('delivery-channel');
        };
    }, []);

    return null; // This component doesn't render anything related to Pusher
};

export default LocationUpdaterComponent;
