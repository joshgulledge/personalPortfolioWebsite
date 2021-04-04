import {Link} from 'react-router-dom';
import winterHike from '../../Images/winterHike.jpg';

// material ui
import {makeStyles} from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
    margin: '20px',
    spacing: (2),
    padding: '5px',
    borderRadius: '30px'
  },
}));

const MainPage = function () {

  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={5} >
        <Paper style={{padding: '0'}} className={classes.paper} elevation={3}>
          <img src={winterHike} style={{borderRadius: '30px'}} alt='winter profile' width='100%'/>
        </Paper>
      </Grid>
        
        <Grid item xs={2} />

        <Grid container item xs={5} justify='center' >
          <Paper 
          style={{
            backgroundColor: '#acb0b1', 
            color: '#373E40',
          opacity: '95%'}} 
          elevation={3} className={classes.paper}>
            <Grid justify='center' container item xs={12}>
                <Typography gutterBottom variant='h4'  align='center'>
                  About me:
                </Typography>
              
            </Grid>
            <Grid container item xs={12}>
              <Typography gutterBottom variant='body2'>
                Looking back I believe it was when my wife told me about some of the code that she wrote for a school project that something beautiful sparked. Since then I have gone down the rabbit hole of SWIFT YouTube tutorials and listened to Machine Learning podcasts before diving in deep with a Javascript Udemy course and a full-time accelerated program where I received my Full Stack Software Engineering Certification. I have completed daily coding  challenges of all types including making small applications from scratch, as well as jumping in already started projects to get them completed. I have familiarized myself with vanilla JS, Python, and several libraries including JQuery, React, Redux, Passport and Node.js. I’ve used postico, postgresql, and Express to practice SQL and become more acquainted with back end technologies. 
              </Typography>
            
              <Grid container justify='center' item xs={12}>
                <Box style={{
                  borderRadius: '10px',
                  padding: '5px',
                  backgroundColor: '#373E40',
                  color: '#B7D5D4',
                  width: '80%'}}>
                    <Grid container justify='center' >

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <GitHubIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <a style={{color: '#B7D5D4', textDecoration: 'none'}} 
                          href='https://github.com/joshgulledge'>See My Github</a>  
                        </Grid>
                      </Grid>

                      <Grid spacing={2} container alignItems='center' item xs={12}>
                        <Grid item xs={2}>
                          <LinkedInIcon />
                        </Grid>
                        <Grid item xs={10} >
                          <a style={{color: '#B7D5D4', textDecoration: 'none'}} 
                          href='https://www.linkedin.com/in/joshua-gulledge-785b961b6/'>See My LinkedIn</a>  
                        </Grid>   
                      </Grid>
                    </Grid>
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Grid> 
    </Grid>

  )
}; // end MainPage

export default MainPage;