import React, { useEffect } from 'react';
// import { Spinner } from 'react-spinkit';

//components
import Header from '../../components/01_global/header/Header';
import RightFixed from '../../components/01_global/rightFixed/RightFixed';
import Footer from '../../components/01_global/Footer';
import Break from '../../components/01_global/content_template/Break';

//images

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
          <h1 className="project-name gc-00400">Weddell</h1>

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
                <a href="weddell.co" target="blank">
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
          <h2 className="gc-00400">
            Weddell simplifies the access to parenting contents and baby
            products, so parents can focus on being parents they truly aspire to
            be.
          </h2>
          <Break />
          <Break />
          <h3 className="gc-001">My Role / Responsibility</h3>
          <div className="gc-000-300 responsibilities">
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
          <div className="gc-000-300 problem-lists">
            <ol>
              <li className="problem-item">
                A lot of parents doubt about their readiness for parenthood as
                most of them are first-time parents.
              </li>
              <li className="problem-item">
                Korean mom-cafe, the most popular online platform to share
                parenting information in Korea, has shown a lot of worrisome
                issues including false advertisment and fake reviews.
              </li>
              <li className="problem-item">
                Many Korean parents do not trust mom-cafes anymore.
              </li>
            </ol>
            <br />
            <br />
          </div>
          <h3 className="gc-001">Solution</h3>
          <div className="gc-000-300 goal-lists">
            <h5>01. &nbsp; Curated Contents</h5>
            <p className="solution-description">
              We analyze what is most needed for individual users depending on
              their preferences, sex, ages, etc. and provide curated information
              according to their needs.
            </p>
            <h5>02. &nbsp; Product Recommendation</h5>
            <p className="solution-description">
              Among thousands of products in the market, we recommend products
              with its
            </p>
            <h5>03. &nbsp; Ingredient Analysis</h5>
            <p className="solution-description">
              We analyze what is most needed for individual users and provided
              curated contents that{' '}
            </p>
          </div>
          <Break />
          <Break />
          <h2 className="gc-00400">Overview of Weddell</h2>
        </div>
        <div id="research"></div>
        <div id="design-process"></div>
        <div id="final-design"></div>
        <div id="learnings"></div>
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
