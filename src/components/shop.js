import React from 'react';
import { makeStyles, Grid, Paper, Typography, Button } from '@material-ui/core';

// Import images
import jobImage1 from './shop-3 (1).png';
import jobImage2 from './shop-2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  jobContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1),
    position: 'relative',
    '&:hover $overlay': {
      opacity: 1,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  jobImage: {
    width: '80%', // Decrease image size
    height: 'auto',
  },
  jobName: {
    color: 'black', // Set name color to black
    textAlign: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buyButton: {
    color: 'white',
    backgroundColor: 'red', // Change button color to red
    border: '2px solid white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'red',
    },
  },
}));

const FitnessSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>FITNESS SHOP</Typography>
      <Typography variant="body1" className={classes.paragraph}>
        World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.jobContainer}>
            <img src={jobImage1} alt="Job 1" className={classes.jobImage} />
            <div className={classes.overlay}>
              <Button variant="outlined" className={classes.buyButton}>Buy</Button>
            </div>
            <Typography variant="h6" className={classes.jobName}>V-NEK PRO VITAMIN</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.jobContainer}>
            <img src={jobImage2} alt="Job 2" className={classes.jobImage} />
            <div className={classes.overlay}>
              <Button variant="outlined" className={classes.buyButton}>Buy</Button>
            </div>
            <Typography variant="h6" className={classes.jobName}>CAPSUL HOODie</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.jobContainer}>
            <img src={jobImage1} alt="Job 3" className={classes.jobImage} />
            <div className={classes.overlay}>
              <Button variant="outlined" className={classes.buyButton}>Buy</Button>
            </div>
            <Typography variant="h6" className={classes.jobName}>HOODIE WITH CAPSUL</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FitnessSection;


