import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// Import logo image
import logo from  './white-header-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgray',
    color: 'white',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
  infoText: {
    marginBottom: theme.spacing(2),
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: 'red',
    marginRight: theme.spacing(1),
  },
  pagesContainer: {
    marginBottom: theme.spacing(4),
  },
  column: {
    textAlign: 'left',
  },
  newsletterContainer: {
    marginBottom: theme.spacing(2),
  },
  newsletterHeader: {
    marginBottom: theme.spacing(1),
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    border: '1px solid white',
    backgroundColor: 'transparent',
    color: 'white',
  },
}));

const InformationSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* First Section */}
      <div>
        <img src={logo} alt="GymVast Logo" className={classes.logo} />
        <Typography variant="body1" className={classes.infoText}>
          We have a heap of fun piece of equipment that builds down every inch of your body and form body builders.
          GymVast, location: 18 East 50th Street, 4th Floor, New York, NY 10022.
        </Typography>
        <div className={classes.contactInfo}>
          <LocationOnIcon className={classes.icon} />
          <Typography variant="body2">18 East 50th Street, 4th Floor, New York, NY 10022</Typography>
        </div>
        <div className={classes.contactInfo}>
          <PhoneIcon className={classes.icon} />
          <Typography variant="body2">(123) 498-4600</Typography>
        </div>
        <div className={classes.contactInfo}>
          <MailOutlineIcon className={classes.icon} />
          <Typography variant="body2">info@gymvast.com</Typography>
        </div>
      </div>

      {/* Second Section */}
      <div className={classes.pagesContainer}>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.column}>
            <Typography variant="h6">PAGES</Typography>
            <ul>
              <li>About</li>
              <li>Schedule</li>
              <li>Pricing</li>
              <li>BMI</li>
              <li>Testimonials</li>
            </ul>
          </Grid>
          <Grid item xs={6} className={classes.column}>
            <Typography variant="h6">SHOP</Typography>
            <ul>
              <li>Services</li>
              <li>Single Service</li>
              <li>Trainers</li>
              <li>Contact us</li>
            </ul>
          </Grid>
        </Grid>
      </div>

      {/* Third Section */}
      <div className={classes.newsletterContainer}>
        <Typography variant="h6" className={classes.newsletterHeader}>Newsletter</Typography>
        <Typography variant="body2">
          Subscribe to our Newsletter to be updated. We promise not to spam.
        </Typography>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Your Name" className={classes.input} />
          <input type="text" placeholder="Subscribe" className={classes.input} />
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
