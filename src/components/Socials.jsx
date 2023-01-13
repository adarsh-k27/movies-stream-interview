import React from "react";
import "../css/Social.css";
import facebook from "../assets/store/facebook-blue.svg";
import insta from "../assets/store/instagram-blue.svg";
import twitter from "../assets/store/twitter-blue.svg";
import amazon from "../assets/store/app-store.svg";
import palystore from "../assets/store/play-store.svg";
import windowstore from "../assets/store/windows-store.svg";
function Socials() {
  return (
    <div className='socials '>
      <div style={{ display: "flex", gap: "2rem" }}>
        <img src={facebook} alt='' className='icon' />
        <img src={insta} alt='' className='icon' />
        <img src={twitter} alt='' className='icon' />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <img src={amazon} alt='' className='icon-store' />
        <img src={palystore} alt='' className='icon-store' />
        <img src={windowstore} alt='' className='icon-store' />
      </div>
    </div>
  );
}

export default Socials;
