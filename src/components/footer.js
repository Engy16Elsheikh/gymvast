import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography variant="body2" align="left">
            Copyright © 2021 GymVast. All Rights Reserved
          </Typography>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </Link>
          <Link href="#" color="inherit" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </Link>
          <Link href="#" color="inherit" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
