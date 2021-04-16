import { useState } from 'react';


// local imports
import winterHike from '../../Images/winterHike.jpg';
import resume from '../../Images/JoshResume.pdf';
import MessageForm from '../MessageForm/MessageForm';

// material ui
import {makeStyles} from '@material-ui/core/styles';
import { 
  Box, 
  Modal, 
  Grid, 
  Paper, 
  Button,
  Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '75%',
    margin: '30px',
    spacing: (1),
    borderRadius: '30px',
    backgroundColor: '#f4f4f2', 
    color: '#495464',
    opacity: '95%',
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#f4f4f2',
    color: '#495464',
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
})); // end useStyles

const getModalStyle = function () {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
}; // end modalStyle

const MainPage = function () {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  // local state
  const [open, setOpen] = useState(false);

  // open and close material ui modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Grid container item xs={12}>

      <Grid item xs={12}  lg={5}>
        <Paper style={{/*padding: '0.05px', paddingBottom: '0px'height: '40px'*/}} className={classes.paper} elevation={3}>
          <img src={winterHike} style={{borderRadius: '30px', marginBottom: '-4px'}} alt='winter profile' width='100%'/>
        </Paper>
      </Grid>
        
        {/* <Grid item xs={2} /> */}

        <Grid container item xs={12} justify='center' >
          <Paper elevation={3} className={classes.paper}>
            <Grid justify='center' container item xs={12}>
                <Typography style={{marginTop: '30px', marginBottom: '20px'}} gutterBottom variant='h4'  align='center'>
                  About me:
                </Typography>
              
            </Grid>
            <Grid container justify='center' item xs={12}>
              <Typography style={{marginLeft: 'auto'}} gutterBottom variant='body1'>
                Looking back I believe it was when my wife told me about some of the code that she wrote for a school project that something beautiful sparked. Since then I have gone down the rabbit hole of SWIFT YouTube tutorials and listened to Machine Learning podcasts before diving in deep with a Javascript Udemy course and a full-time accelerated program where I received my Full Stack Software Engineering Certification. I have completed daily coding challenges of all types including making small applications from scratch, as well as jumping in already started projects to get them completed. I have familiarized myself with vanilla JS, Python, and several JS libraries including JQuery, React, Redux, Passport and Node.js. I’ve used postico, postgresql, and Express to practice SQL and become more acquainted with back end technologies. 
              </Typography>
            
              <Grid container justify='center' item xs={12}>
                <Box style={{
                  margin: '30px',
                  borderRadius: '10px',
                  padding: '5px',
                  backgroundColor: '#495464',
                  color: '#f4f4f2',
                  width: '80%'}}>
                    <Grid container justify='center' >

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <GitHubIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <a style={{color: '#f4f4f2', textDecoration: 'none'}} 
                          href='https://github.com/joshgulledge'>See My Github</a>  
                        </Grid>
                      </Grid>

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <LinkedInIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <a style={{color: '#f4f4f2', textDecoration: 'none'}} 
                          href='https://www.linkedin.com/in/joshua-gulledge-785b961b6/'>See My LinkedIn</a>  
                        </Grid>   
                      </Grid>

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <PictureAsPdfIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <a style={{color: '#f4f4f2', textDecoration: 'none'}} 
                          href={resume} download >Download My Resume</a>  
                        </Grid>   
                      </Grid>

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <MessageIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <Button style={{color: '#f4f4f2'}} onClick={() =>{handleOpen()}}>Send Me A Message</Button>
                        </Grid>   
                      </Grid>

                    </Grid>
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Grid> 
        {/* modal window */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="MessageFrom"
          aria-describedby="Inputs for Message">
            <div style={modalStyle} className={classes.modal}>
             <MessageForm />
            </div>
        </Modal>
    </Grid>

  )
}; // end MainPage

export default MainPage;