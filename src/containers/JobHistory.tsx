import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import { Typography } from "@mui/material";
import { JobHistoryItem } from '../components/JobHistoryItem';

import doordash_logo from '../images/doordash.png';
import google_logo from '../images/google.png';
import grubhub_logo from '../images/grubhub.png';
import modeln_logo from '../images/modeln.jpg';
import rutgers_logo from '../images/rutgers.png';

export const JobHistory = () => { 
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    const jobs = [
      {
        companyName: 'Grubhub',
        image: grubhub_logo,
        website: 'https://grubhub.com',
        title: '',
        description: '',
        last: false
      },
      {
        companyName: 'Google',
        image: google_logo,
        website: 'https://google.com',
        title: '',
        description: '',
        last: false
      },
      {
        companyName: 'DoorDash',
        image: doordash_logo,
        website: 'https://doordash.com',
        title: '',
        description: '',
        last: false
      },
      {
        companyName: 'Model N',
        image: modeln_logo,
        website: 'https://modeln.com',
        title: '',
        description: '',
        last: false
      },
      {
        companyName: 'Rutgers',
        image: rutgers_logo,
        website: 'https://rutgers.edu',
        title: '',
        description: '',
        last: true
      }
  ];

    return (
    <>
      <Typography
        variant="h3"
        justifyContent={"center"}
        sx={{ fontFamily: "Product Sans", textalign:"center" }}
        color="text.secondary"
        gutterBottom
      >
        Job History
      </Typography>
      <Card sx={{ minWidth: 275, borderRadius: 5 }}>
          <CardContent sx={{ padding: 4 }}>
              <Timeline position="alternate">
                  {jobs.map((job) => {
                    return (
                      <JobHistoryItem
                        companyName={job.companyName}
                        image={job.image}
                        website={job.website}
                        title={job.title}
                        description={job.description}
                        last={job.last}
                      />
                    );
                  })}
              </Timeline>
          </CardContent>
      </Card>
    </>
); }


