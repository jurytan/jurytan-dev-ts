import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import { Typography } from "@mui/material";
import { JobHistoryItem } from '../components/JobHistoryItem';

import google_logo from '../images/google.png';
import grubhub_logo from '../images/grubhub.png';
import doordash_logo from '../images/doordash.png';

export const JobHistory = () => { 
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
    <>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Product Sans", textalign:"right"}}
        color="text.secondary"
        gutterBottom
      >
        Job History
      </Typography>
      <Card sx={{ minWidth: 275, borderRadius: 5 }}>
          <CardContent sx={{ padding: 4 }}>
              <Timeline position="alternate">
                  <JobHistoryItem companyName='Grubhub' image={grubhub_logo}/>
                  <JobHistoryItem companyName='Google' image={google_logo}/>
                  <JobHistoryItem companyName='Doordash' image={doordash_logo}/>
                  <JobHistoryItem companyName='Model N'/>
                  <JobHistoryItem companyName='Rutgers' last={true}/>
              </Timeline>
          </CardContent>
      </Card>
    </>
); }


