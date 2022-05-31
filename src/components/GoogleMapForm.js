import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from "react";

const containerStyle = {
    width: '400px',
    height: '400px'
    };

    const center = {
    lat:  3.4372200,
    lng: -76.5225000
    };

const GoogleMapForm =()=>{

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCotoRi7DOZuxP1A5eE5Tw7DXl0pM0SpFQ"
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
}
export default GoogleMapForm;
