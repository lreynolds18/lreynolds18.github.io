import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class Changelog extends Component {
  render() {
    const ChangelogData = [
      {
        id: "1",
        url: "",
        date: "1/1/2012 - 5/1/2012", 
        text: "Took high school course on Visual Basic", 
        importance: "low"
      },     
      {
        id: "2",
        url: "https://github.com/lreynolds18/Python/blob/master/proj11.py",
        date: "8/28/2013 - 12/13/2013", 
        text: "Took Intro to Programming Course on Python. Created a fishing simulator using python (turtle graphics)", 
        importance: "medium"
      },
      {
        id: "3",
        url: "http://lreynolds18.appspot.com/projects",
        date: "1/6/14 - 5/2/14", 
        text: "Took Intro to Programming Course on C++. Learned all about C++ and the hard ways of compiling in netbeans.", 
        importance: "medium"
      },
      {
        id: "4",
        url: "https://www.msusolar.com/",
        date: "1/6/14 - 5/2/14", 
        text: "Member of the MSU Solar Car Team.  Created a backup camera using a raspberr pi.  Learned lots about electronics",
        importance: "medium"
      },
      {
        id: "5",
        url: "https://in.udacity.com/course/web-development--cs253",
        date: "1/6/14 - 5/2/14", 
        text: "Started diving into web development (python flask backend) with course from Steve Huffman (reddit co-founder)",
        importance: "medium"
      },
      {
        id: "6",
        url: "http://lucas-reynolds.appspot.com/blog",
        date: "4/15/2014", 
        text: "Created a blog page in the udacity course",
        importance: "low"
      },
      {
        id: "7",
        url: "http://lreynolds18.appspot.com/",
        date: "5/1/2014", 
        text: "Created a personal website using ",
        importance: "low"
      },
      {
        id: "8",
        url: "",
        date: "5/1/2014", 
        text: "Started learning and using Ruby on Rails",
        importance: "low"
      },
      {
        id: "9",
        url: "",
        date: "5/1/2014", 
        text: "Started learning and using Ruby on Rails",
        importance: "low"
      },
      {
        id: "10",
        url: "",
        date: "5/1/2014", 
        text: "Started learning and using Ruby on Rails",
        importance: "low"
      },
      {
        id: "11",
        url: "",
        date: "5/1/2014", 
        text: "Started working at Global Observatory for Ecosystem Services (GOES) on Carbon Measuring, Reporting and Verification website (written in Python Django, Javascript, html, css)",
        importance: "high"
      },
      {
        id: "12",
        url: "https://github.com/lreynolds18/cse335project2",
        date: "1/12/15 - 5/8/15", 
        text: "Took course on Data Structures and Algorithms and course on Software Design (uml, design patterns, ethics)",
        importance: "medium"
      },
      {
        id: "13",
        url: "http://www.matrix.msu.edu/",
        date: "5/9/15", 
        text: "Started working at Matrix on Archaeological Resource Cataloguing System (written in CakePHP, coffeescript, javascript, HTML, CSS) which allowed researches to collaborate.",
        importance: "medium"
      },
      {
        id: "14",
        url: "https://www.coursera.org/learn/machine-learning",
        date: "5/9/15-9/1/15", 
        text: "Completed machine learning course by Andrew Ng.",
        importance: "low"
      },
      {
        id: "15",
        url: "https://github.com/lreynolds18/Prolog",
        date: "5/9/15-9/1/15", 
        text: "Took intro to AI course.  Learned about agents, searching, NLP (Prolog), and some ML (Decision Trees)",
        importance: "low"
      },
      {
        id: "16",
        url: "https://github.com/lreynolds18/Prolog",
        date: "9/2/15 - 12/18/15", 
        text: "Took intro to AI course.  Learned about searching, NLP (Prolog), and some ML (Decision Trees)",
        importance: "low"
      },
      {
        id: "17",
        url: "https://github.com/lreynolds18/Openmpi",
        date: "9/2/15 - 12/18/15", 
        text: "Took intro to High Performance Computing course.  Learned all about multithreading in OpenMP, OpenMPI, CUDA.  Fun example of combining OpenMP and OpenMPI to improve performance of Bucket Sort",
        importance: "low"
      },
      {
        id: "18",
        url: "",
        date: "1/11/16 - 5/6/16", 
        text: "Took course on Operating Systems",
        importance: "low"
      },
      {
        id: "19",
        url: "",
        date: "6/1/16", 
        text: "Started working at the High Performance Computing Center at MSU",
        importance: "high"
      },
      {
        id: "19",
        url: "",
        date: "8/31/16 - 12/16/16", 
        text: "Created an awesome compiler using python (Yacc and Lex)",
        importance: "medium"
      },
      {
        id: "20",
        url: "",
        date: "8/31/16 - 12/16/16", 
        text: "Took course on Machine Learning",
        importance: "medium"
      },
      {
        id: "21",
        url: "https://gitlab.msu.edu/reyno392/good-practices-in-IO",
        date: "8/31/16 - 5/1/17", 
        text: "Worked on project Good Practices in IO at ICER (MSU HPCC) which benchmarked the HPC. Researchers took down the scratch file system on accident with tar balls so the goal was to understand why that was happening.",
        importance: "medium"
      },
      {
        id: "22",
        url: "https://www.youtube.com/watch?v=jKzvhQf4yPY",
        date: "8/31/16 - 5/1/17", 
        text: "Created the GE PETT: Predix-Enabled Toy Train with four other MSU Computer Science seniors that used Bachmann N-scale toy train-set to demonstrate the power of GE’s Predix",
        importance: "medium"
      },
      {
        id: "23",
        url: "",
        date: "1/9/17 - 5/5/17", 
        text: "Took a course on Big Data.  Learned about SQL, NoSQL, Python (Pandas and scikit-learn), Java (Hadoop), Pig, Hive, Mahout and Spark",
        importance: "medium"
      },
      {
        id: "23",
        url: "https://github.com/lreynolds18/Voice-Analyzer",
        date: "1/9/17 - 5/5/17", 
        text: "Final project for Big Data.  The goal of my project was to determine the age, gender and accent of a human sound clip.  I pulled and processed wav clips from a website (using pandas, librosa, etc) and then running a prediction model on the data.",
        importance: "medium"
      },
      {
        id: "24",
        url: "",
        date: "5/9/17", 
        text: "Graduated from Michigan State University",
        importance: "high"
      },
      {
        id: "25",
        url: "https://github.com/lreynolds18/lreynolds18.github.io",
        date: "6/9/17-1/1/18", 
        text: "Developed new personal website using React and Redux",
        importance: "high"
      },
      {
        id: "26",
        url: "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv",
        date: "6/1/17-1/1/18", 
        text: "Watched the Computer Vision lectures from Stanford",
        importance: "high"
      },
      {
        id: "27",
        url: "https://doc.rust-lang.org/book/second-edition/",
        date: "10/1/17-1/1/18", 
        text: "Learned Rust by reading \"The Book\".  Created a multithreaded server and various projects in Rust.",
        importance: "low"
      },
      {
        id: "28",
        url: "https://sites.google.com/view/deep-rl-bootcamp/home?authuser=0",
        date: "11/1/17-1/1/18", 
        text: "Watched the Deep RL Bootcamp lecures from Berkeley Artificial Intelligence Research Lab",
        importance: "low"
      },
      {
        id: "29",
        url: "https://github.com/lreynolds18/lreynolds18.github.io",
        date: "1/1/18-1/20/18", 
        text: "Redesigned personal website",
        importance: "low"
      },

    ];


    return (
      <div>
        <h4>Changelog</h4>
        <Table bordered condensed hover style={{"border" : "0.5px solid #000000"}}>
          <thead style={{"border" : "0.5px solid #000000"}}>
            <tr style={{"border" : "0.5px solid #000000"}}>
              <th style={{"border" : "0.5px solid #000000"}}>Date</th>
              <th style={{"border" : "0.5px solid #000000"}}>Event</th>
            </tr>
          </thead>
          <tbody>
            {ChangelogData.reverse().map(function(item, idx) {
              if (idx < 10) {
                if (item.url) {
                  return <tr key={idx} style={{"border" : "0.5px solid #000000"}}>
                           <td style={{"border" : "0.5px solid #000000"}}><a href={item.url}>{item.date}</a></td>
                           <td style={{"border" : "0.5px solid #000000"}}><a href={item.url}>{item.text}</a></td>
                         </tr>;
                } else {
                  return <tr key={idx} style={{"border" : "0.5px solid #000000"}}>
                           <td style={{"border" : "0.5px solid #000000"}}>{item.date}</td>
                           <td style={{"border" : "0.5px solid #000000"}}>{item.text}</td>
                         </tr>;
                }
              }
            })}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            bsStyle="primary"
            href="/about/?all=true"
          >Show All</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

