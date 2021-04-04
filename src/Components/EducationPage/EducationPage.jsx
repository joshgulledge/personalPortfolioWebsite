import React from 'react';

// images
import udemyCerts from '../../Images/UdemyJsCertificate.jpg';


// material ui
import { Typography, Container, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f3fcfd', 
    // height: '100vh',
    opacity: '95%',
    marginTop: '10px',
    color: '#131516',
    borderRadius: '15px',
  },
  grid: {
    margin: '10px',
  },
}));


const EducationPage = function () {
  const classes = useStyles();

  return (
    <Container component="div" className={classes.container} maxWidth="sm">

        <Grid container className={classes.grid} justify='center'>
          <Typography gutterBottom variant='h3' >
            Education
          </Typography>
        </Grid>

        <Grid className={classes.grid} container justify='center'>
          <Typography gutterBottom variant='h5' >
           Prime Digital Academy
          </Typography>
        </Grid>

        <Grid className={classes.grid} container justify='center'>
          <Typography gutterBottom variant='h6' >
           Full Stack Software Engineering Certificate
          </Typography>
        </Grid>

        <Grid className={classes.grid} container justify='center'>
          <Typography  variant='h5' >
           Udemy
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <img src={udemyCerts} alt='copy of certificiate' width='50%' />
        </Grid>

        <Grid className={classes.grid} container justify='center'>
          <Typography variant='h5' >
           Wallace Community College
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography variant='body1' gutterBottom>
            I completed basic courses. Completed first part of program for Industrial Electricity, including PLC controls. No certificate was given for the classes that I took part in. 
          </Typography>
        </Grid>

    </Container>
  )
}; // end Educationpage

export default EducationPage;