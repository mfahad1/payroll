import React, { Component } from 'react';

class UserDetail extends Component {
  render() {
    const {
      id,
      name,
      month,
    } = this.props;

    return (
      <div className="userdetail">
        <ul>
          <li>Employee ID: {id}</li>
          <li>Employee Name: {name}</li>
          <li>Salary Month: {month}</li>
        </ul>
      </div>
    );
  }
}

export default UserDetail;
