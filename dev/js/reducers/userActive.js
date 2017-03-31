const userActiveReducer = (state = null,action) =>{
	console.log(action);
		switch(action.type) {
			case "User Clicked":
				return action.payload;
				break;
			
		}

		return state;
}

export default userActiveReducer;