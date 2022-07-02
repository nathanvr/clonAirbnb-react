import React, {useState} from "react";
import '../styles/components/ForgotPassword.scss'
import {PasswordInput, Alert, LoadingOverlay} from '@mantine/core';
import { useParams, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecoveryPassword = () => {
const {token} =useParams();
let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const navigate=useNavigate();
const[newPassword, setnewPassword]=useState("");
const [confirmPass, setConfirmPassword]=useState("");
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [errorMessage, setErrorMessage]=useState(undefined);

    const data = {
        newpassword: newPassword,
    };
    const validatePassword=()=>{
        if(newPassword===confirmPass){

            return true;
        }else{
            return false;
        }
    }
    const validationPassword =()=>{
        if(passwordregex.test(newPassword) === true){
            return 
        }
    }

    const handleSubmit=async(e)=> {
        e.preventDefault();
        if(validatePassword() && passwordregex.test(newPassword) === true){
            setErrorMessage(undefined)
            setLoading(true);
            setVisible(true);
        try {
        const response = await axios.post("http://localhost:8080/users/resetpassword",data, {
            headers: {
            Authorization: `Bearer ${token}`,
            },});
                if(response.status===201){
                toast.success('Contraseña reestablecida', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setLoading(false)
                    setVisible(false);
                    navigate("/");
                }
        }
        catch(error){
            setLoading(false)
        }
        setLoading(false)
    }
    if(passwordregex.test(newPassword) === false){
        setErrorMessage("La contraseña no cumple con los criterios de seguridad")
    }
}
    return (
        <div>
        <div className="fPassword">        
            <header className="fPassword__header">
                <div className="fPassword__header__text">
                    <h2>Cambiar contraseña</h2>
                </div>
            </header>
            <form className="fPassword__form" onSubmit={handleSubmit}>
            {loading ===true && 
        <div className='loading' style={{ width: 400}}>
        <LoadingOverlay loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }} visible={visible} />
        {/* ...other content */}
    </div>}
                <div className="inputs">
                    <PasswordInput
                        placeholder="Nueva Contraseña"
                        label="Nueva Contraseña"
                        description="La contraseña debe tener mínimo 8 caracteres, una miniscula, una mayuscula, un numero o un caracter especial"
                        required
                        name='newpassword'
                        onChange={((e)=>(setnewPassword(e.target.value),
                            setErrorMessage(undefined)))}
                        value={newPassword}
                        error={!validatePassword()}
                    />
                </div>
                <div className="inputs">
                    <PasswordInput
                    placeholder="Confirma tu contraseña"
                    label=" Confirma tu contraseña Contraseña"
                    required
                    name='CONFIRMpassword'
                    onChange={((e)=>(setConfirmPassword(e.target.value),
                        setErrorMessage(undefined)))}
                    value={confirmPass}
                    error={!validatePassword()}
                    />
                </div>
                {validatePassword() === false && <Alert color="red">Las contraseñas no coinciden</Alert>}
                {errorMessage !== undefined && <Alert color="red">{errorMessage}</Alert>}
                <div>
                <button className="send">Cambiar contraseña</button>
                </div>
            </form>
        </div>
        </div>
        

    );
}
export default RecoveryPassword;

