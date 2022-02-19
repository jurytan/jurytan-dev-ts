import Typography from "@mui/material/Typography";

export const Header = () => {
    return (
        <header className="App-header">
          <Typography
            variant="h1"
            sx={{ 
              fontFamily: "Product Sans",
              fontSize: "5rem",
              pb: "6rem",
             }}
          >
            jurytan
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "1.2rem",
              marginTop: "-4rem",
              pb: "2rem",
            }}
          >
            SOFTWARE ENGINEER
          </Typography>
        </header>
    );
}