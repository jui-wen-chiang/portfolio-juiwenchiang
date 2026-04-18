import { personalInof } from "src/data/views/homeData"
import { HomeContainer, ContentWrapper, ContentBox, GradientText } from "src/assets/styles/views/HomeStyle"
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/Bars/LinkingBar';
import { ViewBox } from "src/assets/styles/layoutStyles";
import BackgroundBlobs from "src/components/tools/Background/BackgroundBlobs";


export default function HomeView() {
    return (
        <ViewBox
            component="section"
            aria-label="Home"
            sx={{
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <BackgroundBlobs variant="hero" />
            <HomeContainer>
                <ContentWrapper>
                    <ContentBox>
                        <Typography variant="h6">{personalInof.subtitle}</Typography>
                        <GradientText variant="h1" sx={{ fontWeight: 'bold', paddingBottom: '1.5rem' }}>
                            {personalInof.name}
                        </GradientText>
                        <Typography variant="h6">{personalInof.summary}</Typography>
                    </ContentBox>
                    <LinkBar simplyResumeIcon={false} />
                </ContentWrapper>
            </HomeContainer>
        </ViewBox>
    )
}