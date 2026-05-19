import { useState } from 'react';
import { ColContainer } from 'src/assets/styles/commonStyles';
import { Button, Typography } from 'src/components/mui/components';
import ContactUs from 'src/components/tools/contactForm';
import BaseDialog from 'src/components/tools/Dialog/BaseDialog'
import { ColorScheme } from 'src/theme/UIstandard';


export default function ContactView() {
    const [open, setOpen] = useState(false);

    return (
        // <ColContainer data-aos="fade-left" sx={{ height: '40vh'}}>
        <ColContainer data-aos="fade-left">
            <Typography variant="h2" sx={{ padding: '2rem' }}>Let's Connect </Typography>
            <Typography>
                I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out! My email is <strong>raewen.juiwenchiang@gmail.com</strong>
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ margin: '2rem', color: ColorScheme.text.light, backgroundColor: ColorScheme.secondary.dark }} >Drop Me a Line</Button>
            <BaseDialog
                isOpen={open}
                closeDialog={() => setOpen(false)}
                extra={<ContactUs onClose={() => setOpen(false)} />}
                state="info"
            />
        </ColContainer>
    )
}