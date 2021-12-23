import React from "react";
import { Container } from "reactstrap";
import Headings from "../../Atoms/Heading/Headings";
import Text from "../../Atoms/Text/Text";
import './PricingStyle.css';


const Pricing =()=>{
    return(
        <>
        <Container fluid className="container3">
          <Headings value="Pricing" className="pricing" />  
          <Text value="We believe that perfect nails are the results of the continuous serach for excellence, attention to details, taste for innovation and readiness to any experience with our nail designs." className="pText" />
         
        </Container>
        </>
    )
}

export default Pricing;