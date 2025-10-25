import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "./ui/Icon";
import { Link } from "react-router";

function Header() {
    return (
        <Navbar expand className="bg-body-tertiary">
            <Container fluid className="px-4">
                <Navbar.Brand href="/" className="fw-bold">
                    <Icon iconName="currency-dollar" /> ERD Shop
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/"}>Catalog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;