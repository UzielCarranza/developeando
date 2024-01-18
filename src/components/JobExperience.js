import {Card, Container} from "react-bootstrap";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const renderExperienceAsPills = () => {
        return (
            <Tab.Container id="job-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Power Components Corporation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Creative Oddysey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">PGIP-Tech</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">Content for power components job experience</Tab.Pane>
                            <Tab.Pane eventKey="second">Content for creative oddysey</Tab.Pane>
                            <Tab.Pane eventKey="third">Content for PGIP-Tech</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
}

export const JobExperience = () => {
    return (
        <Container id={"experience-section"}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Places I've Worked</Card.Title>
                    {renderExperienceAsPills()}
                </Card.Body>
            </Card>
        </Container>
    );
}