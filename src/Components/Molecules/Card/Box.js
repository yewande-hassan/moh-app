import React from "react";
import './BoxStyle.css';
import {Card, CardBody, CardTitle, CardText, Container} from "reactstrap";

const Box =()=>{
    return(
        <>
        <Container className="container1">
            <Card className='cards'>
                <CardBody>
                    <CardTitle className="CTitle">Location</CardTitle>
                    <CardText>
                        No 2 Mobolaji street, Ogba Aguda Off Oladoyin street, Lagos Nigeria.
                    </CardText>
                </CardBody>
            </Card>
            <Card className='cards'>
                <CardBody>
                    <CardTitle className="CTitle">Hours</CardTitle>
                    <CardText>
                        <p>Monday-Saturday:9am-7pm</p>
                        <p>Sunday:12pm-6pm</p>
                    </CardText>
                </CardBody>
            </Card>
            <Card className='cards'>
                <CardBody>
                    <CardTitle className="CTitle">Contact</CardTitle>
                    <CardText>
                        <p>(+234)81 3800 8500</p>
                        <p>nailzbymoh@gmail.com</p>
                    </CardText>
                </CardBody>
            </Card>
            </Container>
        </>
    );
};

export default Box;