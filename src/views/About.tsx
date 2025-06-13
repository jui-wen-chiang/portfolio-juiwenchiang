const { PUBLIC_URL } = process.env;

import { paragraphProfessional, paragraphList, skillsList } from "src/data/aboutData";
import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';
import { Box, Typography, List, ListItem } from 'src/components/mui/components';


export default function AboutView() {
    return (
        <ColContainer>
            <Typography variant="caption" component='h2'>ABOUT</Typography>
            <RowContainer >
                <Box
                    component="img"
                    sx={{
                        width: '35%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '1rem',
                    }}
                    alt="Portrait"
                    src={`${PUBLIC_URL}/imgs/portrait_half_body.jpeg`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
                    <Typography>{paragraphProfessional}</Typography>
                    <br />
                    <Typography>{paragraphList}</Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            listStylePosition: 'inside'
                        }}
                    >
                        {skillsList.map((item, index) => {
                            return (
                                <ListItem sx={{ display: 'list-item', padding: '0' }}>
                                    {item}
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </RowContainer>
        </ColContainer>
    )
}
