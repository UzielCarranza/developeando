import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" >
            <Container>
                <Navbar.Brand href="#hero-intro">Uziel Carranza Charro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav id={"nav-bar"}>
                        <Nav.Link href="#about-section">About</Nav.Link>
                        <Nav.Link href="#experience-section">Experience</Nav.Link>
                        <Nav.Link href="#contact-section">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
