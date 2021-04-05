import { useState } from 'react';

// import emailjs
import emailjs from 'emailjs-com';

// material ui
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '25ch',
  },
  input: {
    backgroundColor: '#e8e8e8',
    width: '25ch',
    margin: theme.spacing(1)
  },
  text: {
    color: '#495464',
  }
}));


const MessageForm = function () {
  const classes = useStyles();
  
  // local states
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm( 'service_6nydasf', 'portfolio_personal', e.target, 'user_PJ8pNAcXc6Pz6qQPrsDOy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
      // clear the values
      setName('');
      setMessage('');
      setEmail('');
      setSubject('');
  
      console.log(name, message, email);
  
  }; // end sendEmail

  
  return (
    <form className={classes.root} onSubmit={sendEmail}>

      <TextField className={classes.input}
        variant='filled'
        spacing={3}
        placeholder='Your Name'
        name='name'
        value={name} 
        multiline 
        InputProps={{className: classes.text}}
        onChange={(e) => setName(e.target.value)} />

      <TextField className={classes.input}
        variant='filled'
        placeholder='Your Message'
        name='message'
        value={message} 
        multiline 
        InputProps={{className: classes.text}}
        onChange={(e) => setMessage(e.target.value)} />

      <TextField className={classes.input}
        variant='filled'
        placeholder='Message Subject'
        name='subject'
        value={subject} 
        multiline 
        InputProps={{className: classes.text}}
        onChange={(e) => setSubject(e.target.value)} />

      <TextField className={classes.input}
        variant='filled'
        placeholder='Your Email'
        name='email'
        value={email} 
        multiline 
        InputProps={{className: classes.text}}
        onChange={(e) => setEmail(e.target.value)} />

      <Button type='submit' variant='contained'
      color='secondary'>Submit</Button>

    </form>
  )
}; // end MessageForm

export default MessageForm;