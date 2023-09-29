/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const circleStyle = {
  width: '6rem',
  height: '6rem',
};

function Circle() {
  return (
    <div>
      <div style={circleStyle} className="circle">
        <CircularProgressbar value={27} />
      </div>
    </div>
  );
}

export default Circle;
