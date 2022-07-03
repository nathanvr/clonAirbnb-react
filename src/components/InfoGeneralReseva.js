import React from "react";
import {FaPencilRuler} from "react-icons/fa";
import {BsDoorOpen} from "react-icons/bs";
import {GrSchedule} from "react-icons/gr"

const InfoGeneralReseva = (props) =>{
    const {diseñadores, textacceso, textcancelacion  }= props;
    return(
        <div className="info_general_container">
            <div className="info-general">
                <div className="info-1">
                    <div><FaPencilRuler></FaPencilRuler></div>
                    <div>
                        <h2>Diseñado por</h2>
                        <p>{diseñadores}</p>
                    </div>
                </div>
                <div className="info-2">
                    <div><BsDoorOpen></BsDoorOpen></div>
                    <div>
                        <h2>Acceso sin restricción de horario</h2>
                        <p>Realiza tu llegada fácilmente {textacceso}.</p>
                    </div>
                </div>
                <div className="info-3">
                    <div><GrSchedule></GrSchedule></div>
                    <div>
                        <h2>Cancelación gratuita {textcancelacion}</h2>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default InfoGeneralReseva;
