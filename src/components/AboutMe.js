import {Card, Container, ListGroup} from "react-bootstrap";

export const AboutMe = () => {
    return (
        <Container id={"about-me"}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        Hello! my name is Uziel and I enjoy building things on the internet!
                    </Card.Text>

                    <div className={"d-flex flex-row align-content-between justify-content-between w-50"}>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>JavaScript (ES6+)</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                            <ListGroup.Item>Linux</ListGroup.Item>
                        </ListGroup>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>SpringBoot</ListGroup.Item>
                            <ListGroup.Item>PHP</ListGroup.Item>
                            <ListGroup.Item>MySQL</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}