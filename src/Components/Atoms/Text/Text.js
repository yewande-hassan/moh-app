import React from "react";
import './TextStyle.css';

const Text =({className, value})=>{
    return(
        <>
          <p className={className}>{value}</p>
        </>
       
    )
}

export default Text;