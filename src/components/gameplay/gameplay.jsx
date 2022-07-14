import React, { useState } from "react"
import "./gameplay.scss"
import blueman from "../../assets/bueman.png"
import runningman from "../../assets/running.png"
import blueman2 from "../../assets/blueman2.png"
import runningman2 from "../../assets/runningman2.png"
import pinkrrectangle from "../../assets/pinkrectangle.svg"
import bluerectangle from "../../assets/bluerectangle.svg"
import watch from "../../assets/watch.svg"
import watchhover from "../../assets/watchhover.svg"
import inext from "../../assets/ipreviousb.svg"
import iprevious from "../../assets/iprevious.svg"
import next from "../../assets/next.svg"
import nexthover from "../../assets/hovernext.svg"
import previous from "../../assets/previous.svg"
import previoushover from "../../assets/previoushover.svg"
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
            <img
              onClick={prevSlide}
              src={previous}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = previoushover)}
              onMouseOut={(e) => (e.currentTarget.src = previous)}
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
            <img
              src={next}
              alt='next'
              onClick={nextSlide}
              onMouseOver={(e) => (e.currentTarget.src = nexthover)}
              onMouseOut={(e) => (e.currentTarget.src = next)}
            />
          )}
        </div>
      </div>
      <div id='watch-button-mobile'>
        <img
          src={watch}
          alt='playnow'
          onMouseOver={(e) => (e.currentTarget.src = watchhover)}
          onMouseOut={(e) => (e.currentTarget.src = watch)}
        />
      </div>
    </div>
  )
}
