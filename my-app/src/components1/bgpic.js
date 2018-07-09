import React, { Component } from 'react';
import Bpic from '../img/sikai6.jpg';
import Welcome from '../Welcome.js'

export default class BGpic extends Component{
	render(){
		const styleLogo = {
			size:{
				height: window.innerHeight*0.75,
				backgroundImage: `url(${Bpic})`,
				textAlign: 'center',
				paddingTop:window.innerHeight*0.15
			}
		}
		return(
			<div style={styleLogo.size}>
				<Welcome />
			</div>	
		)
	}
}