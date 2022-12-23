import React, { useEffect, useState } from "react";
import curve from "../../assets/curve.svg";
import logo from "../../assets/logo.png";
import "./Header.css";
import reddot from "../../assets/reddot.svg";
import threeline from "../../assets/threeline.svg";
import { ethers } from "ethers";
import green from "../../assets/green.svg";
import Dropdown from "../common/dropdown/Dropdown";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../sildebar/Sidebar";

function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [routeSelect, setRouteSelect] = useState("/");
  const location = useLocation();
  const [sidebarState, setSidebarState] = useState(true);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  return (
    <div className="header">
      <Sidebar setSidebarState={setSidebarState} sidebarState={sidebarState} isConnected={isConnected} setIsConnected={setIsConnected} connectWallet={connectWallet} accountAddress={accountAddress}  />
      <div>
        <div className="header-logo">
          <div className="first-part">
            <div className="threeline" onClick={()=>{setSidebarState(false)}}>
              <img src={threeline} alt="threeline" />
            </div>

            <img
              src={logo}
              alt="logo-img"
              style={{ height: "20px", width: "20px", marginInline: "5px" }}
            />
            <img
              src={curve}
              alt="curve-img"
              style={{ height: "50px", width: "50px", margin: "5px" }}
            />

            <div className="items">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p
                  className={
                    location.pathname == "/" || location.pathname == "/home"
                      ? "selected"
                      : ""
                  }
                >
                  SWAP
                </p>
              </Link>
              <Link to="/pool" style={{ textDecoration: "none" }}>
                <p className={location.pathname == "/pools" ? "selected" : ""}>
                  POOLS
                </p>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <p
                  className={
                    location.pathname == "/dashboard" ? "selected" : ""
                  }
                >
                  DESHBOARD
                </p>
              </Link>
            </div>
          </div>

          <div className="sec-part">
            <Dropdown />

            <div className=" drop-btn drop-connect " onClick={connectWallet}>
              {!isConnected ? (
                <img src={reddot} alt="reddot-icon" />
              ) : (
                <img src={green} alt="green-icon" />
              )}
              {!isConnected ? (
                <p>CONNECT WALLET</p>
              ) : (
                <p>{`${accountAddress.substring(0, 8)}.....`}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
