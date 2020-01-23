import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <hr />
      <p>Designed and developed by Noah Jung. © 2020</p>
      <div>
        <Link>email</Link>
        <Link>resume</Link>
        <Link>LinkedIn</Link>
      </div>
    </div>
  );
}

export default Footer;
