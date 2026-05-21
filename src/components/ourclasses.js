import React, { useState } from 'react';
import image1 from './Web-Image-_Feature-image-430x520px-Grit-strength.jpg';
import yogaImage from './yoga.jpg';
import image3 from './zumba-classes-for-beginners-near-me-blawnox.jpg';
import image4 from "./images.jpg";
import image5 from './testimonial_image_1.png';
import image6 from './images (1).jpg';
import { Typography, Card, CardContent, Button, Grid } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; 
import SpaIcon from '@mui/icons-material/Spa'; 
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cardStyle = {
  width: '250px', 
  height: '300px', 
  margin: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s, filter 0.3s',
  cursor: 'pointer',
  position: 'relative',
  borderRadius: '5px',
};

const iconContainerStyle = {
  background: 'rgba(0, 0, 0, 0.5)', 
  borderRadius: '50%',
  padding: '10px', // Decreased padding
  marginBottom: '10px',
};

const iconStyle = {
  color: 'white',
  fontSize: '40px', 
};

const ClassesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const gymClasses = [
    { name: 'GRIT STRENGTH', description: 'We have heap of fun piece of equipment to build down every inch of your body.', icon: <FitnessCenterIcon style={iconStyle} />, backgroundImage: image1},
    { name: 'Yoga', description: 'A peaceful way to stretch and relax your body and mind.', icon: <SpaIcon style={iconStyle} />, backgroundImage: yogaImage },
    { name: 'Zumba', description: 'A fun dance workout to energetic music.', backgroundImage: image3, icon: <BubbleChartIcon style={iconStyle} /> },  
    { name: 'MEDITATION', description: 'We have heap of fun piece of equipment to build down every inch of your body.', icon: <NaturePeopleIcon style={iconStyle} />, backgroundImage: image4 },  
    { name: 'CLIMB INDUCTION', description: 'A fun dance workout to energetic music.', icon: <DirectionsRunIcon style={iconStyle} />, backgroundImage: image5 },  
    { name: 'PUNCH BOXING', description: 'A fun dance workout to energetic music.', backgroundImage: image6, icon: <DirectionsRunIcon style={iconStyle} />,  },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Our Classes</Typography>
      <Typography variant="body1">
        World is committed to making participation in the event a harassment free experience for everyone,
        regardless of level of experience.
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {gymClasses.map((classItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              style={{
                ...cardStyle,
                backgroundImage: `url(${classItem.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: hoveredIndex === index ? 'opacity(0.7)' : 'opacity(1)',
                transform: hoveredIndex === index ? 'scale(0.95)' : 'scale(1)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent style={{ position: 'absolute', bottom: '10px', opacity: hoveredIndex === index ? '1' : '0', transition: 'opacity 0.3s' }}>
                <div>
                  <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                    {classItem.description}
                  </Typography>
                  <Button variant="contained" color="error" endIcon={<ArrowForwardIcon />}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
              <div style={iconContainerStyle}>
                {classItem.icon}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClassesSection;



