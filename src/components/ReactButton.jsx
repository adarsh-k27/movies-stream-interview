import React, { useState } from "react";
import '../css/Button.css'
function ReactButton({ Text, Color, hover }) {
  const [hoverElement, setHover] = useState(false);

  return (
    <div
    className="Button"
      onMouseEnter={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
      style={{
        cursor: "pointer",
        backgroundColor: hoverElement ? hover : Color,
      }}
    >
      <p>{Text}</p>
    </div>
  );
}

export default ReactButton;
