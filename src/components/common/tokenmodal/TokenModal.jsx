import React, { useState} from "react";
import "./TokenModal.css";
import search from "../../../assets/token-icon/search.svg";
import dai from "../../../assets/token-icon/dai.svg";
import usdt from "../../../assets/token-icon/usdt.svg";
import usdc from "../../../assets/token-icon/usdc.svg";
import wbtc from "../../../assets/token-icon/wbtc.svg";
import par from "../../../assets/token-icon/dai.svg";

function TokenModal({ state, setState }) {

  let tokensarr = [
    {
      id: 1,
      name: "DAI",
      image: dai,
    },
    {
      id: 2,
      name: "USDC",
      image: usdc,
    },
    {
      id: 3,
      name: "USDT",
      image: usdt,
    },
    {
      id: 4,
      name: "WBTC",
      image: wbtc,
    },
    {
      id: 5,
      name: "PAR",
      image: par,
    },
  ];

  const [tokens, setToken] = useState(tokensarr);

  const handleInputChange = (e) => {
    const newitems = tokens.filter((item) => {
      if (item.name.toLowerCase().includes(e.target.value)) {
        return item;
      }
    });

    if (newitems.length >= 0 && e.target.value !== "") {
      return setToken(newitems);
    }

    setToken(tokensarr);
  };

  const handleModal = () => {
    console.log("State", state);
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div
      className="modal-container"
      style={{ display: `${state === true ? "block" : "none"}` }}
    >
      <div className="modal-body">
        <div className="top">
          <p>Select a token</p>
          <p onClick={handleModal}>X</p>
        </div>

        <div>
          <div className="input-box">
            <img
              src={search}
              alt="search-icon"
              style={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
            />
            <input
              type="text"
              style={{ width: "100%", outline: "none", border: "none" }}
              onChange={handleInputChange}
            />
            <p
              style={{
                fontSize: "larger",
                fontWeight: "bold",
                marginInline: "1rem",
              }}
            >
              X
            </p>
          </div>

          <div className="token-items">
            <div className="item">
              <img
                src={dai}
                style={{
                  marginInline: "0.2rem",
                  width: "20px",
                  height: "20px",
                }}
                alt="dai-item"
              />
              <p style={{ marginInline: "0.5rem" }}>DAI</p>
            </div>

            <div className="item">
              <img
                src={par}
                style={{
                  marginInline: "0.2rem",
                  width: "20px",
                  height: "20px",
                }}
                alt="par-item"
              />
              <p style={{ marginInline: "0.5rem" }}>PAR</p>
            </div>

            <div className="item">
              <img
                src={usdc}
                style={{
                  marginInline: "0.2rem",
                  width: "20px",
                  height: "20px",
                }}
                alt="usdc-item"
              />
              <p style={{ marginInline: "0.5rem" }}>USDC</p>
            </div>

            <div className="item">
              <img
                src={usdt}
                style={{
                  marginInline: "0.2rem",
                  width: "20px",
                  height: "20px",
                }}
                alt="usdt-item"
              />
              <p style={{ marginInline: "0.5rem" }}>USDT</p>
            </div>

            <div className="item">
              <img
                src={wbtc}
                style={{
                  marginInline: "0.2rem",
                  width: "20px",
                  height: "20px",
                }}
                alt="wbtc-item"
              />
              <p style={{ marginInline: "0.5rem" }}>WBTC</p>
            </div>
          </div>

          <div>
            <div className="checkbox">
              <input type="checkbox" />
              <p>Hide tokens from very small pools</p>
            </div>
          </div>

          <div className="token-items-sec ">
            {tokens &&
              tokens.map((item) => {
                return (
                  <>
                    <div className="item" key={item.id}>
                      <img
                        src={item.image}
                        style={{
                          marginInline: "0.2rem",
                          width: "20px",
                          height: "20px",
                        }}
                        alt="dai-item"
                      />
                      <p style={{ marginInline: "0.5rem" }}>{item.name}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenModal;
