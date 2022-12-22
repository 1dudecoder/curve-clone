import React from 'react'
import "../dashboard/Dashboard.css"

function Dashboard() {
  return (
    <div>

      <div className='background'>
        <div className='dash'>
          <div className="dash-top">
            <p>Total Balances</p>

            <div className='input-add'>
              <p>View address</p>
              <input type="text" placeholder='0x..' />
            </div>

          </div>

          <div className='down-dash'>
            <div className="left-price">
              <p>Total Daily Profits</p>
              <div>

                <div className='left-items'>
                  <p>Base</p>
                  <p>0</p>
                </div>

                <div className='left-items'>
                  <p>CRV</p>
                  <p>0</p>
                </div>

                <div className='left-items'>
                  <p>USD Total</p>
                  <p>≈ $0</p>
                </div>

              </div>
            </div>

            <div className="left-price">
              <p>Claimable Tokens</p>
              <div>

                <div className='left-items'>
                  <p>CRV</p>
                  <p>0</p>
                </div>

                <div className='left-items'>
                  <p>USD Total</p>
                  <p>≈ $0</p>
                </div>

              </div>
            </div>

          </div>
          
          <div className="pool-bottom">
            <div>
              <p>Pool</p>
            </div>
            <div>
              <p>Base vAP</p>
              <p>Rewards tAPR (CRV+ Incentives) </p>
            </div>
            <div>
              <p>Balance</p>
            </div>
            <div>
              <p>USD Profits</p>
              <p>CRV Profits</p>
            </div>
            <div>
              <p>Claimable Tokens</p>
            </div>
          </div>

          <div className='last-item'>
            <p>Please connect wallet or enter a wallet address to view active pools.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard