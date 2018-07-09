import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from "react-router-dom";
import Subpage from "./subpage";
import Button from 'antd/lib/button';

export default class Welcome extends Component {
 render() {
 	const stylewelcome = {
			style:{
				height: window.innerHeight*0.4,
				width: window.innerWidth*0.4,
				paddingTop: window.innerHeight*0.1,
				margin: 'auto',
				background: 'rgba(128,128,128,0.5)',
				borderRadius: '2em',
				opacity:'1',
				textAlign: 'center'
			}
		}
	const stylebutton = {
			style:{
				backgroundColor: 'grey',
				opacity:'1'
			}
		}
	const styletext = {
			style:{
				fontFamily: 'Orbitron',
				font: 'bold',
				fontSize: '2.5em',
				color: 'white'
			}
		}

  return (
   <div style={stylewelcome.style}>
   <p style={styletext.style}>Welcome to OPAL !</p>
   <br/>
   		<Button style={stylebutton.style}><Link to="/subpage">Subpage</Link></Button>
        <Route exact path="/subpage" component={Subpage} />
   </div>
  )
 }
}