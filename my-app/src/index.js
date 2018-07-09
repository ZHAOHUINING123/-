import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Appc from "./Appc";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
ReactDOM.render(
 <BrowserRouter>
   <Appc />
 </BrowserRouter>,
 document.getElementById("root")
);
registerServiceWorker();