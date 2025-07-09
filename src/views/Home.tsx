import { personalInof } from "src/data/views/homeData"
import { RowContainer } from 'src/assets/styles/commonStyles'
import { StyledTypography } from 'src/assets/styles/components/StyledComp'
import { HomeContainer, ContentBox } from "src/assets/styles/views/HomeStyle"
import { Box,Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/linkBar';

const { PUBLIC_URL } = process.env;

export default function HomeView() {
    return (
        <RowContainer disableGutters maxWidth={false}>
            <HomeContainer>
                <ContentBox>
                    <Typography variant="h6">{personalInof.subtitle}</Typography>
                    <StyledTypography variant="h1">{personalInof.name}</StyledTypography>
                    <Typography variant="h6">{personalInof.summary}</Typography>
                </ContentBox>
                <LinkBar simplyResumeIcon={false} />
            </HomeContainer>
        </RowContainer>
    )
}