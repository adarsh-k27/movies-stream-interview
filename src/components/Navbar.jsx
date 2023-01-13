import React from "react";
import '../css/Navbar.css'
import { ReactButton } from "../components";

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="Bold">Demo Streaming</div>
      <div className='NavBtn'>
        <ReactButton Text={"LOGIN"} Color={"#0094FE"} hover={"#61a0cd"} />
        <ReactButton
          Text={"Start Your Free Trial"}
          Color={"#414141"}
          hover={"#414141c4"}
        />
      </div>
    </div>
  );
}

export default Navbar;
