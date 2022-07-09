import React from "react"
import "./coin.scss"
import coin from "../../assets/coinImage2.png"
import buyicc from "../../assets/buyicc.svg"
import buyicchover from "../../assets/buyicchover.svg"
export default function Coin() {
  return (
    <div className='main'>
      <div className='absolutediv'>
        <div className='title'>What's ICC Coin?</div>
        <div className='wording'>
          <p>
            ICC Coin is our main ingame currency which can be achieved by
            purchase in open market or<br></br>by playing game modes and
            participating in many other activities.
          </p>
        </div>
      </div>
      <div className='imgdiv'>
        <img src={coin} alt='roadMap' />
      </div>
      <div className='buybutton'>
        <img
          src={buyicc}
          alt='playnow'
          onMouseOver={(e) => (e.currentTarget.src = buyicchover)}
          onMouseOut={(e) => (e.currentTarget.src = buyicc)}
        />
      </div>
    </div>
  )
}