import Button from "@mui/material/Button";
import { JobHistory } from "./JobHistory";
import { Skills } from "./Skills";

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
      <br />
      <JobHistory />
      <br />
      <Skills />
      <br />
    </div>
  );
};
