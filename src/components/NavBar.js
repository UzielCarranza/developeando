import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#nav-bar">Uziel Carranza Charro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav id={"nav-bar"}>
                        <Nav.Link href="#about-section">About</Nav.Link>
                        <Nav.Link href="#experience-section">Experience</Nav.Link>
                        <Nav.Link href="#projects-section">Projects</Nav.Link>
                        <Nav.Link href="#contact-section">Contact</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
