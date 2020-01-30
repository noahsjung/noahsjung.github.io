import React, { useEffect } from 'react';

import HomeHeader from '../components/02_home/HomeHeader';
import RightFixed from '../components/01_global/rightFixed/RightFixed';
import About from '../components/02_home/home_about/About';
import Work from '../components/02_home/home_work/Work';
import Experience from '../components/02_home/home_experience/Experience';
// import Contact from '../01_sections/home_contact/Contact';
import Footer from '../components/01_global/Footer';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
