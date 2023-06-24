import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./utilities/Constants";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }


declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface DeprecatedThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
