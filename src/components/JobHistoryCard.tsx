import * as React from 'react';
import { 
    Avatar,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardHeader,
    CardMedia,
    Link,
    Typography } from "@mui/material";
import PropTypes from 'prop-types';

interface JobHistoryCardProps {
    companyName: string,
    last?: boolean,
    image?: string,
    website?: string,
}

export const JobHistoryCard = (props : JobHistoryCardProps) => {
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
            <CardHeader
                title={props.companyName}
                />
            <CardContent sx={{ padding: 4 }}>
                
            </CardContent>
        </Card>
    </>);
}


JobHistoryCard.propType = {
    companyName: PropTypes.string.isRequired,
    last: PropTypes.bool
};