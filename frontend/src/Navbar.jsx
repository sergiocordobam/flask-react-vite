import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Cars</Link>
                </li>
                <li>
                    <Link to="/products/list_products">Products</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;