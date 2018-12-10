import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {};

const Component1 = () => (
  <div>
    Component1
    <div>
      <Link to="/">
        <span>Root</span>
      </Link>
    </div>
  </div>
);

Component1.propTypes = propTypes;

export default Component1;
