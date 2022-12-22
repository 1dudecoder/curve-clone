import React from "react";
import search from "../../../assets/token-icon/search.svg";
import tokens from "../../../assets/pool-icons/tokens.jpg";
import Footer from "../../footer/Footer";
import down from "../../../assets/down.svg";
import "../pools/pool.css"

function Pools() {
  return (
    <div>
      <div className="background">
        <div className="pool-container">
          <div className="input-pool">
            <img src={search} alt="search-icon" width={25} height={25} />
            <input
              type="text"
              placeholder="Search by pool name , pool address, token name or token address"
            />
            <p>X</p>
          </div>

          <div className="pc-pool-container">
            <div className="filter-button">
              <div>
                <div>ALL</div>
                <div>USD</div>
                <div>BTC</div>
                <div>CRYPTO</div>
                <div>OTHERS</div>
              </div>
            </div>

            <table className="table-container">
              <thead>
                <tr className="pool-table">
                  <th className="thead-item">pool</th>
                  <th className="thead-item">Factory</th>
                  <th className="thead-item">Type</th>
                  <th className="thead-item">
                    Base vAPY <br />
                    Rewards tAPR (CRV+ Incentives)
                  </th>
                  <th className="thead-item">Volume</th>
                  <th className="thead-item">TVL</th>
                </tr>
              </thead>

              <tr>
                <td className="r-t">
                  <div className="row-item">
                    <div>
                      <img src={tokens} alt="token-icon" />
                    </div>
                    <div>
                      <p>atricrypto3</p>
                      <p>0x92...22cc</p>
                      <p>DAI USD WBTC WETH</p>
                    </div>
                  </div>
                </td>
                <td className="r-t"></td>
                <td className="r-t">
                  <p>CRYPTO V2</p>
                </td>
                <td className="r-t">
                  <div>
                    <p>0.45%</p>
                    <p>5.50% → 13.77% CRV</p>
                  </div>
                </td>
                <td className="r-t">$530.9k</td>
                <td className="r-t">$23.2m</td>
              </tr>

              <tr>
                <td className="r-t">
                  <div className="row-item">
                    <div>
                      <img src={tokens} alt="token-icon" />
                    </div>
                    <div>
                      <p>atricrypto3</p>
                      <p>0x92...22cc</p>
                      <p>DAI USD WBTC WETH</p>
                    </div>
                  </div>
                </td>
                <td className="r-t"></td>
                <td className="r-t">
                  <p>CRYPTO V2</p>
                </td>
                <td className="r-t">
                  <div>
                    <p>0.45%</p>
                    <p>5.50% → 13.77% CRV</p>
                  </div>
                </td>
                <td className="r-t">$530.9k</td>
                <td className="r-t">$23.2m</td>
              </tr>

              <tr>
                <td className="r-t">
                  <div className="row-item">
                    <div>
                      <img src={tokens} alt="token-icon" />
                    </div>
                    <div>
                      <p>atricrypto3</p>
                      <p>0x92...22cc</p>
                      <p>DAI USD WBTC WETH</p>
                    </div>
                  </div>
                </td>
                <td className="r-t"></td>
                <td className="r-t">
                  <p>CRYPTO V2</p>
                </td>
                <td className="r-t">
                  <div>
                    <p>0.45%</p>
                    <p>5.50% → 13.77% CRV</p>
                  </div>
                </td>
                <td className="r-t">$530.9k</td>
                <td className="r-t">$23.2m</td>
              </tr>

              <tr>
                <td className="r-t">
                  <div className="row-item">
                    <div>
                      <img src={tokens} alt="token-icon" />
                    </div>
                    <div>
                      <p>atricrypto3</p>
                      <p>0x92...22cc</p>
                      <p>DAI USD WBTC WETH</p>
                    </div>
                  </div>
                </td>
                <td className="r-t"></td>
                <td className="r-t">
                  <p>CRYPTO V2</p>
                </td>
                <td className="r-t">
                  <div>
                    <p>0.45%</p>
                    <p>5.50% → 13.77% CRV</p>
                  </div>
                </td>
                <td className="r-t">$530.9k</td>
                <td className="r-t">$23.2m</td>
              </tr>

              <tr>
                <td className="r-t">
                  <div className="row-item">
                    <div>
                      <img src={tokens} alt="token-icon" />
                    </div>
                    <div>
                      <p>atricrypto3</p>
                      <p>0x92...22cc</p>
                      <p>DAI USD WBTC WETH</p>
                    </div>
                  </div>
                </td>
                <td className="r-t"></td>
                <td className="r-t">
                  <p>CRYPTO V2</p>
                </td>
                <td className="r-t">
                  <div>
                    <p>0.45%</p>
                    <p>5.50% → 13.77% CRV</p>
                  </div>
                </td>
                <td className="r-t">$530.9k</td>
                <td className="r-t">$23.2m</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="mob-pool-container">
          <div className="hide-checkbox">
            <div>
              <input type="checkbox" />
            </div>
            <p>Hide very small pools</p>
          </div>

          <div>
            <div className="fil-btn">
              <div className="pool-btn">
                ALL
                <img src={down} alt="down-arow" />
              </div>

              <div className="pool-btn">
                Volumn (desc)
                <img src={down} alt="down-arow" />
              </div>
            </div>
          </div>

          <div className="mob-row">
            <div className="mob-item">
              <div>
                <img src={tokens} alt="token-icon" />
              </div>
              <div>
                <p>atricrypto3</p>
                <p>0x92...22cc</p>
                <p>DAI USD WBTC WETH</p>
              </div>
            </div>
            <img src={down} alt="down-icon" />
          </div>

          <div className="mob-row">
            <div className="mob-item">
              <div>
                <img src={tokens} alt="token-icon" />
              </div>
              <div>
                <p>atricrypto3</p>
                <p>0x92...22cc</p>
                <p>DAI USD WBTC WETH</p>
              </div>
            </div>
            <img src={down} alt="down-icon" />
          </div>

          <div className="mob-row">
            <div className="mob-item">
              <div>
                <img src={tokens} alt="token-icon" />
              </div>
              <div>
                <p>atricrypto3</p>
                <p>0x92...22cc</p>
                <p>DAI USD WBTC WETH</p>
              </div>
            </div>
            <img src={down} alt="down-icon" />
          </div>

          <div className="mob-row">
            <div className="mob-item">
              <div>
                <img src={tokens} alt="token-icon" />
              </div>
              <div>
                <p>atricrypto3</p>
                <p>0x92...22cc</p>
                <p>DAI USD WBTC WETH</p>
              </div>
            </div>
            <img src={down} alt="down-icon" />
          </div>
          
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Pools;
