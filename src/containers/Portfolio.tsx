import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Portfolio: FunctionComponent<{}> = () => {
  return (
    <div className="Portfolio">
      <Paper sx={{ bgcolor: 'Background.default' }}>
        <header className="App-header">
          <Typography variant="h1">jurytan</Typography>
          <Typography
            variant="h3"
            sx={{
              marginTop: "-3rem",
            }}
          >
            SOFTWARE ENGINEER
          </Typography>
          <Button variant="text">Hello Jurytan</Button>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </header>
        {/* <Typography
        className="backgroundText"
        variant="h1"
      >
        jurytan
      </Typography> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Paper>
    </div>
  );
};