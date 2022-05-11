import React from "react";


const Title = (props) =>{ 
    const {title} = props;
    const {info}=props;
        return (
            <div className="container">
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
    )
}

export default Title;
