import { useState } from 'react';
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Button, Typography } from 'src/components/mui/components';
import ContactUs from 'src/components/tools/contactForm';
import BaseDialog from 'src/components/tools/Dialog/BaseDialog'


export default function ContactView() {
    const [open, setOpen] = useState(false);

    return (
        <ColContainer data-aos="fade-left" >
            <Typography variant="h2" sx={{ padding: '2rem' }}>Let's Connect </Typography>
            <Typography>
                I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ margin: '2rem' }}>Drop Me a Line</Button>
            <BaseDialog isOpen={open} closeDialog={() => setOpen(false)} state="info" extra={<ContactUs onClose={() => setOpen(false)} />} />
        </ColContainer>
    )
}