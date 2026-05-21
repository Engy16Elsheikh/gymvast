import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white', // Set background color to white
    padding: theme.spacing(2), // Add padding for spacing
  },
  redText: {
    color: 'red',
  },
  button: {
    backgroundColor: 'red',
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">
            HELPING YOU TO GO <span className={classes.redText}>SINCE 1971</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            World is committed to making participation in the event harassment free on experience for everyone,
            regardless of level of experience, gender identity and expression, orientation, disability, or personal.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" className={classes.button}>
            Join Classes +
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

