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

//media-final-design
import feedDetail from '../../images/food-truck-finder/feed-detail.mov';
import hideUninterested from '../../images/food-truck-finder/hide-uninterested.mov';
import toggleListMap from '../../images/food-truck-finder/toggle-list-map.mov';
import feedExplanation from '../../images/food-truck-finder/feed-explanation.png';
import mapExplanation from '../../images/food-truck-finder/map-explanation.png';

import feedToProfile from '../../images/food-truck-finder/feed-profile.mov';
import collapsible from '../../images/food-truck-finder/collapsible.mov';
import menuOverviewReview from '../../images/food-truck-finder/menu-overview-review.mov';
import menuExplain from '../../images/food-truck-finder/profile-menu-explanation.png';
import profileDetailExplain from '../../images/food-truck-finder/profile-detail-explanation.png';
import orderExperience from '../../images/food-truck-finder/order-experience.png';

import searchExperience from '../../images/food-truck-finder/search-experience.mov';
import searchToggle from '../../images/food-truck-finder/search-toggle.mov';

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
        {/* ****************************************************
        ****************************************************
        CHALLENGE************************************************
        ********************************************************
        **************************************************** */}
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
        {/* ****************************************************
        ****************************************************
        CONTEXT************************************************
        ********************************************************
        **************************************************** */}
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
        {/* ****************************************************
        ****************************************************
        DESIGN-EXPLORATION************************************
        ********************************************************
        **************************************************** */}
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
            Making it Pixel Perfect{' '}
            <span className="four-point-grid">(4-point grid system)</span>
          </h3>
          <div className="gc-06 image-container">
            <img src={pixelPerfect} alt="pixelPerfect" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        {/* ****************************************************
        ****************************************************
        FINAL DESIGN ***************************************
        ********************************************************
        **************************************************** */}
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
          <Break />
          <h2 className="gc-004">1.Food Truck Feed</h2>
          <Break />
          <h3 className="gc-001">Considerations</h3>
          <div className="gc-000-3">
            <h5>1. Objective</h5>
            <br />
            <p>
              To help users find/ explore/ compare the food trucks that they are
              interested in.
            </p>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5 className="gc-000-3">2. Important Facts</h5>
            <br />
            <div className="key-things-consider-lists">
              <ol>
                <li className="consider-item">
                  There are only about 185 food trucks in San Francisco, so
                  specific filtering options could result in very few food
                  trucks available to the users.
                </li>
                <li className="consider-item">
                  The primary users - college students and business people -
                  usually want something that they could get quickly that is
                  close by.
                </li>
              </ol>
            </div>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5>3. Questions to Ask</h5>
            <br />
            <div className="question-lists">
              <ol>
                <li className="question-item">
                  How easy it is to sort/filter the food trucks so that users
                  can only see the ones that they like to see and compare?
                </li>
                <li className="question-item">
                  How quickly can users understand the general impression of the
                  food trucks?
                </li>
                <li className="question-item">
                  What are the most essential elements that users want to know
                  before visiting the food truck profile?
                </li>
              </ol>
            </div>
          </div>
          <BreakThree />
          <h3 className="gc-004">Animations</h3>
          <Break />
          <div className="gc-02c video-container">
            <div className="video-wrapper">
              <video
                src={feedDetail}
                alt="feedDetail"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Feed Detail</p>
          </div>
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video
                src={hideUninterested}
                alt="hideUninterested"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Hide Uninterested Food Truck</p>
          </div>
          <div className="gc-000000-2c video-container">
            <div className="video-wrapper">
              <video
                src={toggleListMap}
                alt="toggleListMap"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Toggle Between List and Map</p>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Explanation of the design decisions</h3>
          <div className="gc-06 image-container">
            <img src={feedExplanation} alt="feedExplanation" />
          </div>
          <div className="gc-06 image-container">
            <img src={mapExplanation} alt="mapExplanation" />
          </div>
          <BreakThree />
          <BreakThree />
          <h2 className="gc-004">2.Food Truck Profile</h2>
          <Break />
          <h3 className="gc-001">Considerations</h3>
          <div className="gc-000-3">
            <h5>1. Objective</h5>
            <br />
            <p>
              To help users know better about the food trucks and order foods
              them.
            </p>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5 className="gc-000-3">2. Important Facts</h5>
            <br />
            <div className="key-things-consider-lists">
              <ol>
                <li className="consider-item">
                  There is a lot of information to show in the food truck
                  profile, so deciding what to show first above the fold is
                  important.
                </li>
                <li className="consider-item">
                  Many food trucks already have many social media accounts and
                  websites where they advertise themselves and connect with
                  customers
                </li>
              </ol>
            </div>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5>3. Questions to Ask</h5>
            <br />
            <div className="question-lists">
              <ol>
                <li className="question-item">
                  Can users fully understand the food truck and see its
                  availability?
                </li>
                <li className="question-item">
                  What are the things that users want to know before deciding to
                  order food?
                </li>
                <li className="question-item">
                  What is the best and most effective way to organize the
                  information?
                </li>
              </ol>
            </div>
          </div>
          <BreakThree />
          <h3 className="gc-004">Animations</h3>
          <Break />
          <div className="gc-02c video-container">
            <div className="video-wrapper">
              <video
                src={feedToProfile}
                alt="feedToProfile"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Feed to Profile</p>
          </div>
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video
                src={collapsible}
                alt="collapsible"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Collapsable Header</p>
          </div>
          <div className="gc-000000-2c video-container">
            <div className="video-wrapper">
              <video
                src={menuOverviewReview}
                alt="menuOverviewReview"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Menu, Overview, & Review</p>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Explanation of the design decisions</h3>
          <div className="gc-06 image-container">
            <img src={menuExplain} alt="menuExplain" />
          </div>
          <div className="gc-06 image-container">
            <img src={profileDetailExplain} alt="profileDetailExplain" />
          </div>
          <Break />
          <h5 className="gc-004">Ordering Experience</h5>
          <div className="gc-06 image-container">
            <img src={orderExperience} alt="orderExperience" />
          </div>

          <h2 className="gc-004">3.Search</h2>
          <Break />
          <h3 className="gc-001">Considerations</h3>
          <div className="gc-000-3">
            <h5>1. Objective</h5>
            <br />
            <p>
              To help users find the specific things that they are looking for.
            </p>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5 className="gc-000-3">2. Important Fact</h5>
            <br />
            <p>
              There is a lot of information to show in the food truck profile,
              so deciding what to show first above the fold is important.
            </p>
          </div>
          <Break />
          <div className="gc-000-3">
            <h5>3. Questions to Ask</h5>
            <br />
            <div className="question-lists">
              <ol>
                <li className="question-item">
                  What do users most search for?
                </li>
                <li className="question-item">
                  Does it have similar or same design language as the one in the
                  feed section?
                </li>
              </ol>
            </div>
          </div>

          <h3 className="gc-004">Animations</h3>
          <Break />
          <div className="gc-002c video-container">
            <div className="video-wrapper">
              <video
                src={searchExperience}
                alt="searchExperience"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Searching Experience</p>
          </div>
          <div className="gc-0000-4c video-container">
            <div className="video-wrapper">
              <video
                src={searchToggle}
                alt="searchToggle"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Toggle Between List & Map View</p>
          </div>

          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        {/* ****************************************************
        ****************************************************
        REFLECTIONS************************************************
        ********************************************************
        **************************************************** */}
        <div id="reflections">
          <BreakThree />
          <div className="gc-004 reflections-word">
            <LiquidDistortionText
              id="reflections-word"
              text="RELECTIONS"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h3 className="gc-004">1. User Research/Testing</h3>
          <p className="gc-004">
            Because of the short time frame to work on the project, I could only
            do minimal user research. If more time and resources were given to
            conduct extensive user research, my design choices based on my
            assumptions will be more valid and more convincing.
            <br />
            <br /> If I were to pursue this project further, I will test my
            assumptions. To do so, I will define the success metrics for each
            screen based on the questions I formed while designing and
            conducting user-testings to confirm my decisions and find potential
            improvements.
          </p>
          <Break />
          <h3 className="gc-004">2. Product Benchmarking</h3>
          <p className="gc-004">
            There are many existing products that are in a similar market place;
            apps that help people to search restaurants and order delivery
            foods. Looking at these products, I got inspiration for some
            features that could be modified to be useful in FTF, so that I do
            not have to reinvent the wheel. I also found features that may not
            work well with the FTF because FTF is only focused on mobile food
            trucks. Looking at these products helped me to work very efficiently
            and productively.
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
