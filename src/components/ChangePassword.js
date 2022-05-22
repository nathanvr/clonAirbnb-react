
import { useState } from "react"
import "../styles/components/ChangePassword.scss"
const ChangePassword = () =>{
    const [view, setView] = useState(false)
    return(
        <div className="changePassword">
            {!view? (<button type="e-link" className="changePassword__button" onClick={()=> {setView(true)}}>
                Modificar
            </button>):(null)}
            

            { view ? (
                <div className="changePassword__content" display>
                    <button onClick={()=> {setView(false)}}>
                    Cerrar
                    </button>
                <form className="changePassword__content__form">
                    <p><strong>Contrasenia</strong></p>
                    <label>Contrasenia
                    <input  type='password' ></input>
                    </label>
                    <label>Nueva contrasenia
                    <input  type='password' ></input>
                    </label>
                    <label>Confirma la contrasenia
                    <input  type='password' ></input>
                    </label>
                    <button onClick="#">Cambiar Contasenia</button>
                </form>
            </div>
            ): (null) }



        </div>
    )
}

export default ChangePassword;
