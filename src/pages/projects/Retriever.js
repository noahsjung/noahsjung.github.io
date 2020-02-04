import React, { useEffect } from 'react';
import { LiquidDistortionText } from 'react-text-fun';

//components
import Header from '../../components/01_global/header/Header';
import RightFixed from '../../components/01_global/rightFixed/RightFixed';
import OtherProjects from '../../components/03_projects/OtherProjects';
import Footer from '../../components/01_global/Footer';
import Break from '../../components/01_global/content_template/Break';
import BreakThree from '../../components/01_global/content_template/BreakThree';

//images-background
import solutionOverview from '../../images/retriever/solution-overview.jpg';

import contentCuration from '../../images/weddell/content-curation.png';
import productRecommendation from '../../images/weddell/product-recommendation.png';
import ingredientAnalysis from '../../images/weddell/ingredient-analysis.png';

//images-research
import userJourney from '../../images/weddell/user-journey.png';

//images-design-process
import infoArch from '../../images/weddell/information-architecture.png';
import wireframes from '../../images/weddell/wireframes.png';
import branding from '../../images/weddell/branding.png';
import icons from '../../images/weddell/icons.png';

//images-final-design
import onboarding from '../../images/weddell/onboarding.png';
import questionCardConnect from '../../images/weddell/question-card-connect.png';
import parentingGuide from '../../images/weddell/parenting-guide.png';
import parentingGuide2 from '../../images/weddell/parenting-guide2.png';
import product from '../../images/weddell/product.png';
import productDetail from '../../images/weddell/product-detail.png';
import otherScreens from '../../images/weddell/other-screens.png';

function RetrieverApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="retriever">
      <Header
        first="background"
        second="research"
        third="design-process"
        fourth="final-design"
        fifth="learnings"
      />

      <RightFixed />

      <section className="grid-wrapper">
        <div id="introduction">
          <h1 className="project-name gc-004">Retriver App</h1>

          <div className="project-details gc-01">
            <div className="project-detail-item">
              <h7 className="title">Duration</h7>
              <h6 className="item">3 months</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Role</h7>
              <h6 className="item">Product Designer</h6>
              <h6 className="item">Design Intern</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Tools</h7>
              <h6 className="item">Sketch</h6>
              <h6 className="item">Principle</h6>
              <h6 className="item">InVision</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Type</h7>
              <h6 className="item">Experience Design</h6>
              <h6 className="item">Interface Design</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Links</h7>
              <h6 className="item">
                <a
                  href="https://www.giantshoulders.co/blog/building-a-better-app-for-meetings?fbclid=IwAR3-jIKwTpZDNT8i6C1ZR0GmkbbDpNPk30REHi2527ZM5X3onb-eZddA9tI"
                  target="blank"
                >
                  Website
                </a>
              </h6>
            </div>
          </div>

          <div className="hero-image gc-00-6"></div>
        </div>
        <div id="background">
          <BreakThree />
          <div className="gc-004 background-word">
            <LiquidDistortionText
              id="background-word"
              text="BACKGROUND"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h2 className="gc-004">
            Imagine an app that combines the peace of mind of having a recording
            with the ability to search and quickly find details from those
            meetings.
          </h2>
          <BreakThree />
          <h3 className="gc-001">My Role / Responsibility</h3>
          <div className="gc-000-3 responsibilities">
            <ol>
              <li className="responsibility-item">
                Collaborated with senior designers, pm, and developers during
                weekly critique sessions.
              </li>
              <li className="responsibility-item">
                Crafted user persona, user journey map, user-flows, wireframes,
                and final prototype.
              </li>
              <li className="responsibility-item">
                Conducted extensive market researches in voice recording,
                note-taking, and transcription services.
              </li>
            </ol>
            <BreakThree />
          </div>
          <h3 className="gc-001">Problems</h3>
          <div className="gc-000-3 problem-lists">
            <ol>
              <li className="problem-item">
                It is hard to keep track of all of the meetings for many
                business people.
              </li>
              <li className="problem-item">
                During meetings, people need to do a lot of multitasking -
                listening, remembering, speaking, and taking notes - which make
                them hard to be fully engaged.
              </li>
              <li className="problem-item">
                Remembering little details - dates, names, numbers, etc. - is
                very difficult.
              </li>
            </ol>
            <BreakThree />
          </div>
          <h3 className="gc-004">Solution Overview</h3>
          <br />
          <br />
          <div className="image-container gc-004">
            <img src={solutionOverview} alt="solutionOverview" />
          </div>
          <div className="gc-002">
            <h5>01. Bookmark the important moment during the meeting.</h5>
            <br />
            <p>
              Users can also bookmark important moments during your meeting so
              that you can easily come back to them.
            </p>
          </div>
          <div className="gc-0000-2">
            <h5>02. Search for a word or phrase.</h5>
            <br />
            <p>
              Using Retriever App, you don't have to worry about remembering
              every little detail from the meetings. You can easily find them
              later when you want to go back. So, all you need to do is fully
              engage in your meetings and not worry.
            </p>
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="research">
          <BreakThree />
          <div className="gc-004 research-word">
            <LiquidDistortionText
              id="research-word"
              text="RESEARCH"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h2 className="gc-004">
            The user research was conducted to validate the problems and help
            crafting persona and user-journey.
          </h2>
          <BreakThree />
          <h3 className="gc-001">Findings</h3>
          <div className="gc-000-3 research-finding-lists">
            <ol>
              <li className="research-finding-item">
                <b>Simple and easy to use services</b> are most sought after
                among Korean moms.
              </li>
              <li className="research-finding-item">
                <b>Safety</b> is the most important buying factor when
                purchasing baby products.
              </li>
              <li className="research-finding-item">
                <b>Ingredients and user-reviews</b> are checked to confirm the
                safety of baby products.
              </li>
              <li className="research-finding-item">
                <b>Difficult scientific terminologies</b> of ingredients in baby
                products make parents hard to understand about the products.
              </li>
              <li className="research-finding-item">
                Many parents have <b>lost their trust in mom-cafes</b>, but they
                still use them because there is <b>no other alternative</b>.
              </li>
            </ol>
            <BreakThree />
          </div>
          <h3 className="gc-004">User Journey</h3>
          <p className="gc-004">
            With Weddell, parents spend less time searching for information, but
            rather spend more time with their babies.
          </p>
          <div className="gc-004 image-container">
            <img src={userJourney} alt="user-journey" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="design-process">
          <BreakThree />
          <div className="gc-004 process-word">
            <LiquidDistortionText
              id="process-word"
              text="DESIGN PROCESS"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
            <Break />
          </div>
          {/* <h2 className="gc-004"></h2> */}
          <h3 className="gc-004">Information Architecture</h3>
          <div className="gc-004 image-container">
            <img src={infoArch} alt="information-architecture" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Wireframes</h3>
          <div className="gc-004 image-container">
            <img src={wireframes} alt="wirframes" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Branding & User Interface</h3>
          <div className="gc-004 image-container">
            <img src={branding} alt="branding" />
          </div>
          <div className="gc-004 image-container">
            <img src={icons} alt="icons" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="final-design">
          <BreakThree />
          <div className="gc-004 final-word">
            <LiquidDistortionText
              id="final-word"
              text="FINAL DESIGN"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h3 className="gc-004">1.Onboarding</h3>
          <p className="gc-004">
            Users first go through a delightful onboarding process, and based on
            the information that users provide, Weddell analyzes and provides
            parenting information that are most related to them.
          </p>
          <div className="gc-06 image-container">
            <img src={onboarding} alt="onboarding" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">
            2. Question Cards & Connecting Users with Similar Interests
          </h3>
          <p className="gc-004">
            To deeper understand each individual user's needs and wants, Weddell
            asks short and easy questions that users can quickly answer. Based
            on the user's answer, Weddell also connects users with others who
            have similar interests.
          </p>
          <div className="gc-06 image-container">
            <img src={questionCardConnect} alt="questionCardConnect" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">3. Parenting Guide</h3>
          <p className="gc-004">
            Weddell provides Three types of parenting guides - baby news
            (unbiased and objective contents) and original contents - based on
            users' profile, interests, and needs. These curated contents will
            guide parents to feel more ready about parenthood.
          </p>
          <div className="gc-06 image-container">
            <img src={parentingGuide} alt="parentingGuide" />
          </div>
          <div className="gc-06 image-container">
            <img src={parentingGuide2} alt="parentingGuide2" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">4. Product</h3>
          <p className="gc-004">
            Weddell recommends products based on users' need and profile and
            provide essential information about the product. This includes
            summary of the product, ingredients, nutrition facts, sellers,
            similar products, and FAQs.
          </p>
          <div className="gc-06 image-container">
            <img src={product} alt="product" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">5. Product Detail</h3>
          <p className="gc-004">
            To solve the problem of difficult terminologies of ingredients and
            help educate users, Weddell visualizes the ingredient information
            based on{' '}
            <a
              href="https://www.ewg.org/release/ewg-s-food-scores-helps-people-find-out-what-s-really-their-food"
              target="blank"
            >
              EWG score
            </a>
            .
          </p>
          <div className="gc-06 image-container">
            <img src={productDetail} alt="productDetail" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">6. Other Screens</h3>
          <div className="gc-06 image-container">
            <img src={otherScreens} alt="other-screens" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">7. Prototype</h3>
          <iframe
            className="gc-000-3"
            title="prototype"
            width="442"
            height="935"
            src="//invis.io/FSTLCZKEBVN"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="learnings">
          <BreakThree />
          <div className="gc-004 learning-word">
            <LiquidDistortionText
              id="learning-word"
              text="LEARNINGS"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h3 className="gc-004">
            1. The best design comes from the intersection of business, design,
            and technology.
          </h3>
          <p className="gc-004">
            Working closely with the CEO, the PM, the Design Director, and
            Developers, I realized that understanding business goals and
            technology limitations is a crucial part of UX design. Designing a
            product that brings no business value or that is too difficult to
            build is meaningless.
            <br />
            <br /> Moreover, working with developers for the first time, I not
            only had to clearly explain my design decisions to them, keeping the
            library of design assets (even the names) was important. This
            allowed me to design systematically and meticulously.
          </p>
          <Break />
          <h3 className="gc-004">
            2. I need to answer the "why" on my design decisions.
          </h3>
          <p className="gc-004">
            Collaborating with other people, there were many times I had to
            explain my design decisions and why I made that design in order to
            convince them. This helped me to practice designing with
            intentionality.
          </p>
        </div>
      </section>
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default RetrieverApp;
