import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {SocialMedia} from "./SocialMedia";

export const Footer = () => {
    return (
        <footer className="mt-5" id="contact-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <h5>Get In Touch</h5>
                        <p>
                            I am always open to connect with everybody.
                            Whether you have a question or just want to say hi, my inbox is always open!
                        </p>
                        <p>Connect With Me!</p>


                        <div className="w-50 d-flex flex-row justify-content-md-start">
                            <SocialMedia/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Uziel Carranza Charro. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};