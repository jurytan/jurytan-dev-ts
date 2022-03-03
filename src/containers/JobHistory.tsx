import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import { Typography } from "@mui/material";
import { JobHistoryItem } from '../components/JobHistoryItem';

import google_logo from '../images/google.png';
import grubhub_logo from '../images/grubhub.png';
import doordash_logo from '../images/doordash.png';
import rutgers_logo from '../images/rutgers.png';

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
                  <JobHistoryItem 
                    companyName='Grubhub' 
                    image={grubhub_logo}
                    website='https://grubhub.com' />
                  <JobHistoryItem 
                    companyName='Google' 
                    image={google_logo}
                    website='https://google.com' />
                  <JobHistoryItem 
                    companyName='Doordash' 
                    image={doordash_logo}
                    website='https://doordash.com' />
                  <JobHistoryItem 
                    companyName='Model N' 
                    website='https://modeln.com' />
                  <JobHistoryItem 
                    companyName='Rutgers' 
                    image={rutgers_logo}
                    website='https://rutgers.edu'
                    last={true} />
              </Timeline>
          </CardContent>
      </Card>
    </>
); }


