import React from 'react';
import {useHistory} from 'react-router-dom';

// material ui stuff
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Grid, Typography, Button 
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));



const NavBar = function () {
  const classes = useStyles();
  const history = useHistory();

  // functions
  const projectButton = function () {
    history.push('/projects');
  }; // end projectButton

  const employmentButton = function () {
    history.push('/employment' )
  }; // end employmentButton

  const educationButton = function () {
    history.push('/education' )
  }; // end educationButton

  const secretHome = function () {
    history.push('/');
  }; // end secretHome

  return (
    <AppBar position="static">
      {/* <Grid container item xs={12}> */}
        <Toolbar>
          <Grid item xs={12} className={classes.root} spacing={2} container justify='center' alignItems='flex-end'>

            <Grid onClick={secretHome} item xs={4}>
                <Typography variant="h3" className={classes.title}>
                  Joshua Gulledge
                </Typography>
                <Typography variant="body2" className={classes.title}>
                  Full Stack Software Engineer
                </Typography>
            </Grid>

            <Grid item xs={2}>
              <Button onClick={projectButton} color="inherit">Projects</Button>
            </Grid>

            <Grid item xs={2}>
              <Button onClick={employmentButton} color="inherit">Employment</Button>
            </Grid>

            <Grid item xs={2}>
              <Button onClick={educationButton} color="inherit">Education</Button>
            </Grid>

            <Grid item xs={2}>
              <Button onClick={secretHome} color="inherit">Home</Button>
            </Grid>
            
          </Grid>
        </Toolbar>
      {/* </Grid> */}

    </AppBar>
  )
}; //end NavBar

export default NavBar;