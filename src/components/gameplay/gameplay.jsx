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
    <div className='bgb'>
      <div className='title'>GAMEPLAY</div>
      <div className='wording'>
        <p>
          Intergalactic Cockroach Space Race’s gameplay is designed to challenge
          your personal skills.<br></br>Challenge yourself with our modes: Play
          To Earn & Free Play to win rewards.
        </p>
      </div>
      <div className='sectionA'>
        <div
          key={slideIndex}
          className={`slider ${slideIndex === 0 && "active"}`}
        >
          <div className='running-man'>
            <img src={runningman} alt='running-man' />
          </div>
          <div className='blueman'>
            <img src={blueman} alt='blueman' />
            <div className='freeplay'>FREE PLAY</div>
            <div className='words'>
              <p>
                Win the race and be the last Cockroach standing.<br></br>Show
                your skills, win 3 rounds and win prizes.
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
        <div
          key={slideIndex === 0 ? 1 : 0}
          className={`slider ${slideIndex === 1 && "active"}`}
        >
          <div className='running-man'>
            <img src={runningman2} alt='running-man' />
          </div>
          <div className='blueman'>
            <img src={blueman2} alt='blueman' />
            <div className='freeplay'>PLAY AND EARN</div>
            <div className='words'>
              <p>
                Win the race and be the last Cockroach standing.<br></br>Show
                your skills, win 3 rounds and win prizes.
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
      </div>
      <div className='sectionB'>
        <div className='directionbuttonL'>
          {windowWidth < 480 ? (
            <img src={iprevious} alt='playnow' />
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
          {windowWidth < 480 ? (
            <img src={inext} alt='playnow' />
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
    </div>
  )
}
