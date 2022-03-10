import Avatar from "@mui/material/Avatar";
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

interface JobHistoryItemProps {
    companyName: string,
    last?: boolean,
    image?: string,
    website?: string,
}

export const JobHistoryItem = (props : JobHistoryItemProps) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <Link href={props.website}>
                    <TimelineDot>
                        {props.image && 
                            <Avatar src={props.image} sx={{ width: 24, height: 24 }}/>}
                    </TimelineDot>
                </Link>
                {!props.last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: 2.5 }}>
                <Link 
                    href={props.website}
                    underline='none'
                    color='inherit'
                >
                    {props.companyName}
                </Link>
            </TimelineContent>
        </TimelineItem>
    );
}

JobHistoryItem.propType = {
    companyName: PropTypes.string.isRequired,
    last: PropTypes.bool
};