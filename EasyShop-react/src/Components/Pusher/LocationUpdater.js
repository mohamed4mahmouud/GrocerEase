import React, { useEffect, useState } from 'react';
import pusher from './Pusher';

const LocationUpdaterComponent = ({ onUpdateLocation }) => {
    useEffect(() => {
        const channel = pusher.subscribe('deliveries');

        channel.bind('delivery.location.updated', (data) => {
            onUpdateLocation(data); // Pass location data to parent component
        });

        return () => {
            pusher.unsubscribe('deliveries');
        };
    }, []);

    return null; // This component doesn't render anything related to Pusher
};

export default LocationUpdaterComponent;
