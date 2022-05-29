import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import { JobHistory } from "./JobHistory";
import { Skills } from "./Skills";

interface MainProps {
  handleChange: Function,
}

export const Main = (props : MainProps) => {
  function handleChange() {
    props.handleChange();
  }

  return (
    <div className="main">
        <Button
          variant="text"
          sx={{
            mb: "2rem",
          }}
          onClick={handleChange}
        >
          WAVE
        </Button>
        <br />
        <JobHistory />
        <br />
        <Skills />
        <br />
    </div>
  );
};

Main.propType = {
  handleChange: PropTypes.func.isRequired,
};
