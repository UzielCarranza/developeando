import React, {useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {typeWriter} from "../utils/type-writer";

export const CallToAction = () => {


    useEffect(() => {
        typeWriter( ["Coder", "Developer", "Engineer", "Programmer"], "type-writer").then(r => {console.log(r)}).catch((error) => console.log(error));
    }, []);

    return (
            <Container>
                <p className="lead">Hi! My name is</p>
                <h1 className="display-4">Uziel Carranza Charro </h1>
                <h4 className="display-6">{`</`}<span id="type-writer"></span><span id="cursor">|</span>{`>`}  </h4>
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
