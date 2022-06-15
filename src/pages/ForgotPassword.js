import React, {useState} from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from '../components/BrandIcon'
import '../styles/components/ForgotPassword.scss'
import { Link } from "react-router-dom";
import { TextInput } from '@mantine/core';


const ForgotPassword = () => {

const[email, setEmail]=useState("")

    return (
        <div className="fPassword">
            <header className="fPassword__header">
                <div className="fPassword__header__icon">
                    <Link to='/'>
                    <span>
                        <BrandIcon iconType = {faAngleLeft}/>
                    </span>
                    </Link>

                </div>
                <div className="fPassword__header__text">
                    <h2>¿Olvidaste la contraseña?</h2>
                </div>
            </header>
            <form className="fPassword__form">

                    <TextInput label="Ingresa la dirección de correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer tu contraseña. " 
                    placeholder="Ingresa tu correo electrónico" value={email} onChange={((e)=>setEmail(e.target.value))} required />


                <div>
                <button>Enviar enlace para restablecer contraseña</button>
                </div>
            </form>
        
        </div>
    );
}
export default ForgotPassword;
