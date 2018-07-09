import React from 'react';
import Logo from './logo';


export default class ComponentHeader extends React.Component{
	render(){
		const styleHeader = {
			header:{
				backgroundColor: '#0E92DD',
				height: window.innerHeight/5,
				color:'blue',
			}	
		};
		return(
        	<header style={styleHeader.header}>
        		<Logo/>
        	</header>         
		)
	}
}