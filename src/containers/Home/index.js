// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    isMobile: PropTypes.bool
  };

  render() {
    const { isMobile } = this.props;

    return (
      <div className="Home">
        <h1>Home Page</h1>
        <h3>Simple example use React</h3>
        <p>This example show use of one Api, that contain data about visit book</p>
        <p>However, is a base for development in React</p>
        <p>I hope that example are util for learning React</p>
      </div>
    );
  }
}

export default connect(state => ({
  isMobile: state.device.isMobile
}), null)(Home);
