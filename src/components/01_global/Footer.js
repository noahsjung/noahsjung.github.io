import React from 'react';

//style
import FooterContainer from '../../styles/02_tools/styled_component/components/FooterContainerStyle';
import {
  Note,
  StyledLink
} from '../../styles/02_tools/styled_component/components/Fonts';

//files
// import resume from '../../files/resume_01.29.20.pdf';

function Footer() {
  return (
    <FooterContainer className="footer">
      <Note className="copyright">
        Copyright © 2020 Noah Jung. <br />
        All rights reserved. <br />
        Developed using React.
      </Note>
      <div className="links">
        <StyledLink href="mailto:noahsjung@gmail.com">Email</StyledLink>
        {/* <StyledLink href={resume} target="blank"> */}
          {/* Resume */}
        {/* </StyledLink> */}
        <StyledLink
          href="https://www.linkedin.com/in/noahsjung/"
          target="blank"
        >
          LinkedIn
        </StyledLink>
      </div>
    </FooterContainer>
  );
}

export default Footer;
