import React, { useState,useRef, useEffect } from 'react'
import polygon from "../../../assets/drop-icon/polygon.svg"
import celo from "../../../assets/drop-icon/celo.svg"
import arbitrum from "../../../assets/drop-icon/arbitrum.svg"
import fantom from "../../../assets/drop-icon/fantom.svg"
import etherium from "../../../assets/drop-icon/etherium.svg"
import down from "../../../assets/down.svg"
import "./Dropdown.css"

function Dropdown() {

  const [state,setState] = useState('none');
  const [selected,setSelected] = useState({
    name: "POLYGON",
    image: polygon,
  });
  
  const box = useRef(null);
  useOutsideAlerter(box);

  const handleClick = () => {
    setState("block")
  }

  const handleOff = () => {
    setState("none")
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setState("none")
        }
      }
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  }

  return (
    <div className='parent-relative'  ref={box}>

      <div className='drop-down' onClick={handleClick}>
        <img src={selected.image} alt="polygon-icon" />
        <p>{selected.name}</p>
        <img src={down} alt="down-arrow" />
      </div>

      <div className='my-drop children' style={{display:`${state}`}} >

       <div className='drop-down' onClick={()=>{
            let obj = {
              name : "Celo",
              image: celo
            }
            setSelected(obj);
            setState("none");
        }}>
            <img src={celo} alt="Celo-icon" />
            <p>Celo</p>
            <img src={down} alt="down-arrow" />
        </div>

        <div className='drop-down' onClick={()=>{
            let obj = {
              name : "Arbitrum",
              image: arbitrum
            }
            setSelected(obj);
            setState("none");
        }}>
          <img src={arbitrum} alt="arbitrum-icon" />
          <p>Arbitrum</p>
          <img src={down} alt="down-arrow" />
        </div>

        <div className='drop-down' onClick={()=>{
            let obj = {
              name : "Etherium",
              image: etherium
            }
            setSelected(obj);
            setState("none");
        }}>
            <img src={etherium} alt="etherium-icon" />
            <p>etherium</p>
            <img src={down} alt="down-arrow" />
        </div> 

        <div className='drop-down' onClick={()=>{
            let obj = {
              name : "Fantom",
              image: fantom
            }
            setSelected(obj);
            setState("none");
        }}>
            <img src={fantom} alt="fantom-icon" />
            <p>Fantom</p>
            <img src={down} alt="down-arrow" />
        </div>

        <div className='drop-down' onClick={()=>{
            let obj = {
              name : "POLYGON",
              image: polygon
            }
            setSelected(obj);
            setState("none");
        }}>
        <img src={polygon} alt="polygon-icon" />
        <p>POLYGON</p>
        <img src={down} alt="down-arrow" />
      </div>


      </div>

    </div>
  )
}

export default Dropdown