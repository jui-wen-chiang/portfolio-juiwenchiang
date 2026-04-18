import React from 'react'
import { experienceData } from "src/data/experienceData"
import { Typography, Step, StepButton, StepContent, CardContent } from 'src/components/mui/components';
import { SchoolIcon, WorkIcon, AutoStoriesIcon } from 'src/components/mui/icons';
import { ViewBox } from 'src/assets/styles/layoutStyles';
import { ListContainer, ListContent } from 'src/assets/styles/commonStyles';
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
        <ViewBox component="section" aria-label="Experience" data-aos="zoom-in">
            <Typography variant="h2" sx={{ textAlign: "center" }}>Experience</Typography>
            <StyledStepper nonLinear orientation="vertical" activeStep={-1} sx={{ padding: '2rem' }}>
                {experienceData.map((item, index) => {
                    const isOpen = openSteps.includes(index);

                    return (
                        <Step key={item.title} expanded={isOpen}>
                            <StepButton icon={StepIcon(item.class)} onClick={toggleStep(index)} sx={{ color: IconColor(index) }}>
                                <Typography variant="h6" sx={{ color: IconColor(index) }}> {item.title}</Typography>
                            </StepButton>
                            <StepContent>
                                <StepCard>
                                    <CardContent>
                                        <Typography variant="caption" sx={{ paddingBottom: '1rem' }}>{item.date} | {item.location}</Typography>
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
        </ViewBox>
    );
}