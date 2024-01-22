import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export const Projects = () => {
    // bg-black
    return (
        <Container className="container">
            <Row>
                <Col xs={12} md={8}>
                    <Card className="w-100 flex-lg-row">
                        <div className="w-100">
                            <div className="container-lg">
                                <Card.Img
                                    className="img-fluid w-100 w-md-50"
                                    variant="top"
                                    src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                />
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Here goes information about the project
                            </Card.Text>
                        </Card.Body>
                        <Card.ImgOverlay className="d-flex flex-column">
                            <div className="d-flex flex-row gap-4">
                                <span className="text-white">front-end</span>
                                <span className="text-white">javaScript</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <div className="h1">
                                    <a className="text-white text-decoration-none" href="#">
                                        This will pop up when the mouse is on hover of this element and will display links
                                    </a>
                                </div>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}