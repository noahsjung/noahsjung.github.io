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

//images-process
import journeyMap from '../../images/retriever/journey-map.jpg';
import userJourney from '../../images/retriever/user-journey.png';
import marketPositioning from '../../images/retriever/market-positioning.jpg';
import wireframePlayback from '../../images/retriever/wireframe-playback.png';
import wireframeRecording from '../../images/retriever/wireframe-recording.png';

//images-final-design
import microScrolling from '../../images/retriever/micro-scrolling.mp4';
import search from '../../images/retriever/search.mp4';
import keywords from '../../images/retriever/keywords.mp4';
import bookmark from '../../images/retriever/bookmark.mov';
import listing from '../../images/retriever/listing.mov';
import share from '../../images/retriever/Share.mp4';
import otherScreens from '../../images/retriever/other-screens.png';
import UserFlow from '../../images/retriever/user-flow.mov';

function RetrieverApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="retriever">
      <Header
        first="overview"
        second="process"
        // third="wireframes"
        fourth="design"
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
        <div id="overview">
          <BreakThree />
          <div className="gc-004 overview-word">
            <LiquidDistortionText
              id="overview-word"
              text="OVERVIEW"
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
                weekly/monthly critique sessions.
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
          <h3 className="gc-001">Main Challenge</h3>
          <p className="gc-000-3">
            How might we encourage business people to be more engaged in their
            meetings?
          </p>
          <BreakThree />
          <h3 className="gc-004">Solution Overview</h3>
          <br />
          <br />
          <div className="image-container gc-004">
            <img src={solutionOverview} alt="solutionOverview" />
          </div>
          <Break />
          <div className="gc-002">
            <h5>01. Bookmark the important moment during the meeting.</h5>
            <br />
            <p>
              Spend less time writing down notes to remember the detail.
              Instead, just tap a button and bookmark the moment to come back
              later.
            </p>
          </div>
          <div className="gc-0000-2">
            <h5>
              02. Search for a word or phrase to listen again what you/others
              exactly said.
            </h5>
            <br />
            <p>
              Simply type in a word/phrase or click a keyword to fast-forwarded
              to the exact point when it was said.
            </p>
          </div>
          <BreakThree />
          <h3 className="gc-004">How It Works</h3>
          <p className="gc-004">
            Retriever app records meetings and transcribes in the back-end, and
            it uses the transcription as a guide to bring users to the exact
            moment when the certain word/phrase was said so they do not have to
            scrub through the entire recording. Retriever App, however, does not
            display the raw transciption upfront because reading spoken words
            that are full of run-on sentences and grammar errors is a horrible
            experience based on our research.
          </p>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        <div id="process">
          <BreakThree />
          <div className="gc-004 process-word">
            <LiquidDistortionText
              id="process-word"
              text="PROCESS"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h3 className="gc-001">Defining the Users</h3>
          <div className="gc-000-3 users-lists">
            <ol>
              <li className="user-item">Client-facing people</li>
              <li className="user-item">People in group meetings</li>
              <li className="user-item">Interviewers and interviewees</li>
            </ol>
          </div>
          <BreakThree />
          <h3 className="gc-001">User Journey</h3>
          <p className="gc-000-3">
            We drew out the user journey map of before, during and after the
            meeting to find the pain points which lead our team to define our
            main challenge: helping people be more engaged during meeting.
            Furthermore, the user journey map was used as a tool to help
            developers understand better about the problems that we were trying
            to solve.
          </p>
          <Break />
          <h6 className="gc-004 user-journey-note">
            *note: texts with blue square border is where out team is trying to
            target.
          </h6>
          <div className="gc-06 image-container">
            <img src={journeyMap} alt="journeyMap" />
          </div>
          <div className="gc-06 image-container">
            <img src={userJourney} alt="userJourney" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Market Positioning</h3>
          <p className="gc-004">
            Knowing what problems to solve, our team researched existing
            products that try to solve the same problem as us. These products
            include voice recording, note-taking, and audio transcription
            products.
            <br />
            <br /> In order find a competitive edge against these products, our
            team considered where and how to position our product. Hence, we
            made several market maps which are consisted of different
            attributes.{' '}
            <b>
              We found out that there is a missing market space for products
              that are simple yet smart
            </b>
            .
          </p>
          <Break />
          <div className="gc-004 image-container">
            <img src={marketPositioning} alt="marketPositioning" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">Wireframes</h3>
          <h5 className="gc-001">Recording Screen</h5>
          <p className="gc-000-3">
            For the recording screen, our team mainly focused on two different
            aspects. First is bookmarking: how to easily tell users that they
            bookmarked a specific time mark so that it is easy for them to go
            back later. Second is indicating the state of the recording: whether
            they are recording the meeting or they paused the app. The main
            focus of both bookmarking and indicating the state of recording was
            to encourage users to fully engage in their meetings.
          </p>
          <Break />
          <div className="gc-06 image-container">
            <img src={wireframeRecording} alt="wireframeRecording" />
          </div>
          <BreakThree />
          <BreakThree />
          <h5 className="gc-001">Playback Screen</h5>
          <p className="gc-000-3">
            For the playback screen, there were many different types of formats
            that our team and I experimented. We considered the design of the
            timeline and play/pause button (vertical or horizontal) and the
            placement of other features of bookmarks, keywords, and photos. We
            decided that horizontal timeline best utilizes the screen, and only
            the most important features - keywords, playback timeline - should
            appear first. We assumed that secondary features such as showing all
            the bookmarks, entire transcript, and photos could be burdensome to
            users, and we put them in the different sections in the app.
          </p>
          <Break />
          <div className="gc-06 image-container">
            <img src={wireframePlayback} alt="wireframePlayback" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
        {/* <div id="wireframes">
          <BreakThree />
          <div className="gc-004 wireframes-word">
            <LiquidDistortionText
              id="wireframes-word"
              text="WIREFRAMES"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
            <Break />
          </div>
          <h3 className="gc-004">Recording Screens </h3>
          <p className="gc-004">
            Our team focued on the bookmarking and For the recording screen, our
            team mainly focused on two different aspects. First is bookmarking:
            how to easily tell users that they bookmarked a specific time mark
            so that it is easy for them to go back later. Second is indicating
            the state of the recording: whether they are recording the meeting
            or they paused the app. The main focus of both bookmarking and
            indicating the state of recording was to allow users to really
            engage in their meetings.
          </p>
          <BreakThree />
          <BreakThree />
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
        </div> */}
        <div id="design">
          <BreakThree />
          <div className="gc-004 design-word">
            <LiquidDistortionText
              id="design-word"
              text="DESIGN"
              fontFamily="Roboto"
              fontSize={24}
              fill="#c4b2b6"
              speed={0.7}
              volatility={0.04}
            />
          </div>
          <h3 className="gc-004">01. Easily Find That Thing You Said</h3>
          <p className="gc-004">
            Forgot the exact details of what was said? Search for the word or
            phrase in your conversation and the app will bring you there.
          </p>
          <Break />
          <div className="gc-02c video-container">
            <div className="video-wrapper">
              <video
                src={microScrolling}
                alt="microScrolling"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <Break />
            <p className="video-name">Micro-Scrolling</p>
          </div>
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={search} alt="search" loop autoPlay muted></video>
            </div>
            <Break />
            <p className="video-name">Search</p>
          </div>
          <div className="gc-00000-2c video-container">
            <div className="video-wrapper">
              <video src={keywords} alt="keywords" loop autoPlay muted></video>
            </div>
            <Break />
            <p className="video-name">Keywords</p>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">02. Bookmark Key Moments as They Happen</h3>
          <p className="gc-004">
            Hear something important during your meeting? Bookmark it and come
            back to it later.
          </p>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={bookmark} alt="bookmark" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">03. Organize & Search All Your Meeting</h3>
          <p className="gc-004">
            Looking for something and don't know where to start? Sort your
            meetings or simply type in the word you’re looking for.
          </p>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={listing} alt="listing" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">04. Share Meetings With Your Team</h3>
          <p className="gc-004">
            Share your recordings with coworkers, colleagues, and clients to
            simplify post-meeting communication.
          </p>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={share} alt="share" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">05. Other Screens</h3>
          <div className="gc-06 image-container">
            <img src={otherScreens} alt="other-screens" />
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">06. User Flow</h3>
          <div className="gc-06 video-container">
            <div className="video-wrapper">
              <video
                src={UserFlow}
                alt="UserFlow"
                className="user-flow-video"
                loop
                controls
                muted
              ></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <h3 className="gc-004">07. Why Retriever App?</h3>
          <Break />
          <div className="gc-02">
            <h5 className="versus">Retriever vs Recording Apps:</h5>
            <Break />
            <h5 className="versus-sub">
              Let Retriever find key info on your behalf.
            </h5>
            <br />
            <div className="vs">
              <ol>
                <li className="vs-item">
                  Stop scrubbing the audio recordings to find what was said,
                  just search for what was said on Retriever.
                </li>
                <li className="vs-item">
                  Bookmark important moments during your meeting so that you can
                  easily come back to them.
                </li>
              </ol>
            </div>
          </div>
          <div className="gc-000-2">
            <h5 className="versus">Retriever vs Notebook:</h5>
            <Break />
            <h5 className="versus-sub">Let Retriever take notes for you.</h5>
            <br />
            <div className="vs">
              <ol>
                <li className="vs-item">
                  Free yourself to talk with your hands, write on the
                  whiteboard, and engage with your team or client.
                </li>
                <li className="vs-item">
                  Share your Retriever audio and let each meeting participants
                  search, listen, and remember what was said.
                </li>
              </ol>
            </div>
          </div>
          <div className="gc-00000-2">
            <h5 className="versus">Retriever vs Transcriptions:</h5>
            <Break />
            <h5 className="versus-sub">Let Retriever provide the context.</h5>
            <br />
            <div className="vs">
              <ol>
                <li className="vs-item">
                  Search and listen to how an important was delivered to get the
                  correct understanding.
                </li>
                <li className="vs-item">
                  Don't worry about inaccurate transcription, just listen back
                  to the audio.
                </li>
              </ol>
            </div>
          </div>

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
          <h3 className="gc-004">01. Iterate quickly and fail quickly.</h3>
          <p className="gc-004">
            One important lesson that I learned from this project was to iterate
            as much as possible to explore many different options and fail
            quickly to find what works and what does not.
            <br />
            <br /> Moreover, through this project, I learned that being agile,
            especially in the digital industry, can save a lot of time in
            finding the right solution. Also, failure is not always a failure;
            it is always an opportunity to guide me to a better solution.
          </p>
          <Break />
          <h3 className="gc-004">
            02. User research is the key to product success.
          </h3>
          <p className="gc-004">
            Our team did not conduct much user research initially because we
            thought that our assumption of people having bad experiences in
            business meetings is certain from looking at our CEO's and his
            business partners' work life. However, after making our prototype
            and sending out a landing page website, we barely got responses from
            people. Then, we had to stop the project.
            <br />
            <br />
            Although we learned the importance of user research the hard way, I
            now fully understand and acknowledge the importance of initial
            user-research in coming up with the right problem to solve.
          </p>
        </div>
      </section>
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default RetrieverApp;
