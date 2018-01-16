import React from 'react';
import { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Changelog from '../components/Changelog';
import AboutButtons from '../components/AboutButtons';


export default class About extends Component {
  render() {
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
              <AboutButtons />
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
}
