import React from 'react';
import { Typography, makeStyles, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@material-ui/core';

// Import background image
import backgroundImage from './contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.avif';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundImage})`, // Set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
  },
  section: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent white background
    marginBottom: theme.spacing(2),
  },
  bmiTable: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'transparent', // Set table background to transparent
  },
  calculateBmi: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
  redText: {
    color: 'red', // Set text color to red
  },
}));

const BmiSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* BMI Table Section */}
        <Grid item xs={6}>
          <Paper className={classes.section}>
            <Typography variant="h6" gutterBottom>BMI Chart</Typography>
            <TableContainer component={Paper} className={classes.bmiTable}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>BMI</TableCell>
                    <TableCell>WEIGHT STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><span className={classes.redText}>Below</span> 18.5</TableCell>
                    <TableCell><span className={classes.redText}>Underrated</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span className={classes.redText}>18.5</span> - 24.9</TableCell>
                    <TableCell><span className={classes.redText}>Healthy</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span className={classes.redText}>25.0</span> - 29.9</TableCell>
                    <TableCell><span className={classes.redText}>Overweight</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><span className={classes.redText}>30</span> and Above</TableCell>
                    <TableCell><span className={classes.redText}>Obese</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        {/* Calculate BMI Section */}
        <Grid item xs={6}>
          <Paper className={classes.section}>
            <Typography variant="h6" gutterBottom>Calculate Your BMI</Typography>
            <Typography variant="body1" paragraph>
              World is committed to making participation in the event a harassment-free experience for everyone, regardless of level of experience.
            </Typography>
            <div className={classes.calculateBmi}>
              <div>
                <TextField label="Height / cm" variant="outlined" />
                <TextField label="Weight / kg" variant="outlined" />
              </div>
              <TextField label="Age" variant="outlined" />
              <Button variant="contained" color="secondary" className={classes.button}>Calculate</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BmiSection;
