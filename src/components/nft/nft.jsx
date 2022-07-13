import React, { useState } from "react"
import "./nft.scss"
// import nftCollection from "../../assets/nftCollection.png"
// import nftCollection2 from "../../assets/nftCollection2.png"
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
import { nftItems } from "../../data/nftIteams"
import { nftItemsScroll } from "../../data/nftIteams"
export default function Nft() {
  const windowWidth = window.innerWidth
  const [slideIndex, setSlideIndex] = useState(0)
  console.log(slideIndex)
  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0)
    } else setSlideIndex(1)
  }

  const nextSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0)
    } else setSlideIndex(1)
  }
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
        <div
          key={slideIndex}
          className={`nft ${slideIndex === 1 ? "active" : ""}`}
        >
          {nftItems.map((item) => {
            return (
              <div key={item.id} className='item'>
                <img
                  src={item.image}
                  alt='next'
                  onClick={nextSlide}
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />
              </div>
            )
          })}
        </div>
        <div
          key={slideIndex === 0 ? 1 : 0}
          className={`nft ${slideIndex === 1 ? "active" : ""}`}
        >
          {nftItemsScroll.map((item) => {
            return (
              <div key={item.id} className='item'>
                <img
                  src={item.image}
                  alt='next'
                  onClick={nextSlide}
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='sectionB'>
        <div className='directionbuttonL'>
          {windowWidth < 480 ? (
            <img src={iprevious} alt='playnow' />
          ) : (
            <img
              src={previous}
              alt='playnow'
              onClick={prevSlide}
              onMouseOver={(e) => (e.currentTarget.src = previoushover)}
              onMouseOut={(e) => (e.currentTarget.src = previous)}
            />
          )}
        </div>
        <div className={`middlebuttons ${slideIndex === 1 ? "active" : ""}`}>
          <img src={pinkrrectangle} alt='playnow' />
          <img src={bluerectangle} alt='playnow' />
        </div>
        <div className='directionbuttonR'>
          {windowWidth < 480 ? (
            <img src={inext} alt='playnow' />
          ) : (
            <img
              src={next}
              alt='playnow'
              onClick={nextSlide}
              onMouseOver={(e) => (e.currentTarget.src = nexthover)}
              onMouseOut={(e) => (e.currentTarget.src = next)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
