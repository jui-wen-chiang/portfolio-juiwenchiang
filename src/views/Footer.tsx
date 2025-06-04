import { ColContainer } from 'src/assets/styles/commonStyles'
import { Typography } from 'src/components/mui/components';
import LinkBar from 'src/components/tools/linkBar';

export default function FooterView() {
    return (
        <ColContainer>
            <LinkBar />
            <Typography>Copyright@Jui-Wen Chiang</Typography>
        </ColContainer>
    )
}