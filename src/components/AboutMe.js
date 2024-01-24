import {Card, Container, ListGroup} from "react-bootstrap";

const frontendTechnologies = () => ["JavaScript (ES6+)", "React", "Bootstrap", "Linux"];
const backendTechnologies = () => [ "Java", "SpringBoot", "PHP", "MySQL"];
export const AboutMe = () => {
    return (
        <Container id={"about-section"} className="d-flex flex-column justify-content-md-center">
            <Card className="w-100 h-50 bg-black text-white">
                <Card.Body>
                    <Card.Title className="display-4">About Me</Card.Title>
                    <Card.Text>
                        As a child, I was always curious about how programs worked. I used to spend time "opening" my video games and laptops to fix them. This curiosity transitioned well into programming, where anytime I am interested in something, I break it until I figure out how it works.
                        Combining a background in military service with a deep commitment to accessibility and inclusivity,
                        I bring a distinctive blend of discipline and determination to the tech landscape.
                        My diverse experiences fuel my ability to engineer innovative and influential software solutions,
                        and I am enthusiastic about contributing my skills and expertise to make a positive impact in society.
                    </Card.Text>

                    <div className="d-flex flex-column align-content-between justify-content-between w-100 bg-black">

                        <ListGroup className="d-flex flex-row flex-wrap justify-content-between justify-content-md-center border-black" >
                            {frontendTechnologies().map((tech, index) => (
                                <ListGroup.Item key={index} className="bg-black text-white border-black"><span className="main-title-color">{"</"}</span>{tech}<span className="main-title-color">{">"}</span></ListGroup.Item>
                            ))}
                        </ListGroup>

                        <ListGroup className="d-flex flex-row flex-wrap justify-content-between justify-content-md-center" >
                            {backendTechnologies().map((tech, index) => (
                                <ListGroup.Item key={index} className="bg-black text-white border-black"><span className="main-title-color">{"</"}</span>{tech}<span className="main-title-color">{">"}</span></ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}