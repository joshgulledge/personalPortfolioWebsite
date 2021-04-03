
import winterHike from '../../Images/winterHike.jpg';

// material ui
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '70%',
    margin: '20px',
    spacing: (2)
  },
}));

const MainPage = function () {

  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={5} >
        <Paper className={classes.root} elevation={3}>
          <img src={winterHike} style={{borderRadius: '5px'}} alt='winter profile' width='100%'/>
        </Paper>
      </Grid>
        
        <Grid item xs={2} />

        <Grid container item xs={5} justify='center' >
          <Paper 
          style={{backgroundColor: '#acb0b1', color: 'black'}} className={classes.root} 
          elevation={3}>
            <Grid item xs={12}>
              <Typography style={{backgroundColor: 'green'}} variant='h4'  align='center'>
                About me:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{backgroundColor: 'red'}} variant='body2'>
                Looking back I believe it was when my wife told me about some of the code that she wrote for a school project that something beautiful sparked. Since then I have gone down the rabbit hole of SWIFT YouTube tutorials and listened to Machine Learning podcasts before diving in deep with a Javascript Udemy course and a full-time accelerated program where I received my Full Stack Software Engineering Certification. I have completed daily coding  challenges of all types including making small applications from scratch, as well as jumping in already started projects to get them completed. I have familiarized myself with vanilla JS, Python, and several libraries including JQuery, React, Redux, Passport and Node.js. I’ve used postico, postgresql, and Express to practice SQL and become more acquainted with back end technologies. 
              </Typography>
            </Grid>
          </Paper>
        </Grid> 
    </Grid>

  )
}; // end MainPage

export default MainPage;