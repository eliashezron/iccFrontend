import React from "react"
import "./nft.scss"
import nftCollection from "../../assets/nftCollection.png"
import mintnow from "../../assets/mintnow.svg"
import mintnowhover from "../../assets/mintnowhover.svg"
import pinkrrectangle from "../../assets/pinkrectangle.svg"
import bluerectangle from "../../assets/bluerectangle.svg"
import inext from "../../assets/ipreviousb.svg"
import iprevious from "../../assets/iprevious.svg"
import next from "../../assets/next.svg"
import nexthover from "../../assets/hovernext.svg"
import previous from "../../assets/previous.svg"
import previoushover from "../../assets/previoushover.svg"
export default function Nft() {
  const windowWidth = window.innerWidth
  return (
    <div className='mainSection'>
      <div className='relativediv'>
        <div className='title'>NFT GENESIS SERIES</div>
        <div className='wording'>
          <p>Play, Stake, Hold or just brag with our NFT Genesis series !</p>
        </div>

        <div className='mint'>
          <img
            src={mintnow}
            alt='playnow'
            onMouseOver={(e) => (e.currentTarget.src = mintnowhover)}
            onMouseOut={(e) => (e.currentTarget.src = mintnow)}
          />
        </div>
      </div>
      <div className='sectionA'>
        <div className='nft'>
          <img src={nftCollection} alt='nftCollection' />
        </div>
      </div>
      <div className='sectionB'>
        <div className='directionbuttonL'>
          {windowWidth < 550 ? (
            <img src={iprevious} alt='playnow' />
          ) : (
            <img
              src={previous}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = previoushover)}
              onMouseOut={(e) => (e.currentTarget.src = previous)}
            />
          )}
        </div>
        <div className='middlebuttons'>
          <img src={pinkrrectangle} alt='playnow' />
          <img src={bluerectangle} alt='playnow' />
        </div>
        <div className='directionbuttonR'>
          {windowWidth < 550 ? (
            <img src={inext} alt='playnow' />
          ) : (
            <img
              src={next}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = nexthover)}
              onMouseOut={(e) => (e.currentTarget.src = next)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
