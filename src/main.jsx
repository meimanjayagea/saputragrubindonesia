import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import Login from "./containers/login";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
