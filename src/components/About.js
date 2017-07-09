import React from 'react';
// import t ReferenceError: center is not definednteractive from 'react-interactive';
import { Link } from 'react-router-dom';
// import { Code } from '../styles/style';
// import s from '../styles/home.style';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FaGithubAlt, FaLinkedinSquare, FaEnvelope } from 'react-icons/lib/fa';

var styles = {
  center : {
    float: 'none',
    margin: '0 auto',
  }
};
    

export default function About() {
    const header = "I love data analytics, web development and IoT projects!\nI can be found around the web at lreynolds18";

    return (
        <div style={styles.center}>
            <h2>About</h2>
            <img src={'../../public/mexico.jpg'} alt={'Sayulita, Mexico'}/>
            <div>
                <p>{header}</p>
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
            </div>
        </div>
    );
}
