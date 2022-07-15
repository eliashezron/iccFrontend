import React, { useState } from "react"
import "./gameplay.scss"
import pinkrrectangle from "../../assets/pinkrectangle.svg"
import bluerectangle from "../../assets/bluerectangle.svg"
import watch from "../../assets/watch.svg"
import watchhover from "../../assets/watchhover.svg"
import watchmobile from "../../assets/watchmobile.png"
import watchmobilehover from "../../assets/watchmobilehover.png"
import inext from "../../assets/ipreviousb.svg"
import iprevious from "../../assets/iprevious.svg"
export default function GamePlay() {
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
    <div className='bgb'>
      <div className='title'>GAMEPLAY</div>
      <div className='wording'>
        <p>
          Intergalactic Cockroach Space Race’s gameplay is designed to challenge
          your personal skills.<br></br>Challenge yourself with our modes: Play
          To Earn & Free Play to win rewards.
        </p>
      </div>

      <div className='upper-row'>
        <div id='running-man-img' className={slideIndex === 0 && "active"} />
        <div className='blueman'>
          <div id='blueman-img' className={slideIndex === 0 && "active"} />
          <div className='freeplay'>
            {slideIndex === 0 ? "FREE PLAY" : "PLAY AND EARN"}
          </div>
          <div className='words'>
            <p>
              Win the race and be the last Cockroach standing.<br></br>Show your
              skills, win 3 rounds and win prizes.
            </p>
          </div>
          <div className='watchButton'>
            <img
              src={watch}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = watchhover)}
              onMouseOut={(e) => (e.currentTarget.src = watch)}
            />
          </div>
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
            alt='playnow'
            className={slideIndex === 1 && "pink-rectangle-translate"}
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
      <div id='watch-button-mobile'>
        <img
          src={watchmobile}
          alt='playnow'
          onMouseOver={(e) => (e.currentTarget.src = watchmobilehover)}
          onMouseOut={(e) => (e.currentTarget.src = watchmobile)}
        />
      </div>
    </div>
  )
}
