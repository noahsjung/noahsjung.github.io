import React from 'react';

import { StyledLink } from '../../../styles/02_tools/styled_component/components/Fonts';

function AboutDescription() {
  return (
    <>
      At the intersection between design, technology, and business, I create
      meaningful experiences and intuitive interfaces to make people&apos;s
      lives happier and more efficient.
      <br />
      <br />I have worked at agile startups such as{' '}
      <StyledLink href="https://www.weddell.co/" target="blank">
        Weddell Co.
      </StyledLink>
      ,{' '}
      <StyledLink href="https://www.giantshoulders.co/" target="blank">
        Giant Shoulders
      </StyledLink>
      , and &nbsp;
      <StyledLink href="https://modi.luxrobo.com/" target="blank">
        Luxrobo
      </StyledLink>{' '}
      as a designer to build products from scratch. I am currently looking for
      new opportunities after studying Industrial Design at{' '}
      <StyledLink href="https://www.risd.edu/" target="blank">
        Rhode Island School of Design
      </StyledLink>
      .
    </>
  );
}

export default AboutDescription;
