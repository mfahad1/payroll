// import React from 'react';
// import getQueryParams from './paramUtils'

// const InfoView = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 	   <h1>{props.nam}</h1>
// 	   <p>{props.val}</p>
//  		</div>

// 	)
	
// }


// export default InfoView;


import React, { Component } from 'react';
import getQueryParams from './paramUtils'

import Title from './Title.js';
import UserDetail from './UserDetail.js';
import SalaryDetail from './SalaryDetail.js';
import Salary from './Salary.js';
import './App.scss';

class InfoView extends Component {
  render() {
    const record = this.props.val.query;
    console.log("record:::",record);
    const companyName = 'VentureDive';
    const companyNtn = '190871-12';
    const user = {
      id: +record['Employee ID'],
      name: record['Employee name'] || '-',
    };
    const salaryMonth = record['Month'] || '-';
    const grossSalary = +record['Gross Salary'] || 0;
    const providentFund = +record['PF'] || 0;
    const tax = +record['Tax'] || 0;
    const loan = +record[''] || 0;
    const netSalary = grossSalary -
      providentFund -
      grossSalary / 100 * tax -
      loan;
    return (
      <div className="App">
        <Title companyName={companyName} companyNtn={companyNtn} />
        <div className="App-intro">
          <UserDetail id={user.id} name={user.name} month={salaryMonth} />

          <SalaryDetail
            grossSalary={grossSalary}
            providentFund={providentFund}
            tax={tax}
            loan={loan}
          />
        </div>

        <Salary netSalary={netSalary} />
      </div>
    );
  }
}

export default InfoView;