import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { ViewLayout } from 'src/assets/styles/commonStyles'
import { Container, Box, Button, Typography, IconButton } from 'src/components/mui/components';
import ReactEcharts from "echarts-for-react";
import { AssignmentIndSharpIcon, GitHubIcon, LinkedInIcon, EmailRoundedIcon } from 'src/components/mui/icons';



export default function FooterView() {
    return (
        <ViewLayout sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ display: 'flex', padding:'0.5rem' }}>                
                <IconButton aria-label="go to my Linkedin" color="primary" sx={{ padding: '1rem' }}> <LinkedInIcon /></IconButton>
                <IconButton aria-label="get in touch" color="primary" sx={{ padding: '1rem' }}> <EmailRoundedIcon /></IconButton>
                <IconButton aria-label="go to my Github" color="primary" sx={{ padding: '1rem' }}> <GitHubIcon /></IconButton>
                <IconButton aria-label="get my resume" color="primary" sx={{ padding: '1rem' }}> <AssignmentIndSharpIcon /></IconButton>
            </Box>
            <Typography>Copyright@Jui-Wen Chiang</Typography>
        </ViewLayout>
    )
}