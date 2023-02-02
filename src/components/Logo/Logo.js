import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import "./Logo.css";

const Logo = () => {
  return (
    <div style={{width: '150px'}}>
      <Tilt>
        <div className="logo br2 shadow-2">
          <img src={brain} alt='logo'></img>
        </div>
      </Tilt>
    </div>
  );

}

export default Logo;