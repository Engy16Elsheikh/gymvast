import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: 60,
    color: 'black',
  },
  header: {
    marginBottom: theme.spacing(1),
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.header}>
        Why join us
      </Typography>
      <Typography variant="body1" align="center" className={classes.header}>
        World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className={classes.gridItem}>
          <AccessAlarmIcon className={classes.icon} />
          <Typography variant="h6" align="center">
            TONS OF EQUIPMENT
          </Typography>
          <Typography variant="body2" align="center">
            We have heap of fun piece of equipment to build down every inch of your for body and from boom.
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gridItem}>
          <DirectionsRunIcon className={classes.icon} />
          <Typography variant="h6" align="center">
            ROWS OF CARDIO
          </Typography>
          <Typography variant="body2" align="center">
            On the Insert tab, the galleries include items that are designed to coordinate with document.
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gridItem}>
          <DirectionsBikeIcon className={classes.icon} />
          <Typography variant="h6" align="center">
            TONS OF EQUIPMENT
          </Typography>
          <Typography variant="body2" align="center">
            We have heap of fun piece of equipment to build down every inch of your for body and from boom.
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gridItem}>
          <DirectionsWalkIcon className={classes.icon} />
          <Typography variant="h6" align="center">
            ROWS OF CARDIO
          </Typography>
          <Typography variant="body2" align="center">
            On the Insert tab, the galleries include items that are designed to coordinate with document.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;




