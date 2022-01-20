import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import reportWebVitals from "./reportWebVitals";
import {App} from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
