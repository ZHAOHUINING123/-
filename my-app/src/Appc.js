import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Subpage from "./subpage";
export default class Appc extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/subpage" component={Subpage} />
      </div>
    );
  }
}