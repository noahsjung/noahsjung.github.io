import React, { useEffect } from 'react';
import { LiquidDistortionText } from 'react-text-fun';

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
          <BigHeader className="project-name gc-004">Retriver App</BigHeader>

          <div className="project-details gc-01">
            <div className="project-detail-item">
              <SmallParagraph className="title">Duration</SmallParagraph>
              <Note className="item">3 months</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Role</SmallParagraph>
              <Note className="item">Product Designer</Note>
              <Note className="item">Design Intern</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Tools</SmallParagraph>
              <Note className="item">Sketch</Note>
              <Note className="item">Principle</Note>
              <Note className="item">InVision</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Type</SmallParagraph>
              <Note className="item">Experience Design</Note>
              <Note className="item">Interface Design</Note>
            </div>
            <div className="project-detail-item">
              <SmallParagraph className="title">Links</SmallParagraph>
              <Note className="item">
                <StyledLink
                  href="https://www.giantshoulders.co/blog/building-a-better-app-for-meetings?fbclid=IwAR3-jIKwTpZDNT8i6C1ZR0GmkbbDpNPk30REHi2527ZM5X3onb-eZddA9tI"
                  target="blank"
                >
                  Website
                </StyledLink>
              </Note>
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
          <MedHeader className="gc-004">
            Imagine an app that combines the peace of mind of having a recording
            with the ability to search and quickly find details from those
            meetings.
          </MedHeader>
          <BreakThree />
          <SmallHeader className="gc-001">My Role / Responsibility</SmallHeader>
          <div className="gc-000-3 responsibilities">
            <OrderedList>
              <List className="responsibility-item">
                Collaborated with senior designers, pm, and developers during
                weekly/monthly critique sessions.
              </List>
              <List className="responsibility-item">
                Crafted user persona, user journey map, user-flows, wireframes,
                and final prototype.
              </List>
              <List className="responsibility-item">
                Conducted extensive market researches in voice recording,
                note-taking, and transcription services.
              </List>
            </OrderedList>
            <BreakThree />
          </div>
          <SmallHeader className="gc-001">Problems</SmallHeader>
          <div className="gc-000-3 problem-lists">
            <OrderedList>
              <List className="problem-item">
                It is hard to keep track of all of the meetings for many
                business people.
              </List>
              <List className="problem-item">
                During meetings, people need to do a lot of multitasking -
                listening, remembering, speaking, and taking notes - which make
                them hard to be fully engaged.
              </List>
              <List className="problem-item">
                Remembering little details - dates, names, numbers, etc. - is
                very difficult.
              </List>
            </OrderedList>
            <BreakThree />
          </div>
          <SmallHeader className="gc-001">Main Challenge</SmallHeader>
          <Paragraph className="gc-000-3">
            How might we encourage business people to be more engaged in their
            meetings?
          </Paragraph>
          <BreakThree />
          <SmallHeader className="gc-004">Solution Overview</SmallHeader>
          <br />
          <br />
          <div className="image-container gc-004">
            <img src={solutionOverview} alt="solutionOverview" />
          </div>
          <Break />
          <div className="gc-002">
            <Title>01. Bookmark the important moment during the meeting.</Title>
            <br />
            <Paragraph>
              Spend less time writing down notes to remember the detail.
              Instead, just tap a button and bookmark the moment to come back
              later.
            </Paragraph>
          </div>
          <div className="gc-0000-2">
            <Title>
              02. Search for a word or phrase to listen again what you/others
              exactly said.
            </Title>
            <br />
            <Paragraph>
              Simply type in a word/phrase or click a keyword to fast-forwarded
              to the exact point when it was said.
            </Paragraph>
          </div>
          <BreakThree />
          <SmallHeader className="gc-004">How It Works</SmallHeader>
          <Paragraph className="gc-004">
            Retriever app records meetings and transcribes in the back-end, and
            it uses the transcription as a guide to bring users to the exact
            moment when the certain word/phrase was said so they do not have to
            scrub through the entire recording. Retriever App, however, does not
            display the raw transciption upfront because our research have shown
            that users have bad experience of reading spoken words that are full
            of run-on sentences and grammar erros.
          </Paragraph>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">Why Retriever App?</SmallHeader>
          <Break />
          <div className="gc-02 vs-recording">
            <Title className="versus">Retriever vs Recording Apps:</Title>
            <Break />
            <Title className="versus-sub">
              Let Retriever find key info on your behalf.
            </Title>
            <br />
            <div className="vs">
              <OrderedList>
                <List className="vs-item">
                  Stop scrubbing the audio recordings to find what was said,
                  just search for what was said on Retriever.
                </List>
                <List className="vs-item">
                  Bookmark important moments during your meeting so that you can
                  easily come back to them.
                </List>
              </OrderedList>
            </div>
          </div>
          <div className="gc-000-2 vs-notebook">
            <Title className="versus">Retriever vs Notebook:</Title>
            <Break />
            <Title className="versus-sub">
              Let Retriever take notes for you.
            </Title>
            <br />
            <div className="vs">
              <OrderedList>
                <List className="vs-item">
                  Free yourself to talk with your hands, write on the
                  whiteboard, and engage with your team or client.
                </List>
                <List className="vs-item">
                  Share your Retriever audio and let each meeting participants
                  search, listen, and remember what was said.
                </List>
              </OrderedList>
            </div>
          </div>
          <div className="gc-00000-2 vs-transcription">
            <Title className="versus">Retriever vs Transcriptions:</Title>
            <Break />
            <Title className="versus-sub">
              Let Retriever provide the context.
            </Title>
            <br />
            <div className="vs">
              <OrderedList>
                <List className="vs-item">
                  Search and listen to how an important was delivered to get the
                  correct understanding.
                </List>
                <List className="vs-item">
                  Don't worry about inaccurate transcription, just listen back
                  to the audio.
                </List>
              </OrderedList>
            </div>
          </div>
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
          <SmallHeader className="gc-001">Defining the Users</SmallHeader>
          <div className="gc-000-3 users-lists">
            <OrderedList>
              <List className="user-item">Client-facing people</List>
              <List className="user-item">People in group meetings</List>
              <List className="user-item">Interviewers and interviewees</List>
            </OrderedList>
          </div>
          <BreakThree />
          <SmallHeader className="gc-001">User Journey</SmallHeader>
          <Paragraph className="gc-000-3">
            We drew out the user journey map of before, during and after the
            meeting to find the pain points which lead our team to define our
            main challenge: helping people be more engaged during meeting.
            Furthermore, the user journey map was used as a tool to help
            developers understand better about the problems that we were trying
            to solve.
          </Paragraph>
          <Break />
          <Note className="gc-004 user-journey-note">
            *note: texts with blue square border is where out team is trying to
            focused on.
          </Note>
          <div className="gc-06 image-container">
            <img src={journeyMap} alt="journeyMap" />
          </div>
          <div className="gc-06 image-container">
            <img src={userJourney} alt="userJourney" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">Market Positioning</SmallHeader>
          <Paragraph className="gc-004">
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
          </Paragraph>
          <Break />
          <div className="gc-004 image-container">
            <img src={marketPositioning} alt="marketPositioning" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">Wireframes</SmallHeader>
          <Title className="gc-001">Recording Screen</Title>
          <Paragraph className="gc-000-3">
            For the recording screen, our team mainly focused on two different
            aspects. First is bookmarking: how to easily tell users that they
            bookmarked a specific time mark so that it is easy for them to go
            back later. Second is indicating the state of the recording: whether
            they are recording the meeting or they paused the app. The main
            focus of both bookmarking and indicating the state of recording was
            to encourage users to fully engage in their meetings.
          </Paragraph>
          <Break />
          <div className="gc-06 image-container">
            <img src={wireframeRecording} alt="wireframeRecording" />
          </div>
          <BreakThree />
          <BreakThree />
          <Title className="gc-001">Playback Screen</Title>
          <Paragraph className="gc-000-3">
            For the playback screen, there were many different types of formats
            that our team and I experimented. We considered the design of the
            timeline and play/pause button (vertical or horizontal) and the
            placement of other features of bookmarks, keywords, and photos. We
            decided that horizontal timeline best utilizes the screen, and only
            the most important features - keywords, playback timeline - should
            appear first. We assumed that secondary features such as showing all
            the bookmarks, entire transcript, and photos could be burdensome to
            users, and we put them in the different sections in the app.
          </Paragraph>
          <Break />
          <div className="gc-06 image-container">
            <img src={wireframePlayback} alt="wireframePlayback" />
          </div>
          <BreakThree />
          <BreakThree />
          <hr className="gc-06" />
        </div>
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
          <SmallHeader className="gc-004">
            01. Easily Find That Thing You Said
          </SmallHeader>
          <Paragraph className="gc-004">
            Forgot the exact details of what was said? Search for the word or
            phrase in your conversation and the app will bring you there.
          </Paragraph>
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
            <Paragraph className="video-name">Micro-Scrolling</Paragraph>
          </div>
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={search} alt="search" loop autoPlay muted></video>
            </div>
            <Break />
            <Paragraph className="video-name">Search</Paragraph>
          </div>
          <div className="gc-00000-2c video-container">
            <div className="video-wrapper">
              <video src={keywords} alt="keywords" loop autoPlay muted></video>
            </div>
            <Break />
            <Paragraph className="video-name">Keywords</Paragraph>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            02. Bookmark Key Moments as They Happen
          </SmallHeader>
          <Paragraph className="gc-004">
            Hear something important during your meeting? Bookmark it and come
            back to it later.
          </Paragraph>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={bookmark} alt="bookmark" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            03. Organize & Search All Your Meeting
          </SmallHeader>
          <Paragraph className="gc-004">
            Looking for something and don't know where to start? Sort your
            meetings or simply type in the word you’re looking for.
          </Paragraph>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={listing} alt="listing" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">
            04. Share Meetings With Your Team
          </SmallHeader>
          <Paragraph className="gc-004">
            Share your recordings with coworkers, colleagues, and clients to
            simplify post-meeting communication.
          </Paragraph>
          <Break />
          <div className="gc-000-2c video-container">
            <div className="video-wrapper">
              <video src={share} alt="share" loop autoPlay muted></video>
            </div>
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">05. Other Screens</SmallHeader>
          <div className="gc-06 image-container">
            <img src={otherScreens} alt="other-screens" />
          </div>
          <BreakThree />
          <BreakThree />
          <SmallHeader className="gc-004">06. User Flow</SmallHeader>
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
          <SmallHeader className="gc-004">
            01. Iterate quickly and fail quickly.
          </SmallHeader>
          <Paragraph className="gc-004">
            One important lesson that I learned from this project was to iterate
            as much as possible to explore many different options and fail
            quickly to find what works and what does not.
            <br />
            <br /> Moreover, through this project, I learned that being agile,
            especially in the digital industry, can save a lot of time in
            finding the right solution. Also, failure is not always a failure;
            it is always an opportunity to guide me to a better solution.
          </Paragraph>
          <Break />
          <SmallHeader className="gc-004">
            02. User research is the key to product success.
          </SmallHeader>
          <Paragraph className="gc-004">
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
          </Paragraph>
        </div>
      </section>
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default RetrieverApp;
