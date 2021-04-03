import React from 'react';
// material ui stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

  // functions
  const projectButton = function () {
    // go to project page
    console.log('Project button clicked');
  }; // end projectButton

  const employmentButton = function () {
    console.log('Employment button clicked');
  }; // end employmentButton

  const educationButton = function () {
    console.log('Education button clicked');
  }; // end educationButton

  return (
    <AppBar position="static">
      {/* <Grid container item xs={12}> */}
        <Toolbar>
          <Grid item xs={12} className={classes.root} spacing={2} container justify='center' alignItems='flex-end'>

            <Grid item xs={6}>
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
            
          </Grid>
        </Toolbar>
      {/* </Grid> */}

    </AppBar>
  )
}; //end NavBar

export default NavBar;