import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';


// custom components
import NavBar from '../Nav/Nav';
import MainPage from '../MainPage/MainPage';
import ProjectPage from '../ProjectPage/ProjectPage';

// material ui
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import EmploymentPage from '../EmploymentPage/EmploymentPage';
import EducationPage from '../EducationPage/EducationPage';



const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: '',
      main: '#f4f4f2',
      // dark: '',
      contrastText: '#495464',
    },
    secondary: {
      main: '#495464',
      contrastText: '#f4f4f2',
    }
    
  }
}); // end newTheme

function App() {

  return (
    <ThemeProvider theme={newTheme}>

      <Router>
        <NavBar />
        
        <Route exact path='/' >
          <MainPage />
        </Route>

        <Route exact path='/projects' >
          <ProjectPage />
        </Route>

        <Route exact path='/employment' >
          <EmploymentPage />
        </Route>

        <Route exact path='/education' >
          <EducationPage />
        </Route>

      </Router>
    </ThemeProvider>
  );
}

export default App;
