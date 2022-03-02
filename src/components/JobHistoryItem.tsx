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
}

export const JobHistoryItem = (props : JobHistoryItemProps) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={{ width: 20, height: 20, aspectRatio: 1 }}>
                    {props.image && 
                        <img src={props.image} height={20} />}
                </TimelineDot>
                {!props.last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ paddingTop: 2 }}>
                {props.companyName}
            </TimelineContent>
        </TimelineItem>
    );
}

JobHistoryItem.propType = {
    companyName: PropTypes.string.isRequired,
    last: PropTypes.bool
};