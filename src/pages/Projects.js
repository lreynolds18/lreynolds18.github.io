import React from 'react';
import { Component } from 'react';
import Interactive from 'react-interactive';
import Iframe from 'react-iframe';
import DownloadLink from 'react-download-link';

export default class Projects extends Component {
  render() {
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

    const link = text => (
      <Interactive
        as="a"
        href={text}
        hover={{ color: '#3b5998' }}
        active={{ color: '#3b5998' }}
        style={{ color: 'black', textDecoration: 'none' }}
      >{text}</Interactive>
    );

    return (
      <div>
        <h2>Projects</h2>
        <h3>Predix-Enabled Toy Train</h3>
        <p>Brief overview:</p>
        <div>
            {pett.map(function(exp, index) {
                return <p key={ index }>{exp}</p>;
            })}
            <p>Full write-up can be found here: {link("http://www.cse.msu.edu/~cse498/2017-01/projects/ge/")}</p>

            <p>Code for train anayltics/sensors can be found here: {link("https://github.com/lreynolds18/MSU-Capstone-Source-Code")}</p>

            <p>Code for website can be found here: {link("https://github.com/lreynolds18/MSU-Capstone")}</p>

            <div>
                <Iframe url="https://www.youtube.com/embed/jKzvhQf4yPY?ecver=2" width="640px" height="360px" display="initial" position="relative" allowFullScreen/>
            </div>
        </div>
        <h3>Voice Anaylzer</h3>
        <p>Brief overview:</p>
        <div>
            {voice.map(function(exp, index) {
                return <p key={ index }>{exp}</p>;
            })}
            <p>All code can be found here: {link("https://github.com/lreynolds18/Voice-Analyzer")}</p>
            <p>Download script to record your voice and test models here: <Interactive as="a" href="../../public/test-voice.zip" hover={{ color: '#3b5998' }} active={{ color: '#3b5998' }} style={{ color: 'black', textDecoration: 'none' }}>Download test-voice.zip</Interactive></p>
        </div>
      </div>
    );
  }
}

