import React from 'react';

// material ui
import { Typography, List, ListItem, ListItemIcon,
  ListItemText, Container, Grid } from '@material-ui/core';
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
          <List>
            <ListItem>
              <ListItemText primary="Remote experience with team projects and stand up meetings." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quickly learned multiple JS libraries including node, express, and react." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Set up full stack applications from the ground up, as well working as a team to complete already started projects." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Worked with database and API services." />
            </ListItem>
          </List>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           Michels Utility Services, Inc
          </Typography>
        </Grid>

        <Grid container justify='center'>
           <List>
             <ListItem>
              <ListItemText primary="Anticipated challenges and needed equipment for next phase in the job, ran lead for making sure my team was prepared and organized." />
             </ListItem>
             <ListItem>
              <ListItemText primary="Learned new tools and procedures to maintain efficient work with welders." />
             </ListItem>       
           </List>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           Q3 Contracting
          </Typography>
        </Grid>

        <Grid container justify='center'>
           <List>
             <ListItem>
               <ListItemText primary="Adapted to changing acceptable procedures with the standards of plastic fusion." />
             </ListItem>
             <ListItem>
              <ListItemText primary="Swiftly learned the basics of a new construction field." />            
             </ListItem>       
           </List>
        </Grid>

        <Grid container justify='center'>
          <Typography gutterBottom variant='h5' >
           IronOak Construction
          </Typography>
        </Grid>

        <Grid container justify='center'>
           <List>
             <ListItem>
               <ListItemText primary="Communicated with clients about their needs and expectations." />
             </ListItem>
             <ListItem>
              <ListItemText primary="Managed scheduling and invoicing for multiple on going projects." />          
             </ListItem>
             <ListItem>
              <ListItemText primary="Stayed knowledgeable on new trends, technologies, services provided and how these could work for the clients interests." />     
             </ListItem>
             <ListItem>
               <ListItemText primary="Maintained communication between clients and manufacturing companies so that all parties stayed informed." />    
             </ListItem>
           </List>
        </Grid>
      </Container>
  )
}; // end EmploymentPage

export default EmploymentPage;