import { paragraphProfessional, paragraphList, skillsList } from "src/data/aboutData";
import { portraitImage } from 'src/assets/styles/views/AboutStyle';
import { RowContainer, ColContainer, ListContainer, ListContent } from 'src/assets/styles/commonStyles';
import { Box, Typography } from 'src/components/mui/components';

const { PUBLIC_URL } = process.env;

export default function AboutView() {
    return (
        <ColContainer>
            <Typography variant="h4" component='h4'>ABOUT</Typography>
            <RowContainer sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box
                    component="img"
                    sx={portraitImage}
                    alt="Portrait"
                    src={`${PUBLIC_URL}/imgs/portrait_half_body.jpeg`}
                />
                <ColContainer sx={{ alignItems: 'flex-start', padding: '0 2rem' }}>
                    <Typography>{paragraphProfessional}</Typography>
                    <br />
                    <Typography>{paragraphList}</Typography>
                    <ListContainer>
                        {skillsList.map((item, index) => {
                            return (
                                <ListContent>{item} </ListContent>
                            )
                        })}
                    </ListContainer>
                </ColContainer>
            </RowContainer>
        </ColContainer>
    )
}
