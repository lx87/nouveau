import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from "/logo.svg";
import { Link } from "react-router";

function Header() {
    return (
        <Navbar expand className="navbar" sticky="top">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to={"/"} className="fw-bold">
                    <img src={Icon} style={{ width: "40px" }} alt="logo" /> Nouveau
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