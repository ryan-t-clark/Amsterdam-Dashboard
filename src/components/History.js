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
                            2006
                        </Typography>
                        <Typography>Amsterdam Innovation Motor (AIM) established. AIM was founded
                           as an effort to drive and strengthen a knowledge-based economy in the
                           Amsterdam Metropolitan Area. AIM's goal is to bring together academic,
                           commercial, and public sector partners on key areas for growth.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2008
                        </Typography>
                        <Typography>Climate Office and the ICT Cluster of Amsterdam Innovation Motor established</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2009
                        </Typography>
                        <Typography>Amsterdam launches strategy to become a smart city (Amsterdam Smart City)</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2012
                        </Typography>
                        <Typography>The Amsterdam Innovation Motor merged into the Amsterdam Smart City (ASC) public-private network</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2013
                        </Typography>
                        <Typography>AIM and KennisKring Amsterdam (Amsterdam Knowledge Network Foundation) merged to become the Amsterdam Economic Board</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2015
                        </Typography>
                        <Typography>The Crowd Monitoring System Amsterdam (CSMA), which eventually becomes the Public Eye Project, is used for the first time.</Typography>
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
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2021
                        </Typography>
                        <Typography>'Code the streets' initiative started to develop more socially responsible driving routes</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            2022
                        </Typography>
                        <Typography>Amsterdam, in an attempt to build their sensor and data network, requires everyone register their sensors publicly</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            Current Day
                        </Typography>
                        <Typography>Today, Amsterdam maintains its efforts, continuing to launch smart city initiatives</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot color="success"/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            Future - 2023
                        </Typography>
                        <Typography>Amsterdam has many plans to continue smart city projects into the future. One such project aims to reduce speeds limits from 50 to 30 km/h and monitor the impact of that change</Typography>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
                

        </div>
    )
}

export default History;