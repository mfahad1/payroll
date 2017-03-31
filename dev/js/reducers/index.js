import {combineReducers} from 'redux';
import usersReducer from './reducer-user';
import userActiveReducer from './userActive';

const allReducers = combineReducers({
	user : usersReducer,
	activeUser : userActiveReducer
})

export default allReducers;