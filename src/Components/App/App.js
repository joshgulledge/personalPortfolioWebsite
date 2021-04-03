import React from 'react';
import NavBar from '../Nav/Nav';
import './App.css';

import winterHike from '../../Images/winterHike.jpg';

// material ui
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import { Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50%',
    margin: '20px',
    spacing: (2)
  },
}));
const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: '',
      main: '#373E40',
      // dark: '',
      contrastText: '#B7D5D4',
    },
    secondary: {
      main: '#77878B',
    },
  }
}); // end newTheme

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={newTheme}>
      <Grid container>
        <Grid item container xs={12}>
          <NavBar />
        </Grid>
        
        <Grid item xs={5} >
          <Paper className={classes.root} elevation={3}>
            <img src={winterHike} style={{borderRadius: '5px'}} alt='winter profile' width='100%'/>
          </Paper>
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={5}>
          <Paper style={{backgroundColor: '#acb0b1', color: 'black'}} className={classes.root} elevation={3}>
            <p>About me</p>
          </Paper>
        </Grid>
        
      
        
      </Grid>
    </ThemeProvider>
  );
}

export default App;
