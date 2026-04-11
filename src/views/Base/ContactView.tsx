import React, { useState, useEffect, useRef } from 'react';

import { paragraphProfessional, paragraphList, skillsList } from "src/data/aboutData";

import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';
import { Container, Box, Button, Typography, List, ListItem } from 'src/components/mui/components';
import ContactUs from 'src/components/tools/contactForm';
import BaseDialog from 'src/components/tools/Dialog/BeseDialog';

export default function ContactView() {
    const [open, setOpen] = useState(false);

    return (
        <ColContainer data-aos="fade-left" >
            <Typography variant="h3" component='h3' fontWeight="bold">Let's Connect </Typography>
            <Typography>
                I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>Drop Me a Line</Button>
            <BaseDialog isOpen={open} closeDialog={() => setOpen(false)} extra={<ContactUs />} />
        </ColContainer>
    )
}