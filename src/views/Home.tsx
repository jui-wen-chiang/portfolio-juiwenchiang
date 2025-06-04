import { personalInof } from "src/data/views/homeData"

import { RowContainer } from 'src/assets/styles/commonStyles'
import { HomeContainer, ContentBox } from "src/assets/styles/views/HomeStyle"
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/linkBar';

export default function AboutView() {
    return (
        <RowContainer>
            <HomeContainer>
                <ContentBox>
                    <Typography variant="subtitle1">{personalInof.subtitle}</Typography>
                    <Typography variant="h1">{personalInof.name}</Typography>
                    <Typography variant="subtitle1">{personalInof.summary}</Typography>
                </ContentBox>
                <LinkBar simplyResumeIcon={false} />
            </HomeContainer>
        </RowContainer>
    )
}