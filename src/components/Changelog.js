import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

export default class Changelog extends Component {
  render() {
    const data = [{date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {date: "12/2/18", text: "Connected to facebook", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                  {url: "www.google.com", date: "11/2/13", text: "Connected to google", importance: "low"},
                 ];

    const all = true;

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
            {data.reverse().map(function(item, idx) {
              if (idx < 10 || all) {
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
