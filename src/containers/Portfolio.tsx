import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import { BackgroundFooter } from "../components/BackgroundFooter";
import { FadingSection } from "../components/FadingSection";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Main } from "./Main";

import jurytan_pic from '../images/jurytan_pic.jpg';

// Adding imports for fontsource
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Container maxWidth="md">
            <FadingSection height={400} fadeOutStart={25} fadeOutEnd={175}>
              <Grid 
                container 
                spacing={8} 
                alignContent="center" 
                direction="row"
                justifyContent="space-between">
                <Grid xs={12} md={6}>
                  <Intro />
                </Grid>
                <Grid xs={12} md={6}>
                  <div className="feathered-img">
                    <img src={jurytan_pic}/>
                  </div>
                </Grid>
              </Grid>
            </FadingSection>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Main />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Footer />
              </Grid>
            </Grid>
            <BackgroundFooter />
      </Container>
    </div>
  );
};
