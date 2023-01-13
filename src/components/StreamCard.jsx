import React, { useState } from "react";
import "../css/Card.css";
function StreamCard({ data ,index}) {
  const [hover,setHover]=useState(false)
  return (
    <div key={data.title}>
      <div
        className='card-stream'
        onMouseLeave={(e) => {
          e.preventDefault();
          setHover(false);
        }}
        onMouseEnter={(e) => {
          e.preventDefault();
          setHover(true);
        }}
      >
        <img style={{
          opacity: hover && ".7"
        }} src={data?.images["Poster Art"]["url"]}></img>
      </div>
      <div className='stream-text'>
        <p>{data?.title}</p>
      </div>
    </div>
  );
}

export default StreamCard;
