import React, { useEffect, useState } from "react";
import Tabs from "../components/host/Tabs";

import FormHost from "../components/host/FormHost";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/reducers/User.reducer";
import Bookingsitecard from "../components/host/Bookingsitecard";


const HostDashboard =()=>{

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUser())
    },[dispatch])

    const {bookingsites} = useSelector((state) => state.userReducer);
    console.log(bookingsites)

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
                            {bookingsites.map((item, i)=>(
                            <Bookingsitecard booking={item} key={i}/>
                            ))}
        </div>
                            
                            </div>
                        
                    </div>
            </div>

    )
}

export default HostDashboard;
