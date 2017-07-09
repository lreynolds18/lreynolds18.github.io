import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function About() {
  const header = "I love data analytics, web development and IoT projects!\nI can be found around the web at lreynolds18";

    return (
        <div>
            <p>About</p>
            <img src={'../../public/mexico.jpg'} alt={'Sayulita, Mexico'}/>
            <div>
                <p>{header}</p>
                <div>
                    <Interactive
                      as="a"
                      href="mailto:lreynolds18@gmail.com"
                    >Email</Interactive>
                    <Interactive
                      as="a"
                      href="https://github.com/lreynolds18"
                    >Github</Interactive>
                    <Interactive
                      as="a"
                      href="https://www.linkedin.com/in/lreynolds18/"
                    >Linkedin</Interactive>
                </div>
            </div>
        </div>
    );
}
