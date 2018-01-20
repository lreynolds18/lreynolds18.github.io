import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Projects from '../components/Projects';
import Changelog from '../components/AboutChangelog';
import Buttons from '../components/AboutButtons';
import getChangelog from '../reducers/ChangelogReducer';
// import AboutChangelog from '../containers/AboutChangelog';


class About extends Component {
  componentDidMount() {
    // fetchChangelog(this.props.ChangelogFilter).then(Changelog =>
    //   console.log(this.props.ChangelogFilter, Changelog)
    // );
  }

  componentDidUpdate(prevProps) {
    // if (this.props.ChangelogFilter !== prevProps.ChangelogFilter) {
    //   fetchChangelog(this.props.ChangelogFilter).then(Changelog =>
    //     console.log(this.props.ChangelogFilter, Changelog)
    //   );
    // }
  }

  render() {
    console.log(this.props.match);
    const header1 = "I'm Lucas";
    const header2 = "I am a developer from Southeast Michigan.  I'm passionate about anything related to CS (compilers, assembly code <3), but I am especially passionate about data science (including machine learning, deep learning, reinforcement learning, statistics and mathematics) and robotics.  In my free time, I enjoy the outdoors, learning French and cooking.";
          
    const header3 = "Find me around the web at lreynolds18";

    return (
      <div>
        <h2>About</h2>
        <Grid>
          <Row>
            <Col xs={2} md={2} style={{ "paddingLeft": "0px", "paddingRight": "0px" }}>
              <img src={'../../public/mexico.jpg'} alt={'Sayulita, Mexico'} className={"img-responsive"} />
            </Col>

            <Col xs={6} md={6}>
              <h3>{header1}</h3>
              <p>{header2}</p>
              <p>{header3}</p>
              <Buttons />
            </Col>
          </Row>

          <br />

          <Row>
            <Col xs={10} md={10}>
              <Changelog filter={this.props.match.params.filter}/>
            </Col>
          </Row>

          <br />

          <Row>
            <Col xs={10} md={10}>
              <h4>Projects</h4>
              <Projects />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state, { match }) => ({
  ChangelogData: getChangelog(state.changelog, match.params.filter || 'all'),
});

export default withRouter(connect(mapStateToProps)(About));
