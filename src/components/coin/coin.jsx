import React from "react"
import "./coin.scss"
import coin from "../../assets/coinimagepng.png"
import mcoin from "../../assets/mcoin.png"
export default function Coin() {
  const windowWidth = window.innerWidth
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
      <div className='imgdivcoin'>
        {windowWidth < 480 ? (
          <img src={mcoin} alt='coin' />
        ) : (
          <img src={coin} alt='coin' />
        )}
      </div>
      <div className='buybutton'>
        <div id='buyicc-button-desktop' />
      </div>
    </div>
  )
}
