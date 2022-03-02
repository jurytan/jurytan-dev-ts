import { Typography } from "@mui/material";

export const Intro = () => {
  return (
    <div className="intro">
      <Typography
        variant="h2"
        sx={{ fontFamily: "Product Sans" }}
        color="text.secondary"
        gutterBottom
      >
        Hi!
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Product Sans" }}
        color="text.secondary"
        gutterBottom
        >
        I'm Jurytan and I'm a software engineer! I hope you enjoy browsing my
        portfolio!
      </Typography>
      <br/>
    </div>
  );
};
