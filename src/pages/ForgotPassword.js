import React from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from '../components/BrandIcon'
import '../styles/components/ForgotPassword.scss'


const ForgotPassword = () => {


    return (
        <div className="fPassword">
            <header className="fPassword__header">
                <div className="fPassword__header__icon">
                    <span>
                        <BrandIcon iconType = {faAngleLeft}/>
                    </span>
                </div>
                <div className="fPassword__header__text">
                    <span><strong>Te olvidaste la contrasenia?</strong></span>
                </div>
            </header>
            <form className="fPassword__form">
                <label>
                    <span>Ingresa la dirección de correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer tu contraseña. </span>
                <input placeholder="Correo electronico"></input>
                </label>
                <div>
                <button>Enviar enlace para restablecer contrasenia</button>
                </div>
            </form>
        
        </div>
    );
}
export default ForgotPassword;
