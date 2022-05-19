import React from "react";
import image from "../images/super-host.jpg"
import LoginModalHost from "../components/host/LoginModalHost"

const Host = () =>{
    return (
    
        <div className="container-host">
            <div className="info-box">
                <h1>Abre tus puertas como anfitrión</h1>
                <LoginModalHost></LoginModalHost>
            </div>
            <div className="picture-box">
                <img src={image} alt="superhost" loading="lazy"></img>
            </div>
        </div>
    )
}

export default Host;
