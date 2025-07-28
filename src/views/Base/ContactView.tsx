import { paragraphProfessional, paragraphList, skillsList } from "src/data/aboutData";

import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';
import { Container, Box, Button, Typography, List, ListItem } from 'src/components/mui/components';
import ContactUs from 'src/components/tools/ContactForm'


export default function ContactView() {
    return (
        <ColContainer>
            <Typography variant="h4" component='h4'>CONTACT</Typography>
            <ContactUs />
        </ColContainer>
    )
}