import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from '../pages/About';

function mapStateToProps(state) {
  return {
    changelog: state.changelog
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
}

console.log(mapStateToProps, mapDispatchToProps, About);
export default connect(mapStateToProps, mapDispatchToProps)(About);
