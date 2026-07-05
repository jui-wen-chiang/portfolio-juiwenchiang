import { ColContainer } from 'src/app/professional/assets/styles/commonStyles'
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/app/professional/components/tools/Bars/LinkingBar';

export default function FooterView() {
    return (
        <ColContainer>
            <LinkBar />
            <Typography variant="caption"> © 2026 Jui-Wen Chiang </Typography>
        </ColContainer>
    )
}