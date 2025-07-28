import React from 'react'
import { experienceData } from "src/data/experienceData"
import {Typography, Step, StepButton, StepContent, CardContent} from 'src/components/mui/components';
import { ColContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { StyledStepper, StepCard } from 'src/assets/styles/views/ExperienceStyle';
import { SchoolIcon, WorkIcon } from 'src/components/mui/icons';
// 

import { StyledTypography } from 'src/assets/styles/components/StyledComp';


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
            <Typography variant="h4" component='h4'>EXPERIENCE</Typography>
            <StyledStepper nonLinear activeStep={activeStep} orientation="vertical">
                {experienceData.map((item, index) => (
                    <Step key={item.title}>
                        <StepButton icon={StepIcon(item.class)} onClick={handleStep(index)}>
                            <StyledTypography variant="stepTitle">{item.title}</StyledTypography>
                        </StepButton>
                        <StepContent>
                            <StepCard>
                                <CardContent>
                                    <Typography variant="subtitle2">{item.date}</Typography>
                                    <Typography variant="subtitle2">{item.location}</Typography>
                                    {item.description?.map((bullet, index) => (
                                        <ListContainer >
                                            <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
                                        </ListContainer>
                                    ))}
                                </CardContent>
                            </StepCard>
                        </StepContent>
                    </Step>
                ))}
            </StyledStepper>
        </ColContainer>
    );
}