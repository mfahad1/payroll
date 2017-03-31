import React from 'react';
import InfoView from './info';

const PdfHtml = (props) => {
	console.log(props.location.query['Company name']);
	return (
		<div>
	    <h3>Welcome to the About Page</h3>

	
	   	<InfoView val={props.location} />
	 

 		</div>

	)
	
}


export default PdfHtml;