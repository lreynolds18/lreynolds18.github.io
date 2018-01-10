import React from 'react';
// import t ReferenceError: center is not definednteractive from 'react-interactive';
import { Link } from 'react-router-dom';
// import { Code } from '../styles/style';
// import s from '../styles/home.style';
import { Table, Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';


export default function About() {
    const header = "I am a developer from Southeast Michigan.  I'm passionate about anything related to CS (compilers, assembly code <3), but I am especially passionate about data science (including machine learning, deep learning, reinforcement learning, statistics and mathematics) and robotics.  In my free time, I enjoy the outdoors, learning French and cooking."
        
    const header2 = "Find me around the web at lreynolds18";
    const data = [{date: "12/2/18", text: "Connected to facebook"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google"},];

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
                        <h4>Changelog</h4>
                        <Table bordered condensed hover style={{"border" : "0.5px solid #000000"}}>
                            <thead style={{"border" : "0.5px solid #000000"}}>
                                <tr style={{"border" : "0.5px solid #000000"}}>
                                    <th style={{"border" : "0.5px solid #000000"}}>Date</th>
                                    <th style={{"border" : "0.5px solid #000000"}}>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(function(item, index) {
                                    if (item.url) {
                                        return <tr key={index} style={{"border" : "0.5px solid #000000"}}>
                                                 <td style={{"border" : "0.5px solid #000000"}}><a href={item.url}>{item.date}</a></td>
                                                 <td style={{"border" : "0.5px solid #000000"}}><a href={item.url}>{item.text}</a></td>
                                               </tr>;
                                    } else {
                                        return <tr key={index} style={{"border" : "0.5px solid #000000"}}>
                                                 <td style={{"border" : "0.5px solid #000000"}}>{item.date}</td>
                                                 <td style={{"border" : "0.5px solid #000000"}}>{item.text}</td>
                                               </tr>;
                                    }
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} md={10}>
                        <h4>Projects</h4>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}
