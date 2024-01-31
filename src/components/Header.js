import React, {useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {typeWriter} from "../utils/type-writer";
import "../styles/callToAction.css";

export const CallToAction = () => {
    useEffect(() => {
        typeWriter( ["Coder", "Developer", "Engineer", "Programmer"], "type-writer").then(r => {console.log(r)}).catch((error) => console.log(error));
    }, []);

    return (
            <Container id="hero-intro" className="p-md-5">
                <p className="lead">Hi! My name is</p>

                <div className="d-flex flex-row flex-wrap align-items-center gap-3">
                    <h1 className="display-1">Uziel Carranza Charro</h1>
                    <h5 className="display-4">
                        {`</`}<span id="type-writer"></span><span id="cursor">|</span>{`>`}
                    </h5>
                    <h4 className="display-6 subtitle-header">  Software Engineer turning ideas into reality! </h4>
                </div>

                <p className="lead">
                    I specialize in building exceptional digital experiences. My passion lies in the creation of projects that
                    establish a meaningful connection with users.
                </p>
                <p>
                    I am currently working on migrating a website to newer technologies and (designs)!! checkout
                    <a href="https://www.hoseandfittings.com" className="p-2" target="_blank" rel="noreferrer">
                        HoseAndFittings.com
                    </a>
                </p>
                <Row>
                    <Col>
                        <Button variant="app" size="lg" href="#about-section">
                            Get to know me!
                        </Button>
                    </Col>
                </Row>
            </Container>
    );
}
