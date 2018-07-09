import React,{Component} from 'react';
import logopic from '../img/logo.jpg';

export default class Logo extends Component{
	render(){
		const styleLogo = {
			size:{
				height: window.innerHeight/5,
			}
		}
		return(

			<img src={logopic} style={styleLogo.size}  />	
		)
	}
}