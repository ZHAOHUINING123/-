import React, { Component } from "react";
import Root from "./App";
import Root2 from "./App2";
import Root3 from './defaultlayer';
import { Route, Link } from "react-router-dom";
import backward from './img/icons/backward.svg';
import MobilityPanel from './mobilitypanel';
import DensityPanel from './densitypanel';


export default class Alselection extends Component {

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
    <Link to="/subpage/App2">Mobility</Link>
    <Link to="/subpage/App">Population density</Link>
    <Route exact path="/subpage/App2" component={MobilityPanel} />
    <Route exact path="/subpage/App" component={DensityPanel } />
	</div>
  )
 }
}