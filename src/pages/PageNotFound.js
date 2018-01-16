import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Code } from '../styles/style';
import s from '../styles/pageNotFound.style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <p style={s.p}>
      Page not found - could not find the path <Code>{location.pathname}</Code>.
    </p>
  );
}

PageNotFound.propTypes = propTypes;
