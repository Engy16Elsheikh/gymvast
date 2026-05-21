
import React from 'react';
import ClassesSection from './components/ourclasses';
import Navbar from './components/Navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import AboutUs from './components/aboutus';
import OurTrainers from './components/OurTrainers.js';
import BmiSection from './components/bmi.js';
import FitnessSection from './components/shop.js';
import SuccessStories from './components/stories.js';
import InformationSection from './components/information.js';



function App() {
  return (
    <div className="App">
      <>
      <Navbar></Navbar>
      
       <AboutUs></AboutUs>
      <ClassesSection/>
      <Header/>
      <OurTrainers></OurTrainers>
      <BmiSection/>
      <FitnessSection></FitnessSection>
      <SuccessStories></SuccessStories>
      <InformationSection></InformationSection>
      <Footer/>
      </>
    </div>
  );
}

export default App;

