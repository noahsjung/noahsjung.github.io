import React, { useEffect } from 'react';
import { LiquidDistortionText } from 'react-text-fun';
// import { Spinner } from 'react-spinkit';

//components
import Header from '../../components/01_global/header/Header';
import RightFixed from '../../components/01_global/rightFixed/RightFixed';
import OtherProjects from '../../components/03_projects/OtherProjects';
import Footer from '../../components/01_global/Footer';
import Break from '../../components/01_global/content_template/Break';
import BreakThree from '../../components/01_global/content_template/BreakThree';

//images-challenge
import feedOverivew from '../../images/food-truck-finder/feed-overview.png';
import profileOverview from '../../images/food-truck-finder/profile-overview.png';
import searchOverview from '../../images/food-truck-finder/search-overview.png';

//images-context
import users from '../../images/food-truck-finder/users.png';

//images-design-exploration
import sketches from '../../images/food-truck-finder/sketches.png';
import wireframes from '../../images/food-truck-finder/wireframes.png';
import iterations from '../../images/food-truck-finder/iterations.png';
import pixelPerfect from '../../images/food-truck-finder/pixel-perfect.png';

//images-final-design
import onboarding from '../../images/weddell/onboarding.png';
import questionCardConnect from '../../images/weddell/question-card-connect.png';
import parentingGuide from '../../images/weddell/parenting-guide.png';
import parentingGuide2 from '../../images/weddell/parenting-guide2.png';
import product from '../../images/weddell/product.png';
import productDetail from '../../images/weddell/product-detail.png';
import otherScreens from '../../images/weddell/other-screens.png';

function FoodTruck() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="food-truck">
      <Header
        first="challenge"
        second="context"
        third="design-exploration"
        fourth="final-design"
        fifth="reflections"
      />

      <RightFixed />

      <section className="grid-wrapper">
        <div id="introduction">
          <h1 className="project-name gc-004">Food Truck Finder</h1>

          <div className="project-details gc-01">
            <div className="project-detail-item">
              <h7 className="title">Duration</h7>
              <h6 className="item">10 days</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Tools</h7>
              <h6 className="item">Sketch</h6>
              <h6 className="item">Flinto</h6>
            </div>
            <div className="project-detail-item">
              <h7 className="title">Type</h7>
              <h6 className="item">Experience Design</h6>
              <h6 className="item">UI Animation</h6>
              <h6 className="item">
                Design Challenge
                <br />
                (Verizon Media)
              </h6>
            </div>
          </div>
          <div className="hero-image gc-00-6"></div>
        </div>
        <div id="challenge">
          <BreakThree />
          <div className="gc-004 challenge-word">
            <LiquidDistortionText
              id="challenge-word"
              text="CHALLENGE"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h2 className="gc-004">
            Design a Food Truck Finder (FTF) that helps users locate food trucks
            they love, find new food trucks in their area, see menus of those
            food trucks, and pay for their meals using the app.
          </h2>
          <BreakThree />
          <h3 className="gc-004">Requirements</h3>
          <div className="gc-004 requirements">
            <p>
              Three screens, plus any supporting sketches or wire frames for the
              food truck feed, a food truck profile, and a search results page.
            </p>
            <BreakThree />
          </div>
          <h3 className="gc-004">Project Overview</h3>
          <br />
          <br />
          <h5 className="gc-004">01. Food Truck Feed</h5>
          <div className="img-container gc-06">
            <img src={feedOverivew} alt="feedOverivew" />
          </div>
          <BreakThree />
          <BreakThree />

          <h5 className="gc-004">02. Food Truck Profile</h5>
          <div className="img-container gc-06">
            <img src={profileOverview} alt="profileOverview" />
          </div>
          <BreakThree />
          <BreakThree />

          <h5 className="gc-004">03. Search</h5>
          <div className="img-container gc-06">
            <img src={searchOverview} alt="searchOverview" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="context">
          <BreakThree />
          <div className="gc-004 context-word">
            <LiquidDistortionText
              id="context-word"
              text="CONTEXT"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h2 className="gc-004">
            Finding out "Why, Where, When, Who, and What (Five Ws)" of Food
            Trucks.
          </h2>
          <BreakThree />
          <h3 className="gc-001">Why Food Truck?</h3>
          <div className="gc-000-3 why-food-truck-lists">
            <ol>
              <li className="why-food-truck-item">
                <b>Lower Prices:</b> Food trucks typically offer more affordable
                foods compared to sit-down restaurants.
              </li>
              <li className="why-food-truck-item">
                <b>Convenience:</b> Food Trucks are usually located near popular
                areas, and they offer quick and easy to-go foods.
              </li>
              <li className="why-food-truck-item">
                <b>Sense of Community:</b> Interactions between the owners and
                customers as well as the atmosphere around the food truck create
                a great sense of community.
              </li>
            </ol>
            <BreakThree />
          </div>
          <h3 className="gc-004">Who are the Users?</h3>
          <div className="gc-004 image-container">
            <img src={users} alt="users" />
          </div>
          <BreakThree />
          <h3 className="gc-001">User Pain Points</h3>
          <div className="gc-000-3 pain-points-lists">
            <ol>
              <li className="pain-points-item">
                <b>Temporarily Locations:</b> Because food trucks move around,
                users can have a hard time finding their favorite food trucks.
              </li>
              <li className="pain-points-item">
                <b>Unfixed Operation Times:</b> No one wants to waste their time
                going to the food truck to find out that it is closed.
                <br />
                <h6 className="notes">
                  *Unfixed operation times usually apply to food trucks that
                  move around a lot.
                </h6>
              </li>
              <li className="pain-points-item">
                <b>Waiting Outside:</b> Customers want to spend less time
                waiting outside especially during bad weather.
              </li>
            </ol>
          </div>

          <BreakThree />
          <h3 className="gc-001">User Priorities (Project Goals)</h3>
          <div className="gc-000-3 priorities-lists">
            <ol>
              <li className="priorities-item">
                <b>Locate</b> food truck users love.
              </li>
              <li className="priorities-item">
                <b>Find</b> food trucks in their area.
              </li>
              <li className="priorities-item">
                <b>See</b> menus of those food trucks.
              </li>
              <li className="priorities-item">
                <b>Pay</b> their meals using the app.
              </li>
            </ol>
          </div>
          <BreakThree />

          <h3 className="gc-001">Assumptions</h3>
          <div className="gc-000-3 priorities-lists">
            <ol>
              <li className="priorities-item">
                The user is already familiar with the area and has his/her own
                favorite food trucks.
              </li>
              <li className="priorities-item">
                The user lives in San Francisco.
                <br />
                (There are around 185 food trucks are in San Francisco.)
              </li>
              <li className="priorities-item">Not all menus have pictures.</li>
              <li className="priorities-item">
                The location-sharing is on while using the app.
              </li>
              <li className="priorities-item">
                FTF is only for customers. Food truck owners have separate ways
                to manage their businesses.
              </li>
            </ol>
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="design-exploration">
          <BreakThree />
          <div className="gc-004 exploration-word">
            <LiquidDistortionText
              id="exploration-word"
              text="DESIGN EXPLORATION"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
            <Break />
            <h2 className="gc-004">
              Initial design exploration includes sketches, and wireframes, and
              multiple iterations.
            </h2>
            <BreakThree />
          </div>
          <h3 className="gc-004">Sketches</h3>
          <div className="gc-06 image-container">
            <img src={sketches} alt="sketches" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Wireframes</h3>
          <div className="gc-06 image-container">
            <img src={wireframes} alt="wirframes" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Iterations</h3>
          <div className="gc-06 image-container">
            <img src={iterations} alt="iterations" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">
            Pixel Perfect{' '}
            <span className="four-point-grid">(4-point grid system)</span>
          </h3>
          <div className="gc-06 image-container">
            <img src={pixelPerfect} alt="pixelPerfect" />
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
            the information that users provide, Weddell analyze and provide
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
            frameborder="0"
            allowfullscreen
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

export default FoodTruck;

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
