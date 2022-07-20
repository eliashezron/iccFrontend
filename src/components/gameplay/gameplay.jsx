import React, { useState } from 'react';
import './gameplay.scss';
import pinkrrectangle from '../../assets/pinkrectangle.svg';
import bluerectangle from '../../assets/bluerectangle.svg';
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
      <div className="container tw-relative">
        <h1 className="tw-text-[2rem] tw-mt-[110px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] tw-leading-[80px]">
          GAMEPLAY
        </h1>
        <p className="tw-text-[0.8rem] xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          Intergalactic Cockroach Space Race’s gameplay is designed to challenge
          your personal skills.<br></br>Challenge yourself with our modes: Play
          To Earn & Free Play to win rewards.
        </p>
        <div className="upper-row tw-relative tw-flex 3xl:tw-h-auto tw-min-w-full 3xl:tw-mt-[40.4px] 2xl:tw-w-[95%] xl:tw-w-[95%] tw-overflow-hidden">
          <div
            id="running-man-img"
            className={`3xl:tw-w-[966px] 3xl:tw-h-[630px] 2xl:tw-w-[800px] 2xl:tw-h-[600px] xl:tw-w-[700px] xl:tw-h-[500px] 3xl:tw-mr-[259px] 2xl:tw-mr-[120px] xl:tw-mr-[100px] ${
              slideIndex === 1 ? 'active' : ''
            }`}
          />
          <div className="tw-hidden md:tw-flex tw-flex-col tw-items-center tw-mt-[21px]">
            <div
              id="blueman-img"
              className={`3xl:tw-h-[254x] 3xl:tw-w-[426px] 2xl:tw-w-[400px] 2xl:tw-h-[220px] xl:tw-w-[380px] xl:tw-h-[200px]
              ${slideIndex === 1 ? 'active' : ''}`}
            />

            <div className="tw-text-[#0bfff0] tw-w-full tw-relative 3xl:tw-text-[36px] 2xl:tw-text-[30px] xl:tw-text-[23px] tw-font-[900] tw-tracking-wider tw-leading-[24px] 3xl:tw-mt-[24px] 2xl:tw-mt-[16px] tw-mt-[14px] tw-mb-5 tw-text-center">
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
                PLAY 2 EARN
              </div>
            </div>
            <div className="tw-text-[#0bfff0] 3xl:tw-text-[18px] xl:tw-text-[15px] tw-font-[800] tw-tracking-tight tw-leading-[24px] tw-my-2 3xl:tw-mb-[32px] tw-text-center">
              Win the race and be the last Cockroach standing.<br></br>Show your
              skills, win 3 rounds and win prizes.
            </div>
            <div
              id="watch-button"
              className="3xl:tw-w-[338px] 3xl:tw-h-[69px] 2xl:tw-w-[300px] 2xl:tw-h-[60px]"
            />
          </div>
          <div className="sectionB tw-absolute 3xl:tw-top-[522px] 2xl:tw-top-[460px] tw-top-[400px]">
            <div className="directionbuttonL">
              {mobile ? (
                <img src={iprevious} alt="playnow" onClick={prevSlide} />
              ) : (
                <div
                  id="nft-previous-button-desktop"
                  className="3xl:tw-w-[265px] 3xl:tw-h-[55px] tw-w-[200px] tw-h-[50px]"
                  onClick={prevSlide}
                />
              )}
            </div>
            <div
              className={` tw-flex tw-gap-[40px] tw-transition tw-delay-150 tw-ease-in-out ${
                slideIndex === 0 ? 'tw-flex' : 'tw-flex-row-reverse'
              }`}
            >
              <img
                className="3xl:tw-w-[150px] 3xl:tw-h-[26px] tw-w-[120px] tw-h-[22px]"
                src={pinkrrectangle}
                alt="playnow"
              />
              <img
                className="3xl:tw-w-[150px] 3xl:tw-h-[26px] tw-w-[120px] tw-h-[22px]"
                src={bluerectangle}
                alt="playnow"
              />
            </div>
            <div className="directionbuttonR">
              {mobile ? (
                <img src={inext} alt="playnow" onClick={nextSlide} />
              ) : (
                <div
                  id="nft-next-button-desktop"
                  className="3xl:tw-w-[265px] 3xl:tw-h-[55px] tw-w-[200px] tw-h-[50px]"
                  onClick={nextSlide}
                />
              )}
            </div>
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
