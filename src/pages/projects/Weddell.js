import React, { useEffect } from 'react';
import { LiquidDistortionText } from 'react-text-fun';
// import { Spinner } from 'react-spinkit';

//components
import Header from '../../components/01_global/header/Header';
import RightFixed from '../../components/01_global/rightFixed/RightFixed';
import Footer from '../../components/01_global/Footer';
import Break from '../../components/01_global/content_template/Break';

//images-background
import contentCuration from '../../images/weddell/content-curation.png';
import productRecommendation from '../../images/weddell/product-recommendation.png';
import ingredientAnalysis from '../../images/weddell/ingredient-analysis.png';

//images-research
import userJourney from '../../images/weddell/user-journey.png';

//image-design-process
import infoArch from '../../images/weddell/information-architecture.png';
import wireframes from '../../images/weddell/wireframes.png';
import branding from '../../images/weddell/branding.png';
import icons from '../../images/weddell/icons.png';

//image-final-design
import onboarding from '../../images/weddell/onboarding.png';
import questionCardConnect from '../../images/weddell/question-card-connect.png';
import parentingGuide from '../../images/weddell/parenting-guide.png';
import parentingGuide2 from '../../images/weddell/parenting-guide2.png';
import product from '../../images/weddell/product.png';
import productDetail from '../../images/weddell/product-detail.png';
import otherScreens from '../../images/weddell/other-screens.png';

function Weddell() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="weddell">
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
          <h1 className="project-name gc-004">Weddell</h1>

          <div className="project-details gc-01">
            <div className="project-detail-item">
              <h7 className="title">Duration</h7>
              <h6 className="item">3 months</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Role</h7>
              <h6 className="item">Product Designer</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Tools</h7>
              <h6 className="item">Sketch</h6>
              <h6 className="item">Abstract</h6>
              <h6 className="item">InVision</h6>
              <h6 className="item">Miro</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Type</h7>
              <h6 className="item">User Research</h6>
              <h6 className="item">Experience Design</h6>
              <h6 className="item">Interface Design</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Links</h7>
              <h6 className="item">
                <a href="https://www.weddell.co/" target="blank">
                  Website
                </a>
              </h6>
              <h6 className="item">
                <a
                  href="https://play.google.com/store/apps/details?id=co.weddell"
                  target="blank"
                >
                  Android
                </a>
              </h6>
            </div>
          </div>

          <div className="hero-image gc-00-6"></div>
        </div>
        <div id="background">
          <Break />
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
            Weddell simplifies the access to parenting contents and baby
            products, so parents can focus on being parents they truly aspire to
            be.
          </h2>
          <Break />
          <Break />
          <h3 className="gc-001">My Role / Responsibility</h3>
          <div className="gc-000-3 responsibilities">
            <ol>
              <li className="responsibility-item">
                Collaborated with product managers and the developers to bring
                features to life, ensuring deliverables are in-line with users
                and business needs and detailed enough for implementation.
              </li>
              <li className="responsibility-item">
                Led weekly design critiques to bring team back on schedule.
              </li>
              <li className="responsibility-item">
                Designed app architecture, wireframes, usability test plans, and
                final screens of the app.
              </li>
              <li className="responsibility-item">
                Planned and conducted multiple user-researches (surveys and
                interviews).
              </li>
            </ol>
            <br />
            <br />
          </div>
          <h3 className="gc-001">Problems</h3>
          <div className="gc-000-3 problem-lists">
            <ol>
              <li className="problem-item">
                A lot of parents doubt about their readiness for parenthood as
                most of them are first-time parents.
              </li>
              <li className="problem-item">
                Korean mom-cafe, the most popular online platform to share
                parenting information in Korea, has shown a lot of worrisome
                issues including false advertisment and fake reviews in recent
                years.
                <br />
                <a
                  href="http://mn.kbs.co.kr/news/view.do?ncd=4146236"
                  target="blanck"
                >
                  More info (in Korean).
                </a>
              </li>
              <li className="problem-item">
                Many Korean parents do not trust mom-cafes anymore.
              </li>
            </ol>
            <br />
            <br />
          </div>
          <h3 className="gc-004">Solution Overview</h3>
          <Break />

          <h5 className="gc-004">01. Curated Contents</h5>
          <p className="gc-004">
            Weddell analyze what is most needed for individual users depending
            on their preferences, sex, ages, etc. and provide curated
            information according to their needs.
          </p>
          <div className="img-container gc-004">
            <img src={contentCuration} alt="content-curation" />
          </div>
          <Break />

          <h5 className="gc-004">02. &nbsp; Product Recommendation</h5>
          <p className="gc-004">
            For busy and tired parents, we recommend baby products that are
            rigorously tested and approved, so they do not spend much time
            searching.
          </p>
          <div className="img-container gc-004">
            <img src={productRecommendation} alt="product-recommendation" />
          </div>
          <Break />

          <h5 className="gc-004">03. &nbsp; Ingredient Analysis</h5>
          <p className="gc-004">
            Parents are assured about the safety of every product that they buy
            through easy-to-understand and thorough ingredient analysis.
          </p>
          <div className="img-container gc-06">
            <img src={ingredientAnalysis} alt="ingredientAnalysis" />
          </div>
          <Break />
          <Break />
        </div>
        <div id="research">
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
          <Break />
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
            <br />
            <br />
          </div>
          <h3 className="gc-004">User Journey</h3>
          <p className="gc-004">
            We envision that with Weddell, parents spend less time searching for
            information, but rather spend more time with their babies.
          </p>
          <div className="gc-004 image-container">
            <img src={userJourney} alt="user-journey" />
          </div>
        </div>
        <Break />
        <Break />
        <div id="design-process">
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
          </div>
          {/* <h2 className="gc-004"></h2> */}
          <h3 className="gc-004">Information Architecture</h3>
          <div className="gc-004 image-container">
            <img src={infoArch} alt="information-architecture" />
          </div>
          <Break />
          <h3 className="gc-004">Wireframes</h3>
          <div className="gc-004 image-container">
            <img src={wireframes} alt="wirframes" />
          </div>
          <Break />
          <h3 className="gc-004">Branding & User Interface</h3>
          <div className="gc-004 image-container">
            <img src={branding} alt="branding" />
          </div>
          <div className="gc-004 image-container">
            <img src={icons} alt="icons" />
          </div>
        </div>
        <Break />
        <Break />
        <div id="final-design">
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
            the information that users provide, Weddell analyze and provide
            parenting information that are most related to them.
          </p>
          <div className="gc-06 image-container">
            <img src={onboarding} alt="onboarding" />
          </div>
          <Break />
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
          <Break />
          <h3 className="gc-004">3. Product</h3>
          <p className="gc-004">
            Weddell recommends products based on users' need and profile and
            provide essential information about the product. This includes
            summary of the product, ingredients, nutrition facts, sellers,
            similar products, and FAQs.
          </p>
          <div className="gc-06 image-container">
            <img src={product} alt="product" />
          </div>
          <Break />
          <h3 className="gc-004">4. Product Detail</h3>
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
          <Break />
          <h3 className="gc-004">5. Parenting Guide</h3>
          <p className="gc-004">
            Weddell provides two types of parenting guides - baby news (unbiased
            and objective contents) and original contents - based on users'
            profile, interests, and needs. These curated contents will guide
            parents to feel more ready about parenthood.
          </p>
          <div className="gc-06 image-container">
            <img src={parentingGuide} alt="parentingGuide" />
          </div>
          <div className="gc-06 image-container">
            <img src={parentingGuide2} alt="parentingGuide2" />
          </div>
          <Break />
          <h3 className="gc-004">6. Other Screens</h3>
          <div className="gc-06 image-container">
            <img src={otherScreens} alt="other-screens" />
          </div>
          <Break />
          <h3 className="gc-004">7. Prototype</h3>
          <iframe
            className="gc-000-3"
            title="prototype"
            width="442"
            height="935"
            src="//invis.io/FSTLCZKEBVN"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <Break />
        <Break />
        <div id="learnings">
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
      <Footer />
    </div>
  );
}

export default Weddell;

/*
*************************************************************************
**********************using Iframe***************************************
*************************************************************************
class Weddell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, loading: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //loaidng animation while waiting fot the iframe to load
  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  //resize iframe height and width according to the user's window size
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    var Spinner = require('react-spinkit');
    console.log(this.state.loading);
    return (
      <div className="weddell-project">
        <Header />
        <div className="iframe-container">
          {this.state.loading ? (
            <Spinner
              className="loading"
              name="circle"
              color="#0171e3"
              fadeIn="none"
            />
          ) : null}
          <iframe
            src="https://noahsjung.com/works/weddell"
            title="weddell"
            frameBorder="0"
            onLoad={this.hideSpinner}
            width={this.state.width}
            height={this.state.height}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Weddell;
*/
