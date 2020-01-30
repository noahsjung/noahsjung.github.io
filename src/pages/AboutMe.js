import React from 'react';
// import HeadSubImgDes from '../components/';

import HomeHeader from '../components/02_specific/home/HomeHeader';
// import AboutHeader from '';

import noah_photo from '../images/noah_profile.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      {/* <AboutHeader /> */}
      <HomeHeader />
      <div className="content">
        <div className="container">
          <img className="noah-photo" src={noah_photo} alt="noah" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
