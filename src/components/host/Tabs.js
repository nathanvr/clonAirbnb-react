import { useState } from "react";
import { Icon } from '@iconify/react';

const Tabs =()=>{

    const [toggleState, setToggleState]=useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <div className="container-tabs">
            <div className="bloc-tabs">
                <button className={toggleState===1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>En curso (0)</button>
                <button className={toggleState===2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Llegará pronto (0)</button>
                <button className={toggleState===3 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Hará el check-out (0)</button>
                <button className={toggleState===4 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(4)}>Agendadas (0)</button>
            </div>
            <div className="content-tabs">
                <div className={toggleState===1 ? "content active-content " : "content"}>
                <Icon icon="fluent:text-bullet-list-square-search-20-regular" className="icon" />
                    <p>No tienes estadías en este momento.</p>
                </div>
                <div className={toggleState===2 ? "content active-content " : "content"}>
                <Icon icon="fluent:text-bullet-list-square-search-20-regular" className="icon" />
                    <p>No tienes ningún huésped que llegue hoy o mañana.</p>
                </div>
                <div className={toggleState===3 ? "content active-content " : "content"}>
                <Icon icon="fluent:text-bullet-list-square-search-20-regular"  className="icon"/>
                    <p>No tienes ningún huésped que haga el check-out hoy o mañana.</p>
                </div>
                <div className={toggleState===4 ? "content active-content " : "content"}>
                <Icon icon="fluent:text-bullet-list-square-search-20-regular" className="icon" />
                    <p>Ahora mismo no tienes reservaciones agendadas.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;
