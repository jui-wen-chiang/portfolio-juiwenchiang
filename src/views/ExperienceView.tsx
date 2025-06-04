import React from 'react'
import { experienceData } from "src/data/experienceData"

import { ColContainer } from 'src/assets/styles/commonStyles'
import { StyledStepper, StepCard } from 'src/assets/styles/views/ExperienceStyle'

import {
    Typography, Stepper, Step, StepButton, StepContent, Card, CardContent, List, ListItem
} from 'src/components/mui/components';
import { SchoolIcon, WorkIcon } from 'src/components/mui/icons';

export default function ExperienceView() {
    const [activeStep, setActiveStep] = React.useState(1); // initial expansion step 2
    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const StepIcon = (category: string): React.ReactElement | null => {
        const icons: { [key: string]: React.ReactElement } = {
            education: <SchoolIcon />,
            profession: <WorkIcon />,
        };

        return icons[category] || null;
    };

    return (
        <ColContainer>
            <Typography variant="caption" component='h2'>EXPERIENCE</Typography>
            <StyledStepper nonLinear activeStep={activeStep} orientation="vertical">
                {experienceData.map((item, index) => (
                    <Step key={item.title}>
                        <StepButton icon={StepIcon(item.class)} onClick={handleStep(index)}>
                            <Typography variant="h2">{item.title}</Typography>
                        </StepButton>
                        <StepContent>
                            <StepCard>
                                <CardContent>
                                    <Typography variant="subtitle2" >{item.date}</Typography>
                                    <List sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside'
                                    }}>
                                        {item.description.map((bullet, index) => (
                                            <ListItem sx={{ display: 'list-item', color: '#f1f1e6' }}>
                                                {bullet}
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </StepCard>
                        </StepContent>
                    </Step>
                ))}
            </StyledStepper>
        </ColContainer>
    );
}