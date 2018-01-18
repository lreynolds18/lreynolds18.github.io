import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    const icer = [
      "Wrote scripts to run batch jobs to benchmark the high performance computer’s input and output",
      "Used benchmarking programs and wrote programs with OpenMP and OpenMPI to record file read and file write bandwidth", 
      "Processed the output using bash to put data in CSV format",
      "Used python libraries pandas, numpy, and matplotlib to produce graphs and analytics to show users the benefits of scratch file system",
      "Installed user requested software onto the high performance computer",
      "Created and modified modulefiles written in lua",
      "Teaching assistant for Intro to Linux, Intro to HPCC, Big Data, and Software Carpentry workshops",
      "Lead station at Women in Engineering Summer Camp and Science Festival",
    ];

    const matrix = [
      "Added user functionality to the site by creating a login modal, forget password form, upload and crop profile picture, and profile page",
      "Created and planned the layout for an ARCS plugin in angular javascript",
      "Edited the ARCS mysql database to config with the plugin",
      "Wrote scripts and sql injections to modify the database",
    ];

    const goes = [
      "Programmed in python (Django), javascript, html, and css",
      "Implemented a stratified plot sampling algorithm and initial values for a sampling design form",
      "Updated the mapping interface from Google Leaflet to ArcGis ESRI Map",
      "Organized large sections of code, improved code logic, and designed code to scale",
      "Assisted with troubleshooting IT problems",
    ];

    return (
      <div>
          <h2>Work Experience</h2>
          <div>
              <h3>Institute for Cyber-Enabled Research</h3>
              {icer.map(function(exp, index) {
                  return <p key={ index }>{exp}</p>;
              })}

              <h3>Matrix</h3>
              {matrix.map(function(exp, index) {
                  return <p key={ index }>{exp}</p>;
              })}
          
              <h3>Global Observatory for Ecosystem Services</h3>
              {goes.map(function(exp, index) {
                  return <p key={ index }>{exp}</p>;
              })}
          </div>
      </div>
    );
  }
}
