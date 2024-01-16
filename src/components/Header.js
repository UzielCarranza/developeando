import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


export const CallToAction = () => {
    //needs to render different words inside  coder tag, words need to be related to what I do
    return (
            <Container>
                <p className="lead">Hi! My name is</p>
                <h1 className="display-4">Uziel Carranza Charro </h1>

                <h4 className="display-6"> {`</Coder>`} </h4>
                <p className="lead">  Software Developer turning ideas into reality! </p>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" href="#about">
                            Get to know me!
                        </Button>
                    </Col>
                </Row>
            </Container>
    );
}
