import React, { Component } from "react";
import Root from "./App";
import Root2 from "./App2";
import Root3 from './defaultlayer';
import { Route, Link } from "react-router-dom";
import backward from './img/icons/backward.svg';


export default class DensityPanel extends Component {

 render() {

	    const styleicon = {
	    	backward:{
        		width: window.innerWidth*0.02,
        		cssFloat: 'left',
        		paddingLeft: window.innerWidth*0.003
	        }
	    }
  return (
  	<div>
    <Link to="/subpage"><img src={backward} style={styleicon.backward}/></Link>
	</div>
  )
 }
}