import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../01_global/HeaderLogo';

function ProjectHeader(props) {
  return (
    <header className="project-header">
      <div className="container">
        <div className="header-left">
          <Link to="/">
            <HeaderLogo color={'#888'} />
          </Link>
        </div>
        <nav className="header-center">{/* <h3>{props.title}</h3> */}</nav>
        <div className="header-right">
          <p>
            <Link to="/AboutMore">About me</Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default ProjectHeader;
