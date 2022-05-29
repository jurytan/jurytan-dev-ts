import * as React from 'react';
import Container from "@mui/material/Container";
import { Header } from "./Header";
import { Main } from "./Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "./Intro";
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import handwave from '../images/hand-wave.png';

// Adding imports for fontsource
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "./Footer";

export const Portfolio = () => {

  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
      setShow((prev : boolean) => !prev);
      setTimeout(function () {
        setShow(false);
    }, 5000)
  };

  return (
    <div className="Portfolio">
      <Box ref={containerRef}>
        <Container maxWidth="md">
          <Header />
          <Intro />
          <Main handleChange={handleChange} />
          <Footer />
          <BackgroundFooter />
        </Container>
        <Box className='handwave' sx={{ width: 10 }}>
          <Slide direction="up" in={show} container={containerRef.current}>
            <img src={handwave} width={50}/>
          </Slide>
        </Box>
      </Box>
    </div>
  );
};
