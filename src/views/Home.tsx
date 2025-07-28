import { personalInof } from "src/data/views/homeData"
import { RowContainer } from 'src/assets/styles/commonStyles'
import { HomeContainer, ContentWrapper, ContentBox } from "src/assets/styles/views/HomeStyle"
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/linkBar';


export default function HomeView() {
    return (
        <RowContainer disableGutters maxWidth={false} sx={{ height: '75vh', display: 'flex' }}>
            <HomeContainer>
                <ContentWrapper>
                    <ContentBox>
                        <Typography variant="h6">{personalInof.subtitle}</Typography>
                        <Typography variant="h1" sx={{ paddind: '1.5rem' }}>{personalInof.name}</Typography>
                        <Typography variant="h6">{personalInof.summary}</Typography>
                    </ContentBox>
                    <LinkBar simplyResumeIcon={false} />
                </ContentWrapper>
            </HomeContainer>
        </RowContainer>
    )
}