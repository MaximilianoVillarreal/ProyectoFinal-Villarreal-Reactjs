import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
    <Navbar>
        <Container>
        	<Navbar.Brand>
            <NavLink to="/" className="logo">ECommerce</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto navbar-links">
            <NavLink to="category/Celular">Celular</NavLink>
            <NavLink to="category/Iphone">Iphone</NavLink>
        </Nav>
        <CartWidget />
        </Container>
    </Navbar>
    );

}