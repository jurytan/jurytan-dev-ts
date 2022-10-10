import * as React from 'react';
import { JobHistory } from "./JobHistory";
import { JobHistoryCard } from "../components/JobHistoryCard";
import { Skills } from "./Skills";

import grubhub_logo from '../images/grubhub.png';

export const Main = () => {
  return (
    <div className="main">
      <JobHistoryCard companyName='Grubhub' 
                    image={grubhub_logo}
                    website='https://grubhub.com' />
      <br />
      <Skills />
      <br />
    </div>
  );
};
