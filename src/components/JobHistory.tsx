import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import { JobHistoryItem } from './JobHistoryItem';

import google_logo from '../images/google.png';

export const JobHistory = () => { 
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
    <Card sx={{ minWidth: 275, borderRadius: 5 }}>
        <CardContent sx={{ padding: 4 }}>
            <Timeline position="alternate">
                <JobHistoryItem companyName='Grubhub'/>
                <JobHistoryItem companyName='Google' image={google_logo}/>
                <JobHistoryItem companyName='Doordash'/>
                <JobHistoryItem companyName='Model N'/>
                <JobHistoryItem companyName='Rutgers' last={true}/>
            </Timeline>
        </CardContent>
    </Card>
); }


