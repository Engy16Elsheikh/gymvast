import React from 'react';
import { Typography, makeStyles, Grid, Avatar, Paper } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Import trainer photos
import trainer1 from './trainer-details1.png';
import trainer2 from './trainer-details_2.png';
import trainer3 from './trainer-details_5.png';
import trainer4 from './trainer-details_6.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
  trainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(4), // Increase padding to increase card size
    '&:hover $socialLinks': {
      opacity: 1,
    },
  },
  avatar: {
    width: 200, // Increase image width
    height: 200, // Increase image height
    marginBottom: theme.spacing(1),
    borderRadius: 0, // Remove rounded corners
    '&:hover ~ .name': {
      color: 'red',
    },
  },
  name: {
    transition: 'color 0.3s',
  },
  socialLinks: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    transition: 'opacity 0.3s',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    padding: theme.spacing(2), // Increase padding to increase social bar height
    borderRadius: theme.shape.borderRadius,
    height: 200, // Increase social bar height
  },
  socialIcon: {
    margin: theme.spacing(0.5),
    color: 'white',
  },
}));

const trainers = [
  { name: 'George L Martin', role: 'Fitness Instructor', photo: trainer1 },
  { name: 'ANGELA K WILLIAMS', role: 'Ashtanga Yoga', photo: trainer4 },
  { name: 'VICTOR T SHAFFER', role: 'Personal Trainer', photo: trainer3 },
  { name: 'Jessica S Wilson', role: 'Cardio & Conditioning', photo: trainer2 },
];

const OurTrainers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.header}>
        OUR TRAINERS
      </Typography>
      <Typography variant="body1" align="center" className={classes.paragraph}>
        World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.
      </Typography>
      <Grid container spacing={2} justify="center">
        {trainers.map((trainer, index) => (
          <Grid item xs={3} key={index}>
            <Paper className={classes.trainer}>
              <Avatar alt={trainer.name} src={trainer.photo} className={classes.avatar} />
              <Typography variant="h6" className={`name ${classes.name}`}>
                {trainer.name}
              </Typography>
              <Typography variant="subtitle1">{trainer.role}</Typography>
              <div className={classes.socialLinks}>
                <FacebookIcon className={classes.socialIcon} />
                <TwitterIcon className={classes.socialIcon} />
                <LinkedInIcon className={classes.socialIcon} />
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTrainers;


