import React from "react";
import { Container } from "reactstrap";
import Headings from "../../Atoms/Heading/Headings";
import Text from "../../Atoms/Text/Text";
import Box from "../../Molecules/Card/Box.js";
import Button from "../../Atoms/Button/Button";
import "./HomeBodyStyle.css";


const HomeBody= ()=>{
return(
    <>
    <Container fluid className="container2">
        <Headings value="Enjoy the best pedicure & manicure services" className="heading"/>
        <Text value="Make your nails perfect with nailzbymoh" className="text"/>
        <Box/>
        <Button value="Book an Appointment" className="btn"/>
    </Container>
    </>
);
};

export default HomeBody;