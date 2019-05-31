import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faAngleRight,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import env from "./dotenv";
// GS
import "./css/gs.bundle.css";
// Scripts: TODO: PORT TO SERVICES
//import "./plugins/animated-headline/js/main.js";

library.add(faUser, faAngleRight, faChevronRight);
console.debug(env);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
