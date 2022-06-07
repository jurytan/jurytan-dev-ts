import * as React from 'react';
import { JobHistory } from "./JobHistory";
import { Skills } from "./Skills";

export const Main = () => {
  return (
    <div className="main">
      <JobHistory />
      <br />
      <Skills />
      <br />
    </div>
  );
};
