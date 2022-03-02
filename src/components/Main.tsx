import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { JobHistory } from "./JobHistory";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Main = () => {
  return (
    <div className="main">
      <Button
        variant="text"
        sx={{
          mb: "2rem",
        }}
      >
        Hello Jurytan
      </Button>
      <Card sx={{ minWidth: 275, borderRadius: 5 }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <Button size="small" sx={{ pb: 1, pl: 2 }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br />
      <Typography
        variant="h3"
        sx={{ fontFamily: "Product Sans", textalign:"right"}}
        color="text.secondary"
        gutterBottom
      >
        Job History
      </Typography>
      <JobHistory />
    </div>
  );
};
