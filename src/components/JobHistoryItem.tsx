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
                <TimelineDot>
                    {props.image && <img src={props.image} width={15} />}
                </TimelineDot>
                {!props.last && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
                {props.companyName}
            </TimelineContent>
        </TimelineItem>
    );
}

JobHistoryItem.propType = {
    companyName: PropTypes.string.isRequired,
    last: PropTypes.bool
};