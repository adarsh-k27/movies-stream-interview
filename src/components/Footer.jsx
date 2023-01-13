import React from "react";
import "../css/Footer.css";
import Socials from "./Socials";
function Footer() {
  return (
    <footer className='footer'>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p>
          Home | Terms and Conditions | PrivacyPolicy | collection Statements |
          Help | Manage Account{" "}
        </p>
        <small>
          copyright @ <span style={{ fontFamily: "sans-serif" }}>2016</span>{" "}
          Demo streaming.All Rights Reserved
        </small>
      </div>
      <Socials />
    </footer>
  );
}

export default Footer;
