import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import CsvReader from '../containers/csv-reader';

const App = () => {
	return (

	<div>
		<h2>Username List:</h2>
		<UserList />
		<hr />
		<h2>Username Detail:</h2>
		<UserDetail />
		<CsvReader />
	</div>

	)
	
}

export default App;