import React from "react";
import "./Footer.css";
import header from "../../assets/header.svg";
import ship from "../../assets/ship.png";
function Footer() {
  return (
    <div className="footer">
      
      <div className="left-part">
        <img src={header} alt="header-image" />
        <img
          src={ship}
          alt="curve-image"
          style={{ width: "25px", height: "30px", marginTop: "0.5rem" }}
        />
      </div>

      <div className="right-part">
        <div className="com">
          <p className="heading">Community</p>
          <div>
            <p>Twitter</p>
            <p>Telegram</p>
            <p>Telegram CN</p>
            <p>Dodo</p>
          </div>
        </div>

        <div className="com">
          <div>
            <p>Discord</p>
            <p>YouTube</p>
            <p>Dune Analytics</p>
            <p>Llama Airforce</p>
          </div>
        </div>

        <div className="com">
          <p className="heading">Resources</p>
          <div>
            <p>Whitepaper</p>
            <p>Audits</p>
            <p>Events</p>
            <p>Contracts</p>
          </div>
        </div>

        <div className="com">
          <div>
            <p>Bug Bounty</p>
            <p>FAQ</p>
            <p>Integrations</p>
            <p>Donate</p>
          </div>
        </div>

        <div className="com">
          <div>
            <p>Developer Docs</p>
            <p>News</p>
            <p>Resources</p>
            <p>Github</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
