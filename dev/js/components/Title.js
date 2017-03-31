import React, { Component } from 'react';
import logo from './logo-color.png';

class Title extends Component {
  render() {
    const {
      companyName,
      companyNtn,
    } = this.props || {};

    return (
      <div className="App-header">
        <img
          style={{ width: '211px', height: '40px' }}
          src={logo}
          className="App-logo"
          alt="VentureDive"
        />
        <h4>Company NTN: {companyNtn}</h4>
        <h4>Monthly Payslip</h4>
      </div>
    );
  }
}

export default Title;
