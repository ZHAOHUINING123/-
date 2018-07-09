import React from 'react';
import HomeLogo from './homelogo';

export default class HomeHeader extends React.Component{
	render(){
		const styleHeader = {
			header:{
				backgroundColor: '#0E92DD',
				height: window.innerHeight/4,
				color:'blue',
			}	
		};
		return(
        	<header style={styleHeader.header}>
        		<HomeLogo/>
        	</header>         
		)
	}
}