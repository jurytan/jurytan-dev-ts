import Container from "@mui/material/Container";
import { Main } from "./Main";
import { BackgroundFooter } from "../components/BackgroundFooter";
import { Intro } from "./Intro";

import Grid from '@mui/material/Grid';

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
              <Grid item xs={12} md={6}>
                <Intro />
              </Grid>
            </Grid>
            <Main />
            <Footer />
            <BackgroundFooter />
      </Container>
    </div>
  );
};
