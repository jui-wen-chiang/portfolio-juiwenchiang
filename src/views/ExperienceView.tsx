import React from 'react'
import { experienceData } from "src/data/experienceData"

import { ViewLayout } from 'src/assets/styles/commonStyles'
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
        <ViewLayout sx={{
            display: 'flex', flexDirection: 'column',
        }}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical"
                sx={{
                    padding: '2rem',
                    // '& .MuiStepConnector-line': {
                    //     minWidth: '100px',
                    // }
                }}>
                {experienceData.map((item, index) => (
                    <Step key={item.title}>
                        <StepButton icon={StepIcon(item.class)} color="inherit" onClick={handleStep(index)}>
                            <Typography sx={{ fontSize: '2rem' }}>{item.title}</Typography>
                        </StepButton>
                        <StepContent>
                            <Card sx={{ minWidth: '100%' }}>
                                <CardContent>
                                    <Typography>{item.date}</Typography>
                                    <List sx={{
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside'
                                    }}>
                                        {item.description.map((bullet, index) => (
                                            <ListItem sx={{ display: 'list-item' }}>
                                                {bullet}
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </ViewLayout>
    );
}