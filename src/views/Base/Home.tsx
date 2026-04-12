import { personalInof } from "src/data/views/homeData"
import { RowContainer } from 'src/assets/styles/commonStyles'
import { HomeContainer, ContentWrapper, ContentBox } from "src/assets/styles/views/HomeStyle"
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/Bars/LinkingBar';
import { styled, alpha } from "@mui/material/styles";

import { ViewBox } from "src/assets/styles/layoutStyles";

//  .gradient-text { 
//             background: linear-gradient(90deg, #60A5FA, #A78BFA); 
//             -webkit-background-clip: text; 
//             -webkit-text-fill-color: transparent; 
//         }
const GradientText = styled(Typography)({
    background: 'linear-gradient(90deg, #60A5FA, #A78BFA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.3,          // ⭐ 關鍵
    paddingBottom: '0.15em', // 防止底部被裁
    paddingRight: '0.1em',
});

export default function HomeView() {
    return (
        <ViewBox>
            <HomeContainer>
                <ContentWrapper>
                    <ContentBox>                        
                        <Typography variant="h6" fontWeight="bold">{personalInof.subtitle}</Typography>
                        <GradientText fontWeight="bold" variant="h1" sx={{ paddind: '1.5rem' }}>
                            {personalInof.name}
                        </GradientText>
                        <Typography variant="h6" fontWeight="bold">{personalInof.summary}</Typography>
                    </ContentBox>
                    {/* <LinkBar simplyResumeIcon={false} /> */}
                </ContentWrapper>
            </HomeContainer>
        </ViewBox>
    )
}