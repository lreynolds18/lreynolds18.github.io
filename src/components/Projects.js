import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, ImageHeader, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Iframe from 'react-iframe';

export default class Projects extends Component {
  render() {
    const projects = [
      {
        id: "1",
        date: "8/31/16 - 5/1/17",
        title: "GE PETT: Predix-Enabled Toy Train",
        stack: "Python (RPi.GPIO, paho.mqtt, csv, json, neopixel, Adafruit_BMP), C (Arduino), JavaScript (Polymer), Predix, Pi-SPROG, Raspberry Pi, Arduino, HTML, CSS",
        image: "../../public/projects/pett/team-photo.jpg",
        overview: [ 
          "Worked on a team of five students in MSU senior capstone course",
          "Designed a N-scale toy train set to demonstrate the power of GE’s Predix",
          "Worked directly with customer to develop a completed project",
          "Used Raspberry Pis and an Arduino to collect data about the trains",
          "Collected data on Predix Cloud by sending data over MQTT and Websockets",
          "Created a web application to visual the data and analytics",
        ],
        links: {__html: "<p><img src='../../public/projects/pett/team-photo.jpg' alt='team_photo'> <br /> <br />Full write-up can be found here: <a href='http://www.cse.msu.edu/~cse498/2017-01/projects/ge/'>http://www.cse.msu.edu/~cse498/2017-01/projects/ge/</a></p> <br /> <p>Code for train anayltics/sensors can be found here: <a href='https://github.com/lreynolds18/MSU-Capstone-Source-Code'>https://github.com/lreynolds18/MSU-Capstone-Source-Code</a></p> <br /> <p>Code for website can be found here: <a href='https://github.com/lreynolds18/MSU-Capstone'>https://github.com/lreynolds18/MSU-Capstone</a></p> <br /><div> <iframe src='https://www.youtube.com/embed/jKzvhQf4yPY?ecver=2' width='640px' height='360px' display='initial' position='relative' allowFullScreen/></iframe> </div>"},
      },     
      {
        id: "2",
        date: "8/31/16 - 5/1/17",
        title: "Voice Analyzer",
        stack: "Python (pandas, librosa, sklearn, scipy, numpy, matplotlib, urllib, BeautifulSoup, Jupyter Notebook)",
        image: "",
        overview: [ 
          "Created an application that can detect gender, age, and dialect in any recording of human voice",
          "Wrote a website crawler to download over 15,000 .wav files of human voice",
          "Wrote another script that collected provided data (gender, age, dialect) and processed the .wav files",
          "Used librosa to process the .wav files into 153 features",
          "Wrote a script to clean data that was provided (generalized specifics - i.e. dialect for Alberta, Ca was Canada)",
          "Used machine learning techniques to create a reasonable good model to classify human voice",
        ],
        links: {__html: "<p>All code can be found here: <a href='https://github.com/lreynolds18/Voice-Analyzer'>https://github.com/lreynolds18/Voice-Analyzer</a></p> <br /> <p>Download script to record your voice and test models here: <a href='../../public/test-voice.zip'>here</a></p>"},
      }, 
      {
        id: "3",
        date: "1/28/18 - Present",
        title: "Anet A8",
        stack: "3d Printing, Arduino, Cura, Blender, Tinkercad",
        image: "",
        overview: [ 
          "Built and upgraded an Anet A8 printer.",
          "Installed an X belt tensior and X axis drag chain",
          "Installed an Y belt tensior and Y axis drag chain",
          "Installed a filament guide",
          "Installed various frame supports",
          "Installed mosfet on hot bed and extruder to increase safety",
          "Soldered wires directly on hot bed",
          "Installed a proximity sensor to ALB (auto level bed)"
        ],
        links: {__html: "<p>I built out the kit that was shipped to me <br /><img src='../../public/projects/anet/box.jpg' width='480px' height='480px'><br /><img src='../../public/projects/anet/half_built.jpg' width='480px' height='480px'><br /><img src='../../public/projects/anet/mostly_built.jpg' width='480px' height='480px'><br /><img src='../../public/projects/anet/fully_built.jpg' width='480px' height='480px'><br /><br />I've been pretty happy with the print quality.  Here's the printer printing out benchy which is a torture test for 3d printers<br /><img src='../../public/projects/anet/benchy_print.jpg' width='480px' height='480px'><br /><img src='../../public/projects/anet/final_benchy.jpg' width='480px' height='480px'><br /><br />Finally, here is some random prints<br /><img src='../../public/projects/anet/random_prints.jpg' width='480px' height='480px'></p>"},
      },
    ];

    var style = {
      height: '100%',
      overflow: 'auto'
    };

    return (
      <div style={ style }>
        <Grid>
          {projects.map(item => {
            return <div key={item.id}>
              <Row>
                <Col>
                  <Card style={{"background": "#FDFDFD"}}> 
          {/* <ImageHeader imageSrc={item.image} /> */}
                    <CardHeader style={{"background": "#FDFDFD"}}>{item.title}</CardHeader>
                    <CardBody style={{"background": "#FDFDFD"}}>
                      <p>Stack: {item.stack}</p>
                      {item.overview.map(function(exp, index) {
                          return <p key={ index }>{exp}</p>;
                      })}
                    </CardBody>
                    <CardFooter style={{"background": "#FDFDFD"}}><div dangerouslySetInnerHTML={ item.links } /></CardFooter>
                  </Card>
                </Col>
              </Row></div>;
          })}
        </Grid>
      </div>
    );
  }
} 
