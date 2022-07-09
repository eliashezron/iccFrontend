import React from "react"
import "./coin.scss"
import coin from "../../assets/coinImage2.png"
export default function Coin() {
  return (
    <div className='main'>
      <div className='title'>What's ICC Coin?</div>
      <div className='wording'>
        <p>
          ICC Coin is our main ingame currency which can be achieved by purchase
          in open market or<br></br>by playing game modes and participating in
          many other activities.
        </p>
      </div>
      <div className='imgdiv'>
        <img src={coin} alt='roadMap' />
      </div>
    </div>
  )
}
