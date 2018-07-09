import React, { Component } from "react";
import Root from "./App";
import Root2 from "./App2";
import Root3 from './defaultlayer';
import { Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import backward from './img/icons/backward.svg';
import MobilityPanel from './mobilitypanel';
import DensityPanel from './densitypanel';
import Alselection from './alselection';

export default class Panel extends Component {

 render() {
 	const stylepanel = {
			style:{
				height: window.innerHeight*0.8,
				width: window.innerWidth*0.2,
				margin: 'auto',
				marginLeft: window.innerWidth*0.003,
				background: 'rgba(128,128,128,0.5)',
				borderRadius: '0.5em',
				opacity:'1',
				textAlign: 'center',
				cssFloat: 'left',
				display: 'inline-block',
				zIndex:'99',
				position: 'relative'
			}
		}

		const stylemap = {
      		style:{
        		cssFloat: 'right',
       			zIndex:'-1',
       			position: 'relative'
	        }
	    }

	    const styleicon = {
	    	backward:{
        		width: window.innerWidth*0.02,
        		cssFloat: 'left',
        		paddingLeft: window.innerWidth*0.003
	        }
	    }
  return (
  	<div>
    <div style={stylepanel.style}>
    <Route exact path="/subpage" component={Alselection} />
          <Route exact path="/subpage/App" component={DensityPanel} />
          <Route exact path="/subpage/App2" component={MobilityPanel} />
    </div>
    <div style={stylemap.style}>
          <Route exact path="/subpage" component={Root3} />
          <Route exact path="/subpage/App" component={Root2} />
          <Route exact path="/subpage/App2" component={Root} />
	</div>
	</div>
  )
 }
}