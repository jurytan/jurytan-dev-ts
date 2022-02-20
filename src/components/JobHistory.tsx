import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { JobHistoryItem } from './JobHistoryItem';

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
                <JobHistoryItem companyName='Google'/>
                <JobHistoryItem companyName='Doordash'/>
                <JobHistoryItem companyName='Model N'/>
                <JobHistoryItem companyName='Rutgers' last={true}/>
            </Timeline>
        </CardContent>
    </Card>
); }


