import React from 'react';
export default class BorderLine extends React.Component{
	render(){
		const styleBorder = {
			border:{
				backgroundColor: '#FF9800',
				height: window.innerHeight/100,
				color:'blue',
			}	
		};
		return(
			<header style={styleBorder.border} >
        	</header>  
		)
	}
}