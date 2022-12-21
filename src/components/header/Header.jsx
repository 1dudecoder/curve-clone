import React from 'react'
import curve  from "../../assets/curve.svg"
import logo from "../../assets/logo.png"
import "./Header.css"
import polygon from "../../assets/polygon.svg"
import down from "../../assets/down.svg"
import reddot from "../../assets/reddot.svg"
import threeline from "../../assets/threeline.svg"

function Header() {
  return (
    <div className='header'>
        <div>
            <div className='header-logo'>
                <div className='first-part'>

                    <div className='threeline'>
                        <img src={threeline} alt="threeline" />
                    </div>

                    <img src={logo} alt="logo-img" style={{height:"20px", width:"20px", marginInline:"5px"}}  />
                    <img src={curve} alt="curve-img" style={{height:"50px", width:"50px", margin:"5px"}}  />
                    <div className='items'>
                    <p>SWAP</p>
                    <p>POOLS</p>
                    <p>DESHBOARD</p>
                </div>
                </div>

                <div className='sec-part'>
                    <div className='drop-down'>
                        <img src={polygon} alt="polygon-icon" />
                        <p>POLYGON</p>
                        <img src={down} alt="down-arrow" />
                    </div>

                    <div className='drop-down drop-connect'>
                        <img src={reddot} alt="reddot-icon" />
                        <p>CONNECT WALLET</p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Header