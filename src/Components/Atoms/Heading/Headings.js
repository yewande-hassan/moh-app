import React from "react";
import './HeadingStyle.css';

const Headings = ({ className, value }) =>{
    return(
        <>
          <h1 className={className}>{value}</h1>
        </>
    ); 
};

export default Headings;