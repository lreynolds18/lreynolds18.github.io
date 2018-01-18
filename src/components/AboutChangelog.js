import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class Changelog extends Component {
  render() {
    const ChangelogData = [];
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

