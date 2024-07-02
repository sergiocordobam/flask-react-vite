import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const AppNavbar = () => {
    return (
        <Navbar className='navbar-custom'>
            <Nav.Link as={Link} to="/">
                <img alt="Logo" src="/btg-pactual-logo.png" className="d-inline-block align-top"/>
            </Nav.Link>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/cars/list_cars" className="nav-link">Cars</Nav.Link>
                    <Nav.Link as={Link} to="/products/list_products" className="nav-link">Products</Nav.Link>
                    <Nav.Link as={Link} to="/cdt/form" className="nav-link">CDT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
