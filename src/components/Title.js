import React from "react";


const Title = (props) =>{ 
    const {title} = props;
    const {info}=props;
        return (
            <div className="container">
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
    )
}

export default Title;
