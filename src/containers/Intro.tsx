import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { WavePopover } from "../components/WavePopover";
import { FadingSection } from "../components/FadingSection";
import { Fade } from "react-awesome-reveal";

export const Intro = () => {
  return (
    // <div className="intro">
    <div className="App-header">
        <FadingSection fadeStart={50} fadeEnd={300}>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-end"
          >
            <Grid xs={12}>
              <Typography
                variant="h2"
                sx={{ fontFamily: "Product Sans", textAlign: "right" }}
                color="text.secondary"
                gutterBottom
              >
                <Fade direction="down" cascade damping={0.5} triggerOnce>
                  <p style={{ margin: 0, fontSize: "30px", position: "relative", top: "20px" }}>
                    hi, i'm
                  </p>
                  <div>jurytan</div>
                </Fade>
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Fade delay={1.5e3} cascade damping={0.1} triggerOnce>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Product Sans", textAlign: "right" }}
                  color="text.secondary"
                  gutterBottom
                >
                  I'm a software engineer, streamer, and a father of two. Have a
                  look around!
                </Typography>
              </Fade>
            </Grid>
            <Grid xs={6} md={2}>
              <Fade delay={2.5e3} direction="down" triggerOnce>
                <WavePopover />
              </Fade>
            </Grid>
          </Grid>
        </FadingSection>
      <br />
    </div>
  );
};
