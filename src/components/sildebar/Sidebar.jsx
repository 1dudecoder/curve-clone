import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import curve from "../../assets/curve.svg";
import down from "../../assets/down.svg";
import sun from "../../assets/sun.svg";
import ship from "../../assets/ship.png";
import reddot from "../../assets/reddot.svg";
import green from "../../assets/green.svg";
import { Link } from "react-router-dom";

function Sidebar({ sidebarState, setSidebarState ,
    isConnected, setIsConnected, connectWallet,accountAddress
}) {
  return (
    <div className="main-sidebar">
      <div
        className="sidebar-container"
        style={{ display: `${sidebarState === false ? "block" : "none"}` }}
      >
        <div className="sidebarlogo">
          <img
            src={logo}
            alt="logo-img"
            style={{ height: "40px", width: "40px", marginInline: "5px" }}
          />
          <img
            src={curve}
            alt="curve-img"
            style={{ height: "70px", width: "70px", margin: "5px" }}
          />

          <p
            className="crosssidebar"
            onClick={() => {
              setSidebarState(true);
            }}
          >
            X
          </p>
        </div>

        <div className="sidebaritem">
          <Link to="/" style={{textDecoration:"none"}} onClick={()=>{setSidebarState(true)}}><p>Swap</p></Link>
          <Link to="/pool" style={{textDecoration:"none"}} onClick={()=>{setSidebarState(true)}}><p>Pools</p></Link>
          <Link to="/dashboard" style={{textDecoration:"none"}} onClick={()=>{setSidebarState(true)}}><p>Dashboard</p></Link>
          <p>Visit old UI</p>
          <p>Governance</p>
          <div className="sid-icon">
            <p>Cummunity</p>
            <img src={down} alt="down-arrow-icon" />
          </div>
          <div className="sid-icon">
            <p>Resources</p>
            <img src={down} alt="down-arrow-icon" />
          </div>

          <p className="sun-icon">
            Mode <img src={sun} alt="sun-icon" />
          </p>

          <hr
            style={{
              background: "rgba(128, 128, 128, 0.136)",
              width: "100%",
              marginBlock: "0.5rem",
            }}
          />
          <div className="side-count">
            <p>TVL</p>
            <p>$51,8800,101</p>
          </div>

          <hr />
          <div className="side-count">
            <p>Daily Volumn</p>
            <p>$2,8800,101</p>
          </div>

          <img
            src={ship}
            alt="ship-icon"
            height={40}
            style={{ margin: "0.4rem" }}
          />

          <div className=" drop-btn sidebar-connect " onClick={connectWallet}>
            {!isConnected ? (
              <img src={reddot} alt="reddot-icon" />
            ) : (
              <img src={green} alt="green-icon" />
            )}
            {!isConnected ? (
              <p>CONNECT WALLET</p>
            ) : (
              <p className="active-side" style={{background:"white"}}>{`${accountAddress.substring(0, 8)}.....`}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
