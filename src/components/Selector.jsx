import React, { useState } from "react";
import "../css/Selector.css";
import clip from "../assets/images/clip.png";
import { Link } from "react-router-dom";
function Selector({ text, Maintext,link }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/stream/${link}`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className='select'
        style={{
          backgroundColor: hover && "rgba(116, 113, 113, 0.30)",
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          setHover(false);
        }}
        onMouseEnter={(e) => {
          e.preventDefault();
          setHover(true);
        }}
      >
        <img src={clip}></img>
        <p className='main-text'>{Maintext}</p>
      </div>
      <div className='text'>{text}</div>
    </Link>
  );
}

export default Selector;
