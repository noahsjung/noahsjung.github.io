import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.div`
  margin: 0 auto 50px auto;
  margin-bottom: 75px;
  a {
    background: none;
    text-decoration: none;
  }
  .image {
    margin-left: 50%;
    transform: translateX(-50%);
    border-radius: 0.75rem;
    box-shadow: 1px 2px 5px 3px ${props => props.theme.shadowColor.default};
  }
  .text {
    .title {
      margin: 1.5rem auto 0.5rem 0.3rem;
    }
    .description {
      margin-left: 0.3rem;
      margin-bottom: 1.5rem;
    }
  }

  &:hover {
    .image {
      cursor: pointer;
      top: -10px;
      box-shadow: 1px 2px 5px 3px ${props => props.theme.shadowColor.hovered};
    }
    .text {
      .title {
        color: ${props => props.theme.color.primary};
      }
    }
  }
`;

function WorkBox(props) {
  return <WorkContainer>{props.children}</WorkContainer>;
}

export default WorkBox;
