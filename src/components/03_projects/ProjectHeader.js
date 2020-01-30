import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../01_global/HeaderLogo';

function ProjectHeader(props) {
  return (
    <header className="project-header">
      <div className="container">
        <div className="header-left">
          <Link to="/">
            <HeaderLogo color={'#888'} />
          </Link>
        </div>
        <nav className="header-center">{/* <h4>{props.title}</h4> */}</nav>
        <div className="header-right">
          <h6>
            <Link to="/AboutMore">About me</Link>
          </h6>
        </div>
      </div>
    </header>
  );
}

export default ProjectHeader;
