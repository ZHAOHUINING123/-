import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Mpfilter from './mpfilter';
import { Route, Link } from "react-router-dom";

export default class MobilityPanelboard extends Component {
 render() {
  return (
  	<div>
  	<Link to="/subpage/App/filter">Subpage</Link>
  	<Route exact path="/subpage/App/filter" component={Mpfilter} />
  	</div>
  )
 }
}