import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { WavePopover } from "../components/WavePopover";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

export const Intro = () => {

  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopover(true);
    }, 2500);
    setShowPopover(false);
  }, []);

  return (
    <div className="App-header">
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
              <Grid direction="row" alignItems="flex-end" xs={1.5} md={2}>
                  <WavePopover className={showPopover ? "wave-popover show" : "wave-popover"} />
              </Grid>
          </Grid>
      <br />
    </div>
  );
};
