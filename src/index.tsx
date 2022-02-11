import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@mui/material/styles";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Portfolio } from './containers/Portfolio';

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#24aee9",
    },
    secondary: {
      main: "#e539ff",
    },
    text: {
      primary: "#fff",
    },
    error: {
      main: "#fff",
    },
    background: {
      paper: "#37474F",
      default: "#212121",
    },
    type: "dark",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
