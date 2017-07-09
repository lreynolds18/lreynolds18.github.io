import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';
// import WorkExperience from './Experience';

export default function Work() {
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
        <h1>Work Experience</h1>
        <div>
            <h1>Institute for Cyber-Enabled Research</h1>
            {icer.map(function(exp, index) {
                return <p key={ index }>{exp}</p>;
            })}

            <h1>Matrix</h1>
            {matrix.map(function(exp, index) {
                return <p key={ index }>{exp}</p>;
            })}
        
            <h1>Global Observatory for Ecosystem Services</h1>
            {goes.map(function(exp, index) {
                return <p key={ index }>{exp}</p>;
            })}
        </div>
    </div>
  );
}
