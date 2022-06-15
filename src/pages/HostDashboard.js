import React, { useEffect, useState } from "react";
import Tabs from "../components/host/Tabs";

import FormHost from "../components/host/FormHost";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/reducers/User.reducer";
import Bookingsitecard from "../components/host/Bookingsitecard";
import { Icon } from '@iconify/react';


const HostDashboard =()=>{

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUser())
    },[dispatch])

    const {bookingSites} = useSelector((state) => state.userReducer);
    console.log(bookingSites)


    return(
        <div className="dashboard-container">
            <section className="hero">
                <div>
                    <h2>Hoy</h2>
                    <p>Empieza a agregar anuncios</p>
                </div>
                <div><button><FormHost sitio="Haz un anuncio"/></button></div>
            </section>
            <div className="container-bookings">
                <h2>Tus reservaciones</h2>
                    <Tabs></Tabs>
            </div>
            <div className="container-bookings">
                <h2>Tus sitios</h2>
                    <div className="content-tabs1">
 
                            <div className="container-cards">
                            {bookingSites.length === 0 && <div className="content active-content" >
                <Icon icon="fluent:text-bullet-list-square-search-20-regular" className="icon" />
                    <p>No tienes sitios en este momento.</p>
                </div>}
                            {bookingSites.map((item, i)=>(
                            <Bookingsitecard booking={item} key={i}/>

                            ))}
                            
        </div>
                            
                            </div>
                        
                    </div>
            </div>

    )
}

export default HostDashboard;
