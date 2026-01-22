import React from 'react'
import { experienceData } from "src/data/experienceData"
import { Typography, Step, StepButton, StepContent, CardContent } from 'src/components/mui/components';
import { SchoolIcon, WorkIcon, AutoStoriesIcon } from 'src/components/mui/icons';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ColContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { StyledStepper, StepCard } from 'src/assets/styles/views/ExperienceStyle';
import { ColorScheme } from 'src/theme/UIstandard';

export default function ExperienceView() {
    const [openSteps, setOpenSteps] = React.useState<number[]>(() =>
        // default open items
        experienceData.reduce<number[]>((acc, item, index) => {
            if (item.class === 'career') acc.push(index);
            return acc;
        }, [])
    );

    const toggleStep = (step: number) => () => {
        setOpenSteps(prev =>
            prev.includes(step)
                ? prev.filter(i => i !== step)   // close
                : [...prev, step]                // open
        );
    };

    const IconColor = (step: number) => () => {
        return openSteps.includes(step) ? ColorScheme.primary.main : 'black';
    };

    const StepIcon = (category: string): React.ReactElement | null => {
        const icons: { [key: string]: React.ReactElement } = {
            education: <SchoolIcon />,
            career: <WorkIcon />,
            certifications: <AutoStoriesIcon />,
        };

        return icons[category] || null;
    };

    return (
        <ViewBox data-aos="zoom-in-up">
            <ColContainer sx={{ alignItems: 'flex-start', padding: '0, 2rem' }}>
                <Typography variant="h3" component='h3' >Experience</Typography>
                <StyledStepper nonLinear orientation="vertical" activeStep={-1}>
                    {experienceData.map((item, index) => {
                        const isOpen = openSteps.includes(index);

                        return (
                            <Step key={item.title} expanded={isOpen}>
                                <StepButton icon={StepIcon(item.class)} onClick={toggleStep(index)} sx={{ color: IconColor(index) }}>
                                    <Typography sx={{ color: IconColor(index) }}> {item.title}</Typography>
                                </StepButton>
                                <StepContent>
                                    <StepCard>
                                        <CardContent>
                                            <Typography variant="subtitle2">{item.date}</Typography>
                                            <Typography variant="subtitle2">{item.location}</Typography>
                                            {item.description?.map((bullet, i) => (
                                                <ListContainer key={i}>
                                                    <ListContent sx={{ padding: 0 }}>{bullet}</ListContent>
                                                </ListContainer>
                                            ))}
                                        </CardContent>
                                    </StepCard>
                                </StepContent>
                            </Step>
                        );
                    })}
                </StyledStepper>
            </ColContainer>
        </ViewBox>
    );
}