import React from 'react';
import '../App.css';

import { Typography } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const History = () => {
    return (
        <div className="container">
            <h2 className="center">Amsterdam's History as a Smart City</h2>

            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2009
                        </Typography>
                        <Typography>Amsterdam launches strategy to become a smart city</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            20xx
                        </Typography>
                        <Typography>TODO: add more significant achievements</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2016
                        </Typography>
                        <Typography>Amsterdam wins Europe's Capital of Innovation Award</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="success"/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2022
                        </Typography>
                        <Typography>Today, Amsterdam maintains its efforts, continuing to launch smart city initiatives</Typography>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>

        </div>
    )
}

export default History;