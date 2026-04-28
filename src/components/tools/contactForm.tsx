import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Typography, Button } from 'src/components/mui/components';
import { UserTextField, inputPropsStyle } from 'src/assets/styles/components/contactFormStyle';
import { ColContainer } from 'src/assets/styles/commonStyles';
import { ColorScheme } from "src/theme/UIstandard"
import BaseDialog from 'src/components/tools/Dialog/BaseDialog'

interface ContactUsProps {
  onClose: () => void;
}

export default function ContactUs({ onClose }: ContactUsProps) {
  const form = useRef<HTMLFormElement>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessOpen(true);
      },
        (error) => {
          setErrorMessage(error.text || 'Unknown error');
          setErrorOpen(true);
        }
      );
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
    onClose();
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <ColContainer >
          <Typography sx={{color:ColorScheme.primary.dark}}>contact to:</Typography>
          <Typography sx={{ padding: '1rem',color:ColorScheme.primary.dark }}>raewen.juiwenchiang@gmail.com</Typography>
          <Grid container spacing={3} sx={{ padding: '1rem', width: '100%' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2">Name:</Typography>
              <UserTextField name="user_name" variant="outlined" color="secondary" placeholder="Please enter your name" required
                slotProps={{
                  input: { sx: inputPropsStyle },
                  inputLabel: { shrink: true, sx: inputPropsStyle }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2">Email:</Typography>
              <UserTextField name="user_email" variant="outlined" color="secondary" placeholder="Please enter your email"
                required type="email"
                slotProps={{
                  input: { sx: inputPropsStyle },
                  inputLabel: { shrink: true, sx: inputPropsStyle }
                }}
              />
            </Grid>
            <Grid size={12}>
              <Typography variant="body2">Subject:</Typography>
              <UserTextField name="title" variant="outlined" color="secondary" placeholder="Please enter the subject"
                required
                slotProps={{
                  input: { sx: inputPropsStyle },
                  inputLabel: { shrink: true, sx: inputPropsStyle }
                }}
              />
            </Grid>
            <Grid size={12}>
              <Typography variant="body2">What do you have in mind?</Typography>
              <UserTextField name="message" variant="outlined" color="secondary" placeholder="Please enter the message"
                required multiline rows={5}
                slotProps={{
                  input: { sx: inputPropsStyle },
                  inputLabel: { shrink: true, sx: inputPropsStyle }
                }}
              />
            </Grid>
          </Grid>
          <Button color="info" variant="contained" type="submit">Send Message</Button>
        </ColContainer >
      </form>

      <BaseDialog
        isOpen={successOpen}
        closeDialog={handleSuccessClose}
        state="success"
        title="Message Sent!"
        content="Your message has been sent successfully. I'll get back to you soon!"
      />

      <BaseDialog
        isOpen={errorOpen}
        closeDialog={handleErrorClose}
        state="error"
        title="Message Failed"
        content={errorMessage}
      />
    </>
  );
};