import { paragraphProfessional, paragraphList, skillsList } from "src/data/aboutData";

import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';
import { Container, Box, Button, Typography, List, ListItem } from 'src/components/mui/components';
import ContactUs from 'src/components/tools/contactForm'


export default function ContactView() {
    return (
        <ColContainer>
            <Typography variant="caption" component='h2'>CONTACT</Typography>
            <ContactUs />
        </ColContainer>
    )
}
