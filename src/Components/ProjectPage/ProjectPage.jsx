import React, { useState } from 'react';

// material ui 
import {makeStyles} from '@material-ui/core/styles';
import { Box, Button, Grid, Paper, Typography, IconButton} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// import images
import chokingPlastic from '../../Images/chokingPlastic.png';
import feedBack from '../../Images/feedBackApp.png';
import taskManager from '../../Images/taskManager.png';

// local storage cause this site doesn't need a db
const projectList = [{
  projectName: 'Choking Plastic',
  projectDescription: 'This project allows logged in users to keep track of plastic alternative products that they liked and disliked. It also allows them to leave a personal review for themselves of products. This application gets product information from a third party API and links up tp amazon.',
  projectImage: chokingPlastic,
  projectLink: 'https://chokingplastic.herokuapp.com/#/home'
}, {
  projectName: 'FeedBack App',
  projectDescription: 'This is an application for the user to leave feedback. It was modeled after the feedback from from Prime Digital Academy. It stores the feedback for admin to review. Answers are required for each response.',
  projectImage: feedBack,
  projectLink: 'https://damp-scrubland-40746.herokuapp.com/#/',
}, {
  projectName: 'Task Manager',
  projectDescription: 'This is a simple task manager application. It was wrote with Jquery and allows users to add and manage tasks. The user can mark the task as complete or incomplete and can also delete the task.',
  projectImage: taskManager,
  projectLink: 'https://serene-oasis-64999.herokuapp.com/',
}, 
]; // end projectList


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '20px',
    spacing: (2),
    padding: '5px',
    borderRadius: '30px',
    backgroundColor: '#acb0b1', 
    color: '#373E40',
    opacity: '95%',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(2),
  }
}));


const ProjectPage = function () {
  const classes = useStyles();

  // local state, used to move through project list array
  let [count, setCount] = useState(0);

  // local functions
  const seeNextProject = function () {

    if (count < projectList.length - 1) {
      let counter = count;
      counter++;
      setCount(counter);
    };
    if (count >= projectList.length -1) {
      setCount(0);
    };
  }; // end seeNextProject

  const seePrevProject = function () {

    if (count > 0) {
      let counter = count;
      counter--;
      setCount(counter);
    };
    if (count <= 0) {
      setCount(projectList.length -1);
    };
  }; // end seePrevProject

  return (
    <Grid container 
          justify='space-between'
          alignItems='center'>

          <Grid item xs={3}>
            <Button onClick={seePrevProject}
            className={classes.button} 
            variant='contained' 
            color='primary'>
              See Previous Project
            </Button>
            {/* <IconButton aria-label="delete">
              <ArrowBackIosIcon onClick={() => console.log('go back')}/>
            </IconButton> */}
          </Grid>

          <Grid  justify='center' alignItems='center' container item xs={6}>
            <Paper className={classes.paper} elevation={3}>
              <Grid item xs={12}>
                <Typography gutterBottom variant='h3'>
                  {projectList[count].projectName}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <img src={projectList[count].projectImage} 
                alt='website main page' style={{width: '80%', margin: '10px'}} />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant='body2'>
                  {projectList[count].projectDescription}
                </Typography>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={1} />
          <Grid item xs={2}>
          <Button onClick={seeNextProject}
          className={classes.button} 
          variant='contained' 
          color='primary'>
              See Next Project
            </Button>
            {/* <IconButton aria-label="delete">
              <ArrowForwardIosIcon onClick={() => console.log('go forward')}/>
            </IconButton> */}
          </Grid>
        </Grid>
  )
}; // end ProjectPage

export default ProjectPage;