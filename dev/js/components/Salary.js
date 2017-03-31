import React, { Component } from 'react';
import inWords from './numberUtils.js';
class Salary extends Component {
  render() {
    const {
      netSalary,
    } = this.props;
    const salaryInWords = (
      <span className="capitalize">{inWords(netSalary)}</span>
    );
    return (
      <div className="salary">
        <div className="subsalary">Net Salary: PKR. {netSalary}</div>
        <div className="subsalary">In Words: PKR. {salaryInWords} Only</div>
      </div>
    );
  }
}

export default Salary;
