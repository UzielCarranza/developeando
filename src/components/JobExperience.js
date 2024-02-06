import React from 'react';
import {Tab, Nav, Col, Row, Card, Container} from 'react-bootstrap';

const JobList = ({ jobs }) => {
    return (
        <Tab.Container id="job-tabs" defaultActiveKey="job1">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {jobs.map((job, index) => (
                            <Nav.Item key={index}>
                                <Nav.Link className="text-white" eventKey={`job${index + 1}`}>{job.title}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {jobs.map((job, index) => (
                            <Tab.Pane key={index} eventKey={`job${index + 1}`}>
                                <h5>{job.title}</h5>
                                <p>{job.role}</p>
                                <ul>
                                    {job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export const JobExperience = () => {
    const jobsDescription = [
        {
            title: "Power Components Corporation",
            role: "Software Developer",
            description: [
                "Part of a team that migrated 70% of company website from Perl to PHP, resulting in a 30% improvement in loading times and ensuring a seamless transition for stakeholders, with an anticipated 50% increase in user engagement.",
                "Identified and optimized inefficient workflows during the migration, improving overall system performance and ensuring a more optimized and streamlined website",
                "Integrated a credit card payment system into the backend using PHP, streamlining financial transactions and improving overall system functionality.",
            ]
        },
        {
            title: "PGIP-Tech",
            role: "Lead Software Developer Intern",
            description: [
                "Mentored and supervised a team of 4 software developer interns, guiding them to achieve goals.",
                "Optimized workflow by effectively allocating coding tasks, ensuring timely project milestones",
                "Conducted scrum team meetings to enhance project management and on-time code delivery.",
                "Demonstrated Java proficiency through the development of a creative terminal-based game application."
            ]
        }
    ];
    return (
    <Container id={"experience-section"} >
        <Col xs={12} lg={8}>
            <Card className="bg-black text-white">
                <Card.Body>
                    <Card.Title>Places I've Worked</Card.Title>
                    <JobList jobs={jobsDescription} />
                </Card.Body>
            </Card>
        </Col>
    </Container>
    );
};