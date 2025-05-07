import React, { useState, useCallback, useRef, useEffect } from 'react'
import { projectData } from "src/data/projectsData"

import { ViewLayout } from 'src/assets/styles/commonStyles'
import { Container, Box, Typography, Card, CardContent, CardMedia, CardActionArea, CardActions, Button, Chip, Avatar } from 'src/components/mui/components';

const BlackContainer: React.CSSProperties = {
    minWidth: '100px',
    margin: '3rem auto',
    // height: '260px',
    // backgroundColor: 'red',
    'display': 'flex',
    justifyContent: 'center',

};

const box1: React.CSSProperties = {
    minWidth: '50%',
    // height: '260px',
    // backgroundColor: 'blue',
    'display': 'flex',
    // marginLeft: '-20px',
    // padding:'2rem',
    'flexDirection': 'column',

};

const box2: React.CSSProperties = {
    minWidth: '50%',
    height: '350px',
    // backgroundColor: 'green',
    'display': 'flex',
    marginLeft: '-5rem',
    opacity: 0.6,
};

const contant: React.CSSProperties = {
    // minWidth: '50%',
    minHeight: '40%',
    backgroundColor: 'red',
    'display': 'flex',
    // marginLeft: '-20px',
};


const iconsList: React.CSSProperties = {
    // minWidth: '50%',
    // minHeight: '40%',
    // backgroundColor: 'red',
    'display': 'flex',
    padding: '0.5rem 0'
    // marginLeft: '-20px',
};



const body: React.CSSProperties = {
    boxShadow: 'rgba(2, 12, 27, 0.7) 0px 10px 30px -15px',
    transition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    position: 'relative',
    zIndex: '2',
    padding: '1rem',
    margin: '0.4rem auto',
    backgroundColor: 'rgb(23, 42, 69)',
    color: 'rgb(168, 178, 209)',
    'borderRadius': '1rem',
};

export default function ProjectsView() {

    return (
        <ViewLayout sx={{ flexDirection: 'column' }}>
            {projectData.map((item, index) => {
                return (
                    <Container sx={BlackContainer}>
                        <Box sx={box1}>
                            <Card>
                                <CardContent sx={{ padding: '8px 8px 8px 8px' }}>
                                    <Typography sx={{ fontSize: '0.2rem' }} >
                                        {item.type}
                                    </Typography>
                                    <Typography variant="h4" sx={{ padding: '0.4rem 0' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" sx={body}>
                                        {item.summary}
                                    </Typography>
                                    <Typography sx={iconsList}>
                                        {item.icons.map((icon, index) => {
                                            return (
                                                <Chip
                                                    // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                                    label={icon.lable}
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{ margin: '0 0.3rem' }}
                                                />
                                            )
                                        })}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ margin: 0, padding: '0 8px' }}>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                        <Box sx={box2}>
                            <Box
                                component="img"
                                sx={{ padding: '1rem', width: '100%' }}
                                alt="The house from the offer."
                                src="/testimg.jpg"
                            />
                        </Box>
                    </Container>
                )
            })}
        </ViewLayout >
    )
}
