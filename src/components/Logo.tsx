import React from "react";
import logo from "../assets/img/logo.svg";

function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px'
      }}>
      <img src={logo} alt="hui" style={{maxWidth: '45px', maxHeight: '45px'}}/>
    </div>
  );
}

export default Logo;
