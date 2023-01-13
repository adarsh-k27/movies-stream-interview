import React from "react";
import { Selector } from "../components";
import '../css/Home.css'
function Homepage() {
  return (
    <div className="selector-display">
      <Selector text={"Popular Series"} Maintext={"SERIES"} link={'series'} />
      <Selector text={"Popular Movies"} Maintext={"MOVIES"} link={'movie'} />
    </div>
  );
}

export default Homepage;
