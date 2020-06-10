import React, { useEffect } from 'react';

//styles
import HomeContainer from '../styles/02_tools/styled_component/components/HomeContainerStyle';

//components
import Header from '../components/01_global/header/Header';
import RightFixed from '../components/01_global/rightFixed/RightFixed';
import About from '../components/02_home/home_about/About';
import Work from '../components/02_home/home_work/Work';
import Experience from '../components/02_home/home_experience/Experience';
import Footer from '../components/01_global/Footer';

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HomeContainer className="home">
        <Header first="about" second="work" third="experience" />
        <RightFixed />
        <About />
        <Work />
        <Experience />
        <Footer />
      </HomeContainer>
    </>
  );
}

export default Home;
