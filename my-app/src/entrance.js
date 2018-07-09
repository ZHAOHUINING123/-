import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import Mappage from './App.js'

class FirstPage extends Component {
	constructor () {
    	super()
    	this.state = { 
    		IntheMap: true 
    	}
 	}

	stepInthemap(){
		this.setState(
			{
				IntheMap : !this.state.IntheMap
			}
		)
	}
	return(){
		<div>
			<Button onClick={this.stepInthemap.bind(this)}>Start</Button>
			<div>
				{this.state.IntheMap ? <FirstPage /> : <Mappage /> }
    		</div>
		</div>
	}
}