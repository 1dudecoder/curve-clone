import React from "react";
import "./Navbar.css";
import sun from "../../assets/sun.svg";
import bird from "../../assets/bird.svg";
import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";
import discord from "../../assets/discord.svg";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="row">
          <p>Total Deposits: $52,298,698</p>
          <p>Daily Volume: $2,090,379</p>
        </div>
        <div className="row">
          <p>Visit Old UI</p>
          <p>Governance</p>

          <div className="pic">
            <img src={sun} alt="sun-pic" />
          </div>

          <div className="pic">
            <img src={bird} alt="bird-pic" />
          </div>

          <div className="pic">
            <img src={twitter} alt="twitter-pic" />
          </div>

          <div className="pic">
            <img src={github} alt="github-pic" />
          </div>

          <div className="pic">
            <img src={discord} alt="discord-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
