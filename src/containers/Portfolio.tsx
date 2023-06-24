import Container from "@mui/material/Container";
import { Main } from "./Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "./Intro";

import Grid from '@mui/material/Unstable_Grid2';

// Adding imports for fontsource
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "./Footer";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <Intro />
              </Grid>
            </Grid>
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
