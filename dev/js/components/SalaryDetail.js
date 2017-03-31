import React, { Component } from 'react';

class SalaryDetail extends Component {
  render() {
    const {
      grossSalary,
      providentFund,
      tax,
      loan,
    } = this.props;

    return (
      <div className="salarydetail">
        <ul>
          <li>Gross Salary: PKR. {grossSalary}</li>
          <li>Provident Fund: PKR. {providentFund}</li>
          <li>Tax: {tax}%</li>
          <li>Advance/Loan: PKR. {loan}</li>
        </ul>
      </div>
    );
  }
}

export default SalaryDetail;
