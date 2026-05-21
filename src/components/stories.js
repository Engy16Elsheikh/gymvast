import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import photo1 from './testimonial-profile-2.png';
import photo2 from './testimonial-profile-1.png';
import photo3 from './testimonial-profile-3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    color: 'red', // Set header color to red
  },
  sliderContainer: {
    margin: 'auto',
    maxWidth: 800,
  },
  slide: {
    padding: theme.spacing(2),
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: 'auto',
    marginBottom: theme.spacing(1),
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  partition: {
    textAlign: 'center',
  },
  story: {
    marginBottom: theme.spacing(1),
  },
}));

const SuccessStories = () => {
  const classes = useStyles();

  // Sample success stories data
  const stories = [
    { story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',name: 'John Doe', partition: 'Fitness Trainer', photo: photo1 },
    { name: 'Jane Smith', partition: 'Yoga Instructor', photo: photo2, story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Alice Johnson', partition: 'Nutritionist', photo: photo3, story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Bob Williams', partition: 'Personal Trainer', photo: photo1, story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>Success Stories</Typography>
      <div className={classes.sliderContainer}>
        <Slider {...sliderSettings}>
          {stories.map((story, index) => (
            <div key={index} className={classes.slide}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1" className={classes.story}>{story.story}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img src={story.photo} alt={story.name} className={classes.photo} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6" className={classes.name}>{story.name}</Typography>
                  <Typography variant="subtitle1" className={classes.partition}>{story.partition}</Typography>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;


