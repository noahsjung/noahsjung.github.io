import React from 'react';

import HomeHeader from '../components/01_sections/header/HomeHeader';
import RightFixed from '../components/01_sections/rightFixed/RightFixed';
import About from '../components/01_sections/home_about/About';
import Work from '../components/01_sections/home_work/Work';
import Experience from '../components/01_sections/home_experience/Experience';
// import Contact from '../01_sections/home_contact/Contact';
import Footer from '../components/01_sections/footer/Footer';

function Home() {
  return (
    <div className="App">
      <HomeHeader />
      <RightFixed />
      <About />
      <Work />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
