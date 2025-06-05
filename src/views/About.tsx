import { paragraphProfessional,paragraphList,skillsList } from "src/data/aboutData";

import { RowContainer,ColContainer } from 'src/assets/styles/commonStyles';
import { Container, Box, Button, Typography, List, ListItem } from 'src/components/mui/components';


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
                    alt="The house from the offer."
                    src="/image_2022_professional portrait_half_body.jpeg"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
                    <Typography>{paragraphProfessional}</Typography>
                    <br/>
                    <Typography>{paragraphList}</Typography>
                    <List
                        sx={{
                            listStyleType: 'disc',
                            listStylePosition: 'inside'
                        }}
                    >
                        {skillsList.map((item, index) => {
                            return (
                                <ListItem sx={{ display: 'list-item', padding:'0' }}>
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
