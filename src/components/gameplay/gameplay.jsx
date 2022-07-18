import React, { useState } from 'react';
import './gameplay.scss';
import pinkrrectangle from '../../assets/pinkrectangle.svg';
import bluerectangle from '../../assets/bluerectangle.svg';
import watch from '../../assets/watch.svg';
import watchhover from '../../assets/watchhover.svg';
import inext from '../../assets/ipreviousb.svg';
import iprevious from '../../assets/iprevious.svg';
import watchmobile from '../../assets/watchmobile.png';
import watchmobilehover from '../../assets/watchmobilehover.png';

export default function GamePlay() {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);
  const prevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0);
    } else setSlideIndex(1);
  };

  const nextSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(0);
    } else setSlideIndex(1);
  };

  const x = window.matchMedia('(max-width: 480px)');

  const [mobile, setMobile] = React.useState(x.matches);

  React.useEffect(() => {
    x.addEventListener('change', () => {
      if (x.matches) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, [x]);

  return (
    <section id="game-play">
      <div className="container">
        <h1 className="tw-text-[2rem] xl:tw-text-[2.3rem] 2xl:tw-text-[2.8rem] 3xl:tw-text-[3.4rem]">
          GAMEPLAY
        </h1>
        <p className="tw-text-[0.8rem] tw-leading-6 xl:tw-text-[0.85rem] 2xl:tw-text-[0.9rem] 3xl:tw-text-[1.2rem] 2xl:tw-leading-8 tw-tracking-wider">
          Intergalactic Cockroach Space Race’s gameplay is designed to challenge
          your personal skills.<br></br>Challenge yourself with our modes: Play
          To Earn & Free Play to win rewards.
        </p>
        <div className="upper-row">
          {/* height: 500px;
        width: 650px; */}
          <div
            id="running-man-img"
            className={`2xl:tw-w-[900px] 2xl:tw-h-[600px] 3xl:tw-w-[1000px] 3xl:tw-h-[780px] ${
              slideIndex === 0 ? 'active' : ''
            }`}
          />
          <div className="blueman">
            <div
              id="blueman-img"
              className={`2xl:tw-w-[900px] 2xl:tw-h-[600px] 3xl:tw-w-[500px] 3xl:tw-h-[300px]
              ${slideIndex === 0 ? 'active' : ''}`}
            />

            <div className="tw-text-[#0bfff0] tw-relative 3xl:tw-text-[1.4rem] tw-font-medium tw-tracking-wider tw-leading-7 tw-mt-2 tw-mb-5">
              <div
                className={`tw-absolute tw-w-full delay ${
                  slideIndex === 0 ? 'tw-opacity-100' : 'tw-opacity-0'
                }`}
              >
                FREE PLAY
              </div>

              <div
                className={`tw-absolute tw-w-full delay ${
                  slideIndex === 1 ? 'tw-opacity-100' : 'tw-opacity-0'
                }`}
              >
                PLAY AND EARN
              </div>
            </div>
            <div className="tw-text-[#0bfff0] 3xl:tw-text-[1.1rem] tw-font-medium tw-tracking-wider tw-leading-7 tw-my-2">
              Win the race and be the last Cockroach standing.<br></br>Show your
              skills, win 3 rounds and win prizes.
            </div>
            <div className="watchButton">
              <img
                src={watch}
                alt="playnow"
                onMouseOver={(e) => (e.currentTarget.src = watchhover)}
                onMouseOut={(e) => (e.currentTarget.src = watch)}
              />
            </div>
          </div>
        </div>

        <div className="sectionB">
          <div className="directionbuttonL">
            {mobile ? (
              <img src={iprevious} alt="playnow" onClick={prevSlide} />
            ) : (
              <div id="nft-previous-button-desktop" onClick={prevSlide} />
            )}
          </div>
          <div className="middlebuttons">
            <img
              src={pinkrrectangle}
              alt="playnow"
              className={slideIndex === 1 ? 'pink-rectangle-translate' : ''}
            />
            <img
              src={bluerectangle}
              alt="playnow"
              className={slideIndex === 1 ? 'blue-rectangle-translate' : ''}
            />
          </div>
          <div className="directionbuttonR">
            {mobile ? (
              <img src={inext} alt="playnow" onClick={nextSlide} />
            ) : (
              <div id="nft-next-button-desktop" onClick={nextSlide} />
            )}
          </div>
        </div>
        <div id="watch-button-mobile">
          <img
            src={watchmobile}
            alt="playnow"
            onMouseOver={(e) => (e.currentTarget.src = watchmobilehover)}
            onMouseOut={(e) => (e.currentTarget.src = watchmobile)}
          />
        </div>
      </div>
    </section>
  );
}
