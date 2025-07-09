import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Button, Typography } from 'src/components/mui/components';
import { UserTextField, inputPropsStyle } from 'src/assets/styles/components/contactFormStyle';
import { ColContainer } from 'src/assets/styles/commonStyles';
import { ColorScheme } from "src/theme/designTokens"

export default function ContactUs() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert(result.text);
        },
        (error) => {
          console.error('Email sending error:', error.text);
          alert(error);
        }
      );
  };



  return (
    <ColContainer component="form" ref={form} onSubmit={sendEmail}>
      <Typography>contact to: raewen.juiwenchiang@gmail.com</Typography>
      <Grid container spacing={3} sx={{ padding: '2rem', width: '100%' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>Name:</Typography>
          <UserTextField name="user_name" variant="outlined" color="secondary" placeholder="Please enter your name" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography>Email:</Typography>
          <UserTextField name="user_email" variant="outlined" color="secondary" placeholder="Please enter your email" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required type="email"
          />
        </Grid>
        <Grid size={12}>
          <Typography>What do you have in mind?</Typography>
          <UserTextField name="message" variant="outlined" color="secondary" placeholder="Please enter the message" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required multiline rows={10}
          />
        </Grid>
      </Grid>
      <Button variant="contained" type="submit" sx={{ margin: '1rem', color: ColorScheme.neutral.light }}>Send Message</Button>
    </ColContainer>
  );
};