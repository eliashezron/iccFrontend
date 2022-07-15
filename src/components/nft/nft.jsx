import React, { useState } from "react"
import "./nft.scss"
import mintnow from "../../assets/mintnow.svg"
import mintnowhover from "../../assets/mintnowhover.svg"
import pinkrrectangle from "../../assets/pinkrectangle.svg"
import bluerectangle from "../../assets/bluerectangle.svg"
import inext from "../../assets/ipreviousb.svg"
import iprevious from "../../assets/iprevious.svg"
import { nftItems } from "../../data/nftIteams"
import { nftItemsScroll } from "../../data/nftIteams"
export default function Nft() {
  const [slideIndex, setSlideIndex] = useState(0)
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
  const x = window.matchMedia("(max-width: 480px)")

  const [mobile, setMobile] = React.useState(x.matches)

  React.useEffect(() => {
    x.addEventListener("change", () => {
      if (x.matches) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  }, [x])

  return (
    <div className='mainsection'>
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
        <div className={`nft ${slideIndex === 0 && "active"}`}>
          {nftItems.map((item) => {
            return (
              <div key={item.id} className='item'>
                <img
                  src={item.image}
                  alt='nftimage'
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />
              </div>
            )
          })}
        </div>
        <div className={`nft ${slideIndex === 1 && "active"}`}>
          {nftItemsScroll.map((item) => {
            return (
              <div key={item.id} className='item'>
                <img
                  src={item.image}
                  alt='nftimage'
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
          {mobile ? (
            <img src={iprevious} alt='playnow' onClick={prevSlide} />
          ) : (
            <div
              id='nft-previous-button-desktop'
              onClick={prevSlide}
              // onMouseOver={(e) => (e.currentTarget.src = nexthover)}
              // onMouseOut={(e) => (e.currentTarget.src = next)}
            />
          )}
        </div>
        <div className='middlebuttons'>
          <img
            src={pinkrrectangle}
            className={slideIndex === 1 && "pink-rectangle-translate"}
            alt='playnow'
          />
          <img
            src={bluerectangle}
            alt='playnow'
            className={slideIndex === 1 && "blue-rectangle-translate"}
          />
        </div>
        <div className='directionbuttonR'>
          {mobile ? (
            <img src={inext} alt='playnow' onClick={nextSlide} />
          ) : (
            <div
              id='nft-next-button-desktop'
              onClick={nextSlide}
              // onMouseOver={(e) => (e.currentTarget.src = nexthover)}
              // onMouseOut={(e) => (e.currentTarget.src = next)}
            />
          )}
        </div>
      </div>
      <div id='nft-mobile'>
        {[...nftItems, nftItemsScroll].map((item, index) => {
          return (
            <div key={index} id='nft'>
              <img src={item.image} alt='next' />
            </div>
          )
        })}
      </div>
    </div>
  )
}
