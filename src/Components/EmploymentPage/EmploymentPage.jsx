import React from 'react';

// material ui
import { Typography, Container, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f4f2', 
    opacity: '95%',
    marginTop: '10px',
    color: '#495464',
    borderRadius: '15px',
  },
}));


const EmploymentPage = function () {
  const classes = useStyles();

  return (
      <Container component="div" className={classes.container} maxWidth="sm">
        <Grid container justify='center'>
          <Typography gutterBottom variant='h3' >
            Employment History
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           Prime Digital Academy
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='body1' >
           <ul>
             <li>
               Remote experience with team projects and stand up meetings.
             </li>
             <li>
               Quickly learned multiple JS libraries including node, express, and react.
             </li>
             <li>
               Set up full stack applications from the ground up, as well working as a team to complete already started projects.
             </li>
             <li>
               Worked with database and API services
             </li>
           </ul>
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           Michels Utility Services, Inc
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='body1' >
           <ul>
             <li>
              Anticipated challenges and needed equipment for next phase in the job, ran lead for making sure my team was prepared and organized.
             </li>
             <li>
              Learned new tools and procedures to maintain efficient work with welders.
             </li>       
           </ul>
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           Q3 Contracting
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='body1' >
           <ul>
             <li>
              Adapted to changing acceptable procedures with the standards of plastic fusion.
             </li>
             <li>
              Swiftly learned the basics of a new construction field.             
             </li>       
           </ul>
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           IronOak Construction
          </Typography>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='body1' >
           <ul>
             <li>
              Communicated with clients about their needs and expectations.
             </li>
             <li>
              Managed scheduling and invoicing for multiple on going projects.
             </li>
             <li>
              Stayed knowledgeable on new trends, technologies, services provided and how these could work for the clients interests.
             </li>
             <li>
               Maintained communication between clients and manufacturing companies so that all parties stayed informed.
             </li>
           </ul>
          </Typography>
        </Grid>
      </Container>
  )
}; // end EmploymentPage

export default EmploymentPage;