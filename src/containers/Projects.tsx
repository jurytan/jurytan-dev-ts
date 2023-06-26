import * as React from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Project } from '../components/Project';

import apigee_logo from '../images/apigee-logo.png';
import google_logo from '../images/google.png';
import grubhub_logo from '../images/grubhub.png';
import twitch_logo from '../images/twitch.png';
import nguyeningcode_logo from '../images/nguyeningCode-logo.png';
import katheryne_picture from '../images/katheryne.png';
import project_baseline_logo from '../images/project-baseline-logo.png';
import sto_upcoming_view from '../images/sto-upcoming-view.png';

export const Projects = () => {

    const projects = [
        {
            title: 'STO Upcoming View',
            image: sto_upcoming_view,
            companyName: 'Grubhub',
            companyLogo: grubhub_logo
        },
        {
            title: 'STO Self Edit/Cancel',
            image: sto_upcoming_view,
            companyName: 'Grubhub',
            companyLogo: grubhub_logo
        },
        {
            title: 'Apigee Integrations',
            image: apigee_logo,
            companyName: 'Google',
            companyLogo: google_logo
        },
        {
            title: 'Project Baseline',
            image: project_baseline_logo,
            companyName: 'Google',
            companyLogo: google_logo
        },
        {
            title: 'Katheryne Bot',
            image: katheryne_picture,
            companyName: 'NguyeningCode',
            companyLogo: nguyeningcode_logo
        }
    ];

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography
                variant="h3"
                sx={{ fontFamily: "Product Sans", textalign:"center" }}
                color="text.secondary"
                gutterBottom
            >
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => {
                    const lastOddCard = index === projects.length - 1 && projects.length % 2 === 1;
                    return (<Grid key={index} xs={12} md={6} mdOffset={lastOddCard ? 3 : 0}>
                        <Project title={project.title} image={project.image} companyName={project.companyName} companyLogo={project.companyLogo}/>
                    </Grid>)}
                )}
            </Grid>
        </Container>
    );
}
