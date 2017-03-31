import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{

	render(){

		if(!this.props.activeUser)
			return(<h1>Select a user</h1>)

		return(
			<div>
				<p>{this.props.activeUser.first}</p>
				<img height="350" width="550" src={this.props.activeUser.thumbnail} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		activeUser : state.activeUser
	}
}

export default connect(mapStateToProps)(UserDetail);