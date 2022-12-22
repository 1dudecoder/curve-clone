import React, { useState } from "react";
import "./Calculator.css";
import filter from "../../assets/filter.svg";
import dai from "../../assets/dai.svg";
import updown from "../../assets/updown.svg";
import usdt from "../../assets/usdt.svg"
import iicon from "../../assets/iicon.svg"
import setting from "../../assets/setting.svg"
import Footer from "../footer/Footer";

function Calculator({setModal}) {

  const [daiState,setDai] = useState("");
  const [usdtState,SetUsdt] = useState("");
  const [doller,setDoller] = useState("");
  const [usdtfloat,setUsdtfloat] = useState("");
  const [divdaitousdt,setDivdaitousdt] = useState("");
  const [divusdtdai,setDivusdtdai] = useState("");

  const handleData = (e) => {

    if(e.target.value === ""){
      SetUsdt("");
      setDoller("")
      setUsdtfloat("")
      setDivdaitousdt("");
      setDivusdtdai("");
    }

    setDai(e.target.value)
    let data = Number(e.target.value);
    let ans = data * 0.999718;
    let val = getFloatNumber(ans);
    SetUsdt(ans);
    setDoller(`${e.target.value}.00`)
    setUsdtfloat(`${val}`)
    let priceone = 0.999718/data
    setDivdaitousdt(priceone.toString().substring(0,9));
    let pricetwo = data/0.999718;
    setDivusdtdai(pricetwo.toString().substring(0,9));
  }

  const getFloatNumber = (val) => {
    let ans = [];
    let arr = val.toString().split(".")
    ans.push(arr[0]);
    let newval = arr[1].substring(0,2);
    ans.push(newval);
    let newans = ans.join('.');
    return newans;
  }

  return (
    <div className="main-div">
      <div className="background">
        <div className="cal">
          <div className="head">
            <p></p>
            <p>Swap</p>
            <img src={filter} alt="filer-img" />
          </div>

          <div className="bottom">
            <div className="first-input">
              <input type="text" value={daiState} onChange={handleData} />
              <p>MAX</p>
              <div className="max-button" onClick={ ()=>{setModal(true)} }>
                
                <img
                  src={dai}
                  alt="dai-image"
                  style={{ width: "15px", height: "15px" }}
                />
                <p>DAI</p>

              </div>
            </div>

            <div>
              <p>≈ ${doller}</p>
              <div className="mid-arrow">
                <img src={updown} alt="updown-icons" />
              </div>
            </div>

            <div className="first-input">
              
              <input type="text" value={usdtState} /> 
              <div className="max-button" onClick={()=>{setModal(true)}}>
                <img
                  src={usdt}
                  alt="dai-image"
                  style={{ width: "15px", height: "15px" }}
                />
                <div>
                  <p>USDT</p>
                  <p style={{ fontSize: "smaller", fontWeight: "normal" }}>
                    343x23{" "}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p>≈ ${usdtfloat}</p>

              <div className="price">
                <p>Exchange rate (incl. fees):</p>
                <p className="val">DAI/USDT <strong>{divdaitousdt}</strong> <br />
                USDT/DAI <strong>{divusdtdai}</strong> 
                 </p>
              </div>

              <div className="others">
                <p>Price impact:</p>
                <p className="price-item">0% <img src={iicon} alt="i-icon" /></p>
              </div>

              <div className="others">
                <p>Trade routed through:</p>
                <p>aave</p>
              </div>

              <div className="others">
                <p>Slippage tolerance:</p>
                <p className="price-item">0.1% <img src={setting} alt="setting-icon" /></p>
              </div>

              <div className="connect-wallet">
                <p>Connect Wallet</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default Calculator;
