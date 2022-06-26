import React, {useState} from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from '../components/BrandIcon'
import '../styles/components/ForgotPassword.scss'
import { Link } from "react-router-dom";
import { TextInput, Alert, LoadingOverlay } from '@mantine/core';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

const navigate=useNavigate();
const[email, setEmail]=useState("")
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [error, setError] = useState(null);
const data = {
    email: email,
  };
const handleSubmit=async(e)=> {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    try {
    const response = await axios.post("http://localhost:8080/users/recoverypassword",data);
    if(response.status===201){
        toast.success('Se ha envíado el correo de recuperación', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            console.log(response)
            setLoading(false)
            setVisible(false);
            navigate("/");
        }
    }catch(error){
        setError(error);
        setLoading(false);
        setVisible(false);
    }
}


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
            <form className="fPassword__form" onSubmit={handleSubmit}>
            {loading ===true && 
                <div className='loading' style={{ width: 400}}>
                <LoadingOverlay loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }} visible={visible} />
                {/* ...other content */}
            </div>}
                    <TextInput label="Ingresa la dirección de correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer tu contraseña. " 
                    placeholder="Ingresa tu correo electrónico" value={email} onChange={((e)=>setEmail(e.target.value))} required />

                        {error!== null && <Alert title="Error!" color="red">No se encontró ninguna cuenta asociada a este correo</Alert>}
                <div>
                <button className="send">Enviar enlace para restablecer contraseña</button>
                </div>
            </form>
        
        </div>
    );
}
export default ForgotPassword;
