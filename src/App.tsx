import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Portfolio } from "./containers/Portfolio";
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import "./App.css";

function ElevationScroll() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(<FloatingAppBar />, {
    elevation: trigger ? 4 : 0,
  });
}

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ElevationScroll />
      <Portfolio />
    </div>
  );
}

export const FloatingAppBar = () => {
  return (
    <AppBar
          color="transparent"
          elevation={0}
          sx={{
            color: "#FFF"
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
  );
}

export default App;
