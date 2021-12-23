import React from "react";
// import { Navbar, NavbarBrand, NavLink, Container, Nav,NavbarToggler,Collapse} from "reactstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavbarStyle.css";
import 'bootstrap/dist/css/bootstrap.css';

const Navbars =() =>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container fliud className="contain"> 
                    <Navbar.Brand href="/"><h1 className="brand-name" >Nailzbymoh</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="nav">
                            <Nav.Link className="link" href="/services">Services</Nav.Link>
                           <Nav.Link className="link" href="/pricing">Pricing</Nav.Link>
                            <Nav.Link className="link" href="/about">About</Nav.Link>
                            <Nav.Link className="link" href="/testimonials">Testimonials</Nav.Link>
                            <Nav.Link className="link" href="/products">Products</Nav.Link>
                            <Nav.Link className="link" href="/contact">Contact</Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};
export default Navbars;