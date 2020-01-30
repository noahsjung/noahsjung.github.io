import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderLogo(props) {
  var { color } = props;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  hovered ? (color = '#0171e3') : (color = '#888');

  return (
    <div className="logo">
      {/* <xml version="1.0" encoding="UTF-8" /> */}
      <Link exact to="/">
        <svg
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          width="28px"
          height="28px"
          viewBox="0 0 30 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <polygon
              id="path-1"
              points="0 0.47125 29.791 0.47125 29.791 8.92071177 0 8.92071177"
            ></polygon>
            <polygon
              id="path-3"
              points="0.0252 0.0375 15.7662 0.0375 15.7662 6 0.0252 6"
            ></polygon>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD-Copy-5"
              transform="translate(-464.000000, -2012.000000)"
            >
              <g id="Group-15" transform="translate(464.000000, 2013.000000)">
                <polyline
                  id="Stroke-1"
                  stroke={color}
                  strokeWidth="2.055"
                  points="6.6281 16.311 8.1071 4.021 14.8961 0.181 21.6851 4.021 23.1631 16.311"
                ></polyline>
                <path
                  d="M14.8962,20.7114 L15.3632,21.0034 C18.0262,22.6664 21.1942,23.7254 24.5502,24.1404 C25.8682,22.8634 27.0542,21.3134 27.9742,19.4824 C27.2252,19.4764 26.4752,19.4504 25.7222,19.3834 C21.7962,19.0384 18.0652,17.9224 14.8962,16.1494 C11.7272,17.9224 7.9962,19.0384 4.0672,19.3834 C3.3172,19.4494 2.5672,19.4784 1.8192,19.4844 C2.7382,21.3144 3.9232,22.8634 5.2422,24.1404 C8.5962,23.7254 11.7642,22.6664 14.4292,21.0034 L14.8962,20.7114 Z"
                  id="Fill-3"
                  fill={color}
                ></path>
                <g id="Group-7" transform="translate(0.000000, 8.746200)">
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                  </mask>
                  <g id="Clip-6"></g>
                  <path
                    d="M3.9084,8.8295 C7.7614,8.4905 11.4014,7.3655 14.4354,5.5755 L14.8964,5.3025 L15.3574,5.5755 C18.3904,7.3655 22.0304,8.4905 25.8824,8.8295 C26.8434,8.9135 27.8014,8.9325 28.7544,8.9145 C29.2724,7.4905 29.6474,5.9405 29.7884,4.2295 C29.8314,3.7095 29.3504,3.3065 28.8354,3.3915 C27.2464,3.6535 25.5674,3.7125 23.8374,3.5265 C20.8244,3.2035 18.0574,2.1965 15.7354,0.7195 C15.2164,0.3885 14.5754,0.3885 14.0554,0.7195 C11.7334,2.1965 8.9674,3.2035 5.9544,3.5265 C4.2244,3.7125 2.5454,3.6535 0.9564,3.3915 C0.4414,3.3065 -0.0406,3.7095 0.0024,4.2295 C0.1434,5.9405 0.5184,7.4895 1.0364,8.9135 C1.9904,8.9315 2.9484,8.9115 3.9084,8.8295"
                    id="Fill-5"
                    fill={color}
                    mask="url(#mask-2)"
                  ></path>
                </g>
                <g id="Group-10" transform="translate(7.000000, 22.746200)">
                  <mask id="mask-4" fill="white">
                    <use xlinkHref="#path-3"></use>
                  </mask>
                  <g id="Clip-9"></g>
                  <path
                    d="M7.8962,0.0375 C5.5432,1.4245 2.8612,2.3915 0.0252,2.9165 C2.8112,4.9875 5.8292,6.0005 7.8962,6.0005 C9.9622,6.0005 12.9792,4.9875 15.7662,2.9165 C12.9292,2.3915 10.2472,1.4245 7.8962,0.0375"
                    id="Fill-8"
                    fill={color}
                    mask="url(#mask-4)"
                  ></path>
                </g>
                <line
                  x1="14.8957"
                  y1="0.1806"
                  x2="26.3497"
                  y2="6.6596"
                  id="Stroke-11"
                  stroke={color}
                  strokeWidth="2.055"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="14.8957"
                  y1="0.1806"
                  x2="3.4407"
                  y2="6.6596"
                  id="Stroke-13"
                  stroke={color}
                  strokeWidth="2.055"
                  strokeLinecap="round"
                ></line>
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
}

export default HeaderLogo;
