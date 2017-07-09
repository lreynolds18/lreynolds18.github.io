import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import Iframe from 'react-iframe';
import s from '../styles/home.style';

export default function Projects() {
  const pett = [
      "Worked on a team of five students in MSU senior capstone course",
      "Designed a N-scale toy train set to demonstrate the power of GE’s Predix",
      "Worked directly with customer to develop a completed project",
      "Used Raspberry Pis and an Arduino to collect data about the trains",
      "Collected data on Predix Cloud by sending data over MQTT and Websockets",
      "Created a web application to visual the data and analytics",
  ];

  const voice = [
      "Created an application that can detect gender, age, and dialect in any recording of human voice",
      "Wrote a website crawler to download over 15,000 .wav files of human voice",
      "Wrote another script that collected provided data (gender, age, dialect) and processed the .wav files",
      "Used librosa to process the .wav files into 153 features",
      "Wrote a script to clean data that was provided (generalized specifics - i.e. dialect for Alberta, Ca was Canada)",
      "Used machine learning techniques to create a reasonable good model to classify human voice",
  ];

  return (
    <div>
      <p>Projects</p>
      <h3>Predix-Enabled Toy Train</h3>
      <p>Brief overview:</p>
      <div>
          {pett.map(function(exp, index) {
              return <p key={ index }>{exp}</p>;
          })}
          <p>Full write-up can be found here: <a href="http://www.cse.msu.edu/~cse498/2017-01/projects/ge/">http://www.cse.msu.edu/~cse498/2017-01/projects/ge/</a></p>
          <p>Code for train anayltics/sensors can be found here: <a href="https://github.com/lreynolds18/MSU-Capstone-Source-Code">https://github.com/lreynolds18/MSU-Capstone-Source-Code</a></p>
          <p>Code for website can be found here: <a href="https://github.com/lreynolds18/MSU-Capstone">https://github.com/lreynolds18/MSU-Capstone</a></p>
          <div>
              <Iframe url="https://www.youtube.com/embed/jKzvhQf4yPY?ecver=2" width="640" height="360" display="initial" position="relative" allowFullScreen/>
          </div>
      </div>
      <h3>Voice Anaylzer</h3>
      <p>Brief overview:</p>
      <div>
          {pett.map(function(exp, index) {
              return <p key={ index }>{exp}</p>;
          })}
          <p>All code can be found here: <a href="https://github.com/lreynolds18/Voice-Analyzer">https://github.com/lreynolds18/Voice-Analyzer</a></p>
          <p>Download script to record your voice and test models here: <a href="" download></a></p>
      </div>
    </div>
  );
}

