import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import selectUser from '../actions/userAction';

class UserList extends Component {

	createListItem(){
		return this.props.users.map((user)=>{
			return (
				<li key={user.id} onClick = {this.props.selectUser.bind(this,user)}>{user.first}
					
				</li>
			)
		})
	}

	render(){
		return (
			<ul>
				{this.createListItem()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	return {
		users : state.user
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);
