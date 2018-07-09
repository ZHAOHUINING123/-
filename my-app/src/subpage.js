import React, { Component } from "react";
import Root from "./App";
import Root2 from "./App2";

import Panel from './Panel';
import { BrowserRouter } from "react-router-dom";
import ComponentHeader from './components1/Componentheader';
import BorderLine from './components1/borderline';
export default class Subpage extends Component {
 render() {
  return (
   <div className="page">
   	<ComponentHeader />
    <BorderLine />
 	<BrowserRouter>
    	<Panel />
 	</BrowserRouter>
   </div>
  )
 }
}