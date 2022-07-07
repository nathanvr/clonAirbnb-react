import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PlacesAutocomplete from './PlacesAutocomplete';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
function Map() {


  return ( <LoadScript
  googleMapsApiKey="AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs"
>
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
  >
    <PlacesAutocomplete/>
   <Marker position={center}></Marker>
  </GoogleMap>
</LoadScript>
)
}


export default Map;
