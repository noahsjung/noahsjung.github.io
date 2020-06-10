import React, { useEffect } from 'react';
import { LiquidDistortionText } from 'react-text-fun';
// import { Spinner } from 'react-spinkit';

//styles
import {
  BigHeader,
  MedHeader,
  SmallHeader,
  SmallTitle,
  Title,
  Note,
  SmallParagraph,
  Paragraph,
  StyledLink,
  OrderedList,
  List
} from '../../styles/02_tools/styled_component/components/Fonts';

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
          <BigHeader className="project-name gc-004">
            Food Truck Finder
          </BigHeader>

          <div className="project-details gc-01">
            <div className="project-detail-item">
              <SmallParagraph className="title">Duration</SmallParagraph>
              <Note className="item">10 days</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Tools</SmallParagraph>
              <Note className="item">Sketch</Note>
              <Note className="item">Flinto</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Type</SmallParagraph>
              <Note className="item">Experience Design</Note>
              <Note className="item">UI Animation</Note>
              <Note className="item">
                Design Challenge
                <br />
                (Verizon Media)
              </Note>
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
          <MedHeader className="gc-004">
            Design a Food Truck Finder (FTF) that helps users locate food trucks
            they love, find new food trucks in their area, see menus of those
            food trucks, and pay for their meals using the app.
          </MedHeader>
          <BreakThree />
          <SmallHeader className="gc-004">Requirements</SmallHeader>
          <div className="gc-004 requirements">
            <Paragraph>
              Three screens, plus any supporting sketches or wire frames for the
              food truck feed, a food truck profile, and a search results page.
            </Paragraph>
            <BreakThree />
          </div>
          <SmallHeader className="gc-004">Project Overview</SmallHeader>
          <br />
          <br />
          <Title className="gc-004">01. Food Truck Feed</Title>
          <div className="img-container gc-06">
            <img src={feedOverivew} alt="feedOverivew" />
          </div>
          <BreakThree />
          <BreakThree />

          <Title className="gc-004">02. Food Truck Profile</Title>
          <div className="img-container gc-06">
            <img src={profileOverview} alt="profileOverview" />
          </div>
          <BreakThree />
          <BreakThree />

          <Title className="gc-004">03. Search</Title>
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
          <MedHeader className="gc-004">
            Finding out "Why, Where, When, Who, and What (Five Ws)" of Food
            Trucks.
          </MedHeader>
          <BreakThree />
          <SmallHeader className="gc-001">Why Food Truck?</SmallHeader>
          <div className="gc-000-3 why-food-truck-lists">
            <OrderedList>
              <List className="why-food-truck-item">
                <b>Lower Prices:</b> Food trucks typically offer more affordable
                foods compared to sit-down restaurants.
              </List>
              <List className="why-food-truck-item">
                <b>Convenience:</b> Food Trucks are usually located near popular
                areas, and they offer quick and easy to-go foods.
              </List>
              <List className="why-food-truck-item">
                <b>Sense of Community:</b> Interactions between the owners and
                customers as well as the atmosphere around the food truck create
                a great sense of community.
              </List>
            </OrderedList>
            <BreakThree />
          </div>
          <SmallHeader className="gc-004">Who are the Users?</SmallHeader>
          <div className="gc-004 image-container">
            <img src={users} alt="users" />
          </div>
          <BreakThree />
          <SmallHeader className="gc-001">User Pain Points</SmallHeader>
          <div className="gc-000-3 pain-points-lists">
            <OrderedList>
              <List className="pain-points-item">
                <b>Temporarily Locations:</b> Because food trucks move around,
                users can have a hard time finding their favorite food trucks.
              </List>
              <List className="pain-points-item">
                <b>Unfixed Operation Times:</b> No one wants to waste their time
                going to the food truck to find out that it is closed.
                <br />
                <Note className="notes">
                  *Unfixed operation times usually apply to food trucks that
                  move around a lot.
                </Note>
              </List>
              <List className="pain-points-item">
                <b>Waiting Outside:</b> Customers want to spend less time
                waiting outside especially during bad weather.
              </List>
            </OrderedList>
          </div>

          <BreakThree />
          <SmallHeader className="gc-001">
            User Priorities (Project Goals)
          </SmallHeader>
          <div className="gc-000-3 priorities-lists">
            <OrderedList>
              <List className="priorities-item">
                <b>Locate</b> food truck users love.
              </List>
              <List className="priorities-item">
                <b>Find</b> food trucks in their area.
              </List>
              <List className="priorities-item">
                <b>See</b> menus of those food trucks.
              </List>
              <List className="priorities-item">
                <b>Pay</b> their meals using the app.
              </List>
            </OrderedList>
          </div>
          <BreakThree />

          <SmallHeader className="gc-001">Assumptions</SmallHeader>
          <div className="gc-000-3 priorities-lists">
            <OrderedList>
              <List className="priorities-item">
                The user is already familiar with the area and has his/her own
                favorite food trucks.
              </List>
              <List className="priorities-item">
                The user lives in San Francisco.
                <br />
                (There are around 185 food trucks are in San Francisco.)
              </List>
              <List className="priorities-item">
                Not all menus have pictures.
              </List>
              <List className="priorities-item">
                The location-sharing is on while using the app.
              </List>
              <List className="priorities-item">
                FTF is only for customers. Food truck owners have separate ways
                to manage their businesses.
              </List>
            </OrderedList>
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
            <MedHeader className="gc-004">
              Initial design exploration includes sketches, and wireframes, and
              multiple iterations.
            </MedHeader>
            <BreakThree />
          </div>
          <SmallHeader className="gc-004">Sketches</SmallHeader>
          <div className="gc-06 image-container">
            <img src={sketches} alt="sketches" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">Wireframes</SmallHeader>
          <div className="gc-06 image-container">
            <img src={wireframes} alt="wirframes" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">Iterations</SmallHeader>
          <div className="gc-06 image-container">
            <img src={iterations} alt="iterations" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            Making it Pixel Perfect{' '}
            <span className="four-point-grid">(4-point grid system)</span>
          </SmallHeader>
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
          <MedHeader className="gc-004">01. Food Truck Feed</MedHeader>
          <Break />
          <SmallHeader className="gc-001">Considerations</SmallHeader>
          <div className="gc-000-3">
            <Title>Objective</Title>
            <br />
            <Paragraph>
              To help users find/ explore/ compare the food trucks that they are
              interested in.
            </Paragraph>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title className="gc-000-3">Important Facts</Title>
            <br />
            <div className="key-things-consider-lists">
              <OrderedList>
                <List className="consider-item">
                  There are only about 185 food trucks in San Francisco, so
                  specific filtering options could result in very few food
                  trucks available to the users.
                </List>
                <List className="consider-item">
                  The primary users - college students and business people -
                  usually want something that they could get quickly that is
                  close by.
                </List>
              </OrderedList>
            </div>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title>Questions to Ask</Title>
            <br />
            <div className="question-lists">
              <OrderedList>
                <List className="question-item">
                  How easy it is to sort/filter the food trucks so that users
                  can only see the ones that they like to see and compare?
                </List>
                <List className="question-item">
                  How quickly can users understand the general impression of the
                  food trucks?
                </List>
                <List className="question-item">
                  What are the most essential elements that users want to know
                  before visiting the food truck profile?
                </List>
              </OrderedList>
            </div>
          </div>
          <BreakThree />
          <SmallHeader className="gc-004">Animations</SmallHeader>
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
            <Paragraph className="video-name">Feed Detail</Paragraph>
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
            <Paragraph className="video-name">
              Hide Uninterested Food Truck
            </Paragraph>
          </div>
          <div className="gc-00000-2c video-container">
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
            <Paragraph className="video-name">
              Toggle Between List and Map
            </Paragraph>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            Explanation of the design decisions
          </SmallHeader>
          <div className="gc-06 image-container">
            <img src={feedExplanation} alt="feedExplanation" />
          </div>
          <div className="gc-06 image-container">
            <img src={mapExplanation} alt="mapExplanation" />
          </div>
          <BreakThree />
          <BreakThree />
          <MedHeader className="gc-004">02. Food Truck Profile</MedHeader>
          <Break />
          <SmallHeader className="gc-001">Considerations</SmallHeader>
          <div className="gc-000-3">
            <Title>Objective</Title>
            <br />
            <Paragraph>
              To help users know better about the food trucks and order foods
              from them.
            </Paragraph>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title className="gc-000-3">Important Facts</Title>
            <br />
            <div className="key-things-consider-lists">
              <OrderedList>
                <List className="consider-item">
                  There is a lot of information to show in the food truck
                  profile, so deciding what to show first above the fold is
                  important.
                </List>
                <List className="consider-item">
                  Many food trucks already have many social media accounts and
                  websites where they advertise themselves and connect with
                  customers
                </List>
              </OrderedList>
            </div>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title>Questions to Ask</Title>
            <br />
            <div className="question-lists">
              <OrderedList>
                <List className="question-item">
                  Can users fully understand the food truck and see its
                  availability?
                </List>
                <List className="question-item">
                  What are the things that users want to know before deciding to
                  order food?
                </List>
                <List className="question-item">
                  What is the best and most effective way to organize the
                  information?
                </List>
              </OrderedList>
            </div>
          </div>
          <BreakThree />
          <SmallHeader className="gc-004">Animations</SmallHeader>
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
            <Paragraph className="video-name">Feed to Profile</Paragraph>
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
            <Paragraph className="video-name">Collapsable Header</Paragraph>
          </div>
          <div className="gc-00000-2c video-container">
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
            <Paragraph className="video-name">
              Menu, Overview, & Review
            </Paragraph>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            Explanation of the design decisions
          </SmallHeader>
          <div className="gc-06 image-container">
            <img src={menuExplain} alt="menuExplain" />
          </div>
          <div className="gc-06 image-container">
            <img src={profileDetailExplain} alt="profileDetailExplain" />
          </div>
          <Break />
          <Title className="gc-004">Ordering Experience</Title>
          <div className="gc-06 image-container">
            <img src={orderExperience} alt="orderExperience" />
          </div>

          <MedHeader className="gc-004">03. Search</MedHeader>
          <Break />
          <SmallHeader className="gc-001">Considerations</SmallHeader>
          <div className="gc-000-3">
            <Title>Objective</Title>
            <br />
            <Paragraph>
              To help users find the specific things that they are looking for.
            </Paragraph>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title className="gc-000-3">Important Fact</Title>
            <br />
            <Paragraph>
              Search is under the explore section with the feed, so the
              experience of using search and feed should be consistent.
            </Paragraph>
          </div>
          <Break />
          <div className="gc-000-3">
            <Title>Questions to Ask</Title>
            <br />
            <div className="question-lists">
              <OrderedList>
                <List className="question-item">
                  What do users most search for?
                </List>
                <List className="question-item">
                  Does it have similar or same design language as the one in the
                  feed section?
                </List>
              </OrderedList>
            </div>
          </div>

          <SmallHeader className="gc-004">Animations</SmallHeader>
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
            <Paragraph className="video-name">Searching Experience</Paragraph>
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
            <Paragraph className="video-name">
              Toggle Between List & Map View
            </Paragraph>
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
          <SmallHeader className="gc-004">
            01. User Research/Testing
          </SmallHeader>
          <Paragraph className="gc-004">
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
          </Paragraph>
          <Break />
          <SmallHeader className="gc-004">02. Product Benchmarking</SmallHeader>
          <Paragraph className="gc-004">
            There are many existing products that are in a similar market place;
            apps that help people to search restaurants and order delivery
            foods. Looking at these products, I got inspiration for some
            features that could be modified to be useful in FTF, so that I do
            not have to reinvent the wheel. I also found features that may not
            work well with the FTF because FTF is only focused on mobile food
            trucks. Looking at these products helped me to work very efficiently
            and productively.
          </Paragraph>
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
