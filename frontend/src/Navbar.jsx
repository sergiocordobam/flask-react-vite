import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const AppNavbar = () => {
    return (
        <Navbar bg="p-3 mb-2 bg-secondary text-white" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/cars/list_cars" className="nav-link">Cars</Nav.Link>
                    <Nav.Link as={Link} to="/products/list_products" className="nav-link">Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
