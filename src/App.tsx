import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Portfolio } from "./containers/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
        <AppBar 
          position="static"
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
      <Portfolio />
    </div>
  );
}

export default App;
