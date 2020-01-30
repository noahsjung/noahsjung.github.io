import React from 'react';

// import AboutHeader from '';
import HomeHeader from '../components/02_specific/home/HomeHeader';
import BasicNoImg from '../components/01_global/content_template/BasicNoImg';

import noah_photo from '../images/noah_profile.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      {/* <AboutHeader /> */}
      <HomeHeader />
      <div className="content">
        <div className="container">
          <img className="noah-photo" src={noah_photo} alt="noah" />
          <BasicNoImg
            // heading="Who is Noah?"
            subheading="Intro"
            content="Hi, my name is Noah! I am a UX designer currently based in Philadelphia. I was born in Mountain View CA, was raised in Seoul Korea, and studied Industrial Design in Providence RI. Through this post, I hope to tell you my story of how I got started in design and became a user experience designer so that you know a little more about myself as a person and a designer. If you want to know more about me, you can contact me directly."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
