import React from 'react';
// import t ReferenceError: center is not definednteractive from 'react-interactive';
import { Link } from 'react-router-dom';
// import { Code } from '../styles/style';
// import s from '../styles/home.style';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';


export default function About() {
    const header = "I love data analytics, web development and IoT projects!";
    const header2 = "I can be found around the web at lreynolds18";

    return (
        <div>
            <h2>About</h2>
            <Grid>
                <Row>
                    <Col xs={5} md={5} style={{ "padding-left": "0px", "padding-right": "0px" }}>
                        <img src={'../../public/mexico.jpg'} alt={'Sayulita, Mexico'} className={"img-responsive"} />
                    </Col>

                    <Col xs={4} md={4}>
                        <h3>Hi - I'm Lucas Reynolds</h3>
                        <p>{header}</p>
                        <p>{header2}</p>
                        <ButtonToolbar>
                            <Button
                              bsStyle="primary"
                              href="mailto:lreynolds18@gmail.com"
                            ><FaEnvelope /> Email</Button>
                            <Button
                              bsStyle="primary"
                              href="https://github.com/lreynolds18"
                            ><FaGithubAlt /> Github</Button>
                            <Button
                              bsStyle="primary"
                              href="https://www.linkedin.com/in/lreynolds18/"
                            ><FaLinkedinSquare /> Linkedin</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
