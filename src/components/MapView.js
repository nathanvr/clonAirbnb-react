import { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from "./VenueMarkers";
import { VenueLocationIcon } from "./VenueLocationIcon";

const MapView =(props)=>{
    const [state, setState] = useState({
        currentLocation: { lat: 52.52437, lng: 13.41053 },
        zoom: 13,
    });
    return(

        <MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={false} >
            <TileLayer
                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={state.currentLocation} icon={VenueLocationIcon}>
                <Popup>
                    Esta es tu ubicación
                </Popup>
            </Marker>
            </MapContainer>)
}

export default MapView
