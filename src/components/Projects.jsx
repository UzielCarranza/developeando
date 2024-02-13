import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Project = () => {
    return (
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
            <Card.Body className="w-100">
                <Card.Title>H&F Website Modernization </Card.Title>
                <Card.Text>
                    The project modernized the platform, offering a streamlined interface and an enriched browsing experience for power component seekers.
                    Utilizing proficiency in Java, PHP, and JavaScript, I implemented front-end pages and developed advanced backend features.
                    This migration significantly improved performance and enhanced the user experience.
                    <p>Technologies employed: PHP, Java, JavaScript, Perl</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export const Projects = () => {
    // bg-black
    return (
        <Container id="projects-section">
            <Row>
                <Col xs={12} md={8}>
                   <Project/>
                </Col>
            </Row>
        </Container>
    )
}