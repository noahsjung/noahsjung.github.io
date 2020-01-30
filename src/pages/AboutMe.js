import React from 'react';

//basic layout
import HomeHeader from '../components/02_home/HomeHeader';
import Footer from '../components/01_global/Footer';

//import from templates
import BasicNoImg from '../components/01_global/content_template/BasicNoImg';
import Break from '../components/01_global/content_template/Break';

//other assets
import noah_photo from '../images/noah_profile.jpg';
import { breakStatement } from '@babel/types';

function AboutMe() {
  return (
    <div className="about-me">
      {/* <AboutHeader /> */}
      <HomeHeader />
      <div className="container">
        <div className="content">
          <img className="noah-photo" src={noah_photo} alt="noah" />
          <BasicNoImg
            heading="Who is Noah?"
            // subheading="Intro"
            description="Hi, my name is Noah! I am a UX designer currently based in Philadelphia. I was born in Mountain View CA, was raised in Seoul Korea, and studied Industrial Design in Providence RI. Through this post, I hope to tell you my story of how I got started in design and became a user experience designer so that you know a little more about myself as a person and a designer. If you want to know more about me, you can contact me directly."
          />
          <Break />
          <BasicNoImg
            subheading="Background"
            description="Growing up, I moved a lot: I lived in a total of 7 different cities. So, I naturally learned to spend much time on my own: playing golf, trying out different Korean food recipes, taking pictures and developing my own film, creating things with my hands, and so on. Eventually, these hobbies became more than just a hobby and have taught me how to express myself creatively and be confident in what I do. Fortunately, I was able to further explore my passion and satisfy my hunger for expressing my creativity at Rhode Island School of Design (RISD), where I received a BFA in Industrial Design in 2019."
          />
          <Break />
          <BasicNoImg
            subheading="Things I Learned from College"
            description="To briefly tell you about RISD, it is a private college in Providence, Rhode Island and is known to have one of the best art and design programs in the world. Coming to RISD, I liked art and design because of the pure joy of making things for myself, and I was very proud of my talent. However, I quickly realized that there are so many people who are better than I am, and making things just for myself can give me only so much joy. Upon that realization, I began to think about what I truly like to do and what I want to become."
          />
          <BasicNoImg description="Although I still don’t have definite answers to the question, RISD has taught me valuable lessons that have formed a clearer path as to what kind of designer I want to become." />{' '}
          <BasicNoImg description="First is that I am always surrounded by the warm support of my friends and family, so even during the hardships I go through, there are always people supporting me and I do not lose my hope. Moreover, I learned that I am truly happy when I return the love that I received from these people and see the appreciation and smile because of the things, objects, or products that I made for them. Knowing this, I made a promise to myself that my mission as a designer is to return the love I receive to others in the world. Lastly, I learned the power of collaboration. Seeing so many talents from RISD and Brown University, which is located right next to RISD, and witnessing so many successful projects done collaborative, I was amazed by the things that people could do together. If my mission is to return the love, as mentioned above, I now believe that team-work is one of the most important components in the work that I do." />
          <Break />
          <BasicNoImg
            subheading="My Hope/Mission"
            description="With the three things that I learned, this is the mission that I set for myself:

I want to serve the people by sharing the same love I received so that more people could have happier lives.

This is also a reason why I became a UX designer, for I believe UX designers understand people the most compared to any other jobs and have the ability to really impact people’s lives directly. In order to pursue this mission and be on my journey of finding whom I truly am, I know that there are still many things I need to do and learn, and this is why I am always searching and trying to learn new things."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
