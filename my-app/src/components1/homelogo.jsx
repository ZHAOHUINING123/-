import React,{Component} from 'react';
import logopic from '../img/logo.jpg';

export default class HomeLogo extends Component{
	render(){
		const styleLogo = {
			size:{
				height: window.innerHeight/4,
				paddingLeft: window.innerWidth * 0.35
			}
		}
		return(
			<img src={logopic} style={styleLogo.size}  />	
		)
	}
}