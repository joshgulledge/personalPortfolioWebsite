import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';


// custom components
import NavBar from '../Nav/Nav';
import MainPage from '../MainPage/MainPage';
import ProjectPage from '../ProjectPage/ProjectPage';

// material ui
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import EmploymentPage from '../EmploymentPage/EmploymentPage';
import EducationPage from '../EducationPage/EducationPage';



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
