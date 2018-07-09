import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from './components1/homeheader';
import BGpic from './components1/bgpic';

export default class Home extends Component {
 render() {
 		const stylehome = {
			style:{
				margin: 'auto'
			}
		}
  return (
   <div style={stylehome.style}>
   		<HomeHeader />
   		<BGpic />
   </div>
  )
 }
}
