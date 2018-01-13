import React from 'react';
// import t ReferenceError: center is not definednteractive from 'react-interactive';
import { Link } from 'react-router-dom';
// import { Code } from '../styles/style';
// import s from '../styles/home.style';
import { Table, Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';

import Changelog from '../components/Changelog';


export default function About() {
    const header = "I am a developer from Southeast Michigan.  I'm passionate about anything related to CS (compilers, assembly code <3), but I am especially passionate about data science (including machine learning, deep learning, reinforcement learning, statistics and mathematics) and robotics.  In my free time, I enjoy the outdoors, learning French and cooking.";
        
    const header2 = "Find me around the web at lreynolds18";

    return (
        <div>
            <h2>About</h2>
            <Grid>
                <Row>
                    <Col xs={2} md={2} style={{ "paddingLeft": "0px", "paddingRight": "0px" }}>
                        <img src={'../../public/mexico.jpg'} alt={'Sayulita, Mexico'} className={"img-responsive"} />
                    </Col>

                    <Col xs={6} md={6}>
                        <h3>Hi - I'm Lucas</h3>
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
                <br />
                <Row>
                    <Col xs={10} md={10}>
                        <Changelog />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={10} md={10}>
                        <h4>Projects</h4>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
