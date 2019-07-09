import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import App from './containers/App/App';

const rootElement = document.getElementById("root");
render(<App />, rootElement);
