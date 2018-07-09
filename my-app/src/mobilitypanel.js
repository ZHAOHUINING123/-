import React, { Component } from "react";
import backward from './img/icons/backward.svg';
import DensityPanel from './densitypanel';
import { Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MobilityPanelboard from './panel/MobilityPanelboard';

export default class MobilityPanel extends Component {

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
    <BrowserRouter>
      <MobilityPanelboard />
    </BrowserRouter>
	</div>
  )
 }
}