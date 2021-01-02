import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  .st0 {
    fill: #429cd6;
  }
  .st1 {
    fill: #5e5f64;
    stroke: #ffffff;
    stroke-miterlimit: 10;
  }
  .st2 {
    fill: none;
  }
  .st3 {
    fill: #ffffff;
  }
  .st4 {
    font-family: 'Verdana', sans-serif;
  }
  .st5 {
    font-size: 24px;
  }
  .st6 {
    fill: #d3d3d3;
  }
  .st7 {
    fill: #ababab;
  }
`;

const HeroImage = () => (
  <SVG
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 792 612"
    xmlSpace="preserve"
  >
    <path
      className="st0"
      d="M442,161.4V264c0,6.6-5.4,12-12,12H96l-52.8,30L84,245.2v-83.7c0-6.6,5.4-12,12-12h334
C436.6,149.4,442,154.8,442,161.4z"
    />
    <path
      className="st1"
      d="M345.1,352v102.6c0,6.6,5.4,12,12,12h334l52.8,30l-40.8-60.8V352c0-6.6-5.4-12-12-12h-334
C350.5,340,345.1,345.4,345.1,352z"
    />
    <g>
      <path
        className="st2"
        d="M401.1,276H113.9c-6.6,0-12-5.4-12-12V158.7c0-6.6,5.4-12,12-12h287.2c6.6,0,12,5.4,12,12V264
		C413.1,270.6,407.7,276,401.1,276z"
      />
      <text transform="matrix(1 0 0 1 101.9203 192.5823)">
        <tspan x="0" y="0" className="st3 st4 st5">
          Por iu tiel malbonŝanca en{' '}
        </tspan>
        <tspan x="0" y="28.8" className="st3 st4 st5">
          amo, vi pensus ke mi pli{' '}
        </tspan>
        <tspan x="0" y="57.6" className="st3 st4 st5">
          bonŝance malamus!
        </tspan>
      </text>
    </g>
    <circle className="st3" cx="574.3" cy="403.3" r="15.1" />
    <circle className="st6" cx="520" cy="403.3" r="15.1" />
    <circle className="st7" cx="466.7" cy="403.3" r="15.1" />
  </SVG>
);

export default HeroImage;
