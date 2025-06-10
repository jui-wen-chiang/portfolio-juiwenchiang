import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Box, Button, TextField, Typography } from 'src/components/mui/components';
import { TextFieldBox, UserTextField, inputPropsStyle } from 'src/assets/styles/components/contactFormStyle';
import { RowContainer, ColContainer } from 'src/assets/styles/commonStyles';

export default function ContactUs() {
  // const form = useRef();
  const form = useRef(null);


  const sendEmail = (e) => {
    e.preventDefault();

    // const  handleOnSubmit = ( e ) => { e.preventDefault (
    //   ) ; emailjs.sendForm      ( SERVICE_ID , TEMPLATE_ID , e.target , PUBLIC_KEY ) .then        ( ( result ) = > { alert ( '訊息發送成功' )        } , consert . ( '出現錯誤！' ) }        ); e.target.reset      ( ) }    ;

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
      <TextFieldBox >
        <Typography>SEND TO</Typography>
        <Typography> raewen.juiwenchiang@gmail.com</Typography>
      </TextFieldBox>

      <TextFieldBox>
        <Typography>NAME</Typography>
        <UserTextField name="user_name" variant="outlined" color="secondary" placeholder="Please enter  your name" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required
        />
      </TextFieldBox>

      <TextFieldBox>
        <Typography>EMAIL</Typography>
        <UserTextField name="user_email" variant="outlined" color="secondary" placeholder="Please enter your email" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required type="email"
        />
      </TextFieldBox>

      <TextFieldBox>
        <Typography>WHAT DO YOU HAVE IN MIND</Typography>
        <UserTextField name="message" variant="outlined" color="secondary" placeholder="Please enter message" inputProps={{ sx: inputPropsStyle }} InputLabelProps={{ shrink: true, sx: inputPropsStyle }} required multiline rows={10}
        />
      </TextFieldBox>
      
      <Button variant="contained" type="submit">Send Message</Button>
    </ColContainer>
  );
};