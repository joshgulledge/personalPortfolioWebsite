import React from 'react';

// material ui 
import {makeStyles} from '@material-ui/core/styles';
import {  Grid, Paper, Typography } from '@material-ui/core';

// import images
import chokingPlastic from '../../Images/chokingPlastic.png';
import feedBack from '../../Images/feedBackApp.png';
import taskManager from '../../Images/taskManager.png';
import forkify from '../../Images/Forkify.png';

// local storage cause this site doesn't need a db
const projectList = [{
  projectName: 'Choking Plastic',
  projectDescription: 'This project allows logged in users to keep track of plastic alternative products that they liked and disliked. It also allows them to leave a personal review for themselves of products. This application gets product information from a third party API and links up tp amazon.',
  projectImage: chokingPlastic,
  projectLink: 'https://chokingplastic.herokuapp.com/#/home',
  projectGitHub: 'https://github.com/joshgulledge/Plastic-Alt-Tracker'
}, {
  projectName: 'FeedBack App',
  projectDescription: 'This is an application for the user to leave feedback. It was modeled after the feedback from from Prime Digital Academy. It stores the feedback for admin to review. Answers are required for each response.',
  projectImage: feedBack,
  projectLink: 'https://damp-scrubland-40746.herokuapp.com/#/',
  projectGitHub: 'https://github.com/joshgulledge/feedback-app'
}, {
  projectName: 'Task Manager',
  projectDescription: 'This is a simple task manager application. It was wrote with Jquery and allows users to add and manage tasks. The user can mark the task as complete or incomplete and can also delete the task.',
  projectImage: taskManager,
  projectLink: 'https://serene-oasis-64999.herokuapp.com/',
  projectGitHub: 'https://github.com/joshgulledge/to-do-list'
}, 
{
  projectName: 'Recipe Application',
  projectDescription: 'This project was done as I followed along with a udemy class. It was done with vanilla JS and calls to an API for recipe information.',
  projectImage: forkify,
  projectLink: 'https://forkify-joshg.netlify.app/',
  projectGitHub: 'https://github.com/joshgulledge/udemy-forkify-app'
}, 
]; // end projectList


const useStyles = makeStyles((theme) => ({
  paper: {
    spacing: (2),
    width: '50%',
    margin: theme.spacing(2),
    borderRadius: '30px',
    opacity: '95%',
    textAlign: 'center',
    backgroundColor:  '#f4f4f2',
    color: '#495464',
  },
  button: {
    margin: theme.spacing(2),
  },
  textInput: {
    margin: theme.spacing(1),
  }
}));


const ProjectPage = function () {
  const classes = useStyles();

  return (
    <Grid container 
          justify='space-between'
          alignItems='center'>


      {projectList.map( (project, index) => {
        return (
          <Grid key={index} container justify='center' >
            <Paper  className={classes.paper} elevation={3}>
                <Grid item xs={12}>
                  <Typography gutterBottom variant='h3'>
                    {project.projectName}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <img src={project.projectImage} 
                  alt='website main page' 
                  style={{width: '80%', margin: '10px'}} />
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.textInput} gutterBottom variant='body2'>
                    {project.projectDescription} <a href={project.projectLink}>See this site here.</a> <a href={project.projectGitHub}>Or see the code here.</a>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
        )
      })}
          
        </Grid>
  )
}; // end ProjectPage

export default ProjectPage;