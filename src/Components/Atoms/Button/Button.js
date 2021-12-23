import React from "react";
import './ButtonStyle.css';

const Button = ({type,className,onClick,id,value})=>{
    return(
        <>
            <button className={className} onClick={onClick} id={id} type={type}>{value}</button>
        </>
    );

}

export default Button;