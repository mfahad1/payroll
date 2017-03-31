const selectUser = (user)=>{
	console.log(user);
	return{
		type:"User Clicked",
		payload:user
	}
}

export default selectUser;