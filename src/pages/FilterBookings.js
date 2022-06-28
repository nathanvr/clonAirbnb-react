import { useSelector} from 'react-redux';
import {
    GoogleMap,
    useLoadScript,
    InfoWindow
    
} from '@react-google-maps/api'
import { useState } from 'react';
import { Link} from "react-router-dom";
import FormSearchDates from '../components/FormSearchDates';
import CardMd from '../components/CardMd';
import { Icon } from '@iconify/react';



const containerStyle = {
    width: '95%',
    height: '100%'
    };


const FilterBooking = () =>{
    const { bookingfiltered, loading, error } = useSelector(
        (state) => state.FilterReducer
    );
    
    const center1={
        lat: 4.570868,
        lng: -74.297333
    }

    const divStyle = {
        background: `white`,
        padding: 5
    }
    const [ libraries ] = useState(['places']);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs",
        libraries,
    })

    if(!isLoaded) return;
return(
    <div className='container-filter'>
        <FormSearchDates/>
    <div className='filter-container'>
        
        <div className='container-right'>
        {bookingfiltered.map((item, i)=>(
            <Link to={`/room/${item._id}`} key={i}>
            <CardMd service={item} key={`id${i}`}/></Link>))}
        {bookingfiltered.length === 0 && <div className="filter-not-found" >
                <div className='icon'>
                <Icon icon="fluent:text-bullet-list-square-search-20-regular" className="icon" />
                </div>
                <div className='text'> 
                    <p>No se encontró tu búsqueda. Realiza una nueva búsqueda</p>
                </div>
                </div>}
        </div>
        <div className='container-left'>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={bookingfiltered.length===0 ? center1 : ({lat:Number(bookingfiltered[0].lat), lng:Number(bookingfiltered[0].lng)})}
            zoom={12}>
                {bookingfiltered.map((item, i)=>(
                    <div key={`${i}divs`}>
                    <InfoWindow key={i} position={{lat:Number(item.lat), lng:Number(item.lng)}} >
    <div style={divStyle} key={`${i}div`}>
        <p  key={`${i}p`}>{item.price.toString()}</p>
    </div>
    </InfoWindow></div>
        ))}


        </GoogleMap>
        </div>
    </div>
    </div>
)
}
export default FilterBooking
