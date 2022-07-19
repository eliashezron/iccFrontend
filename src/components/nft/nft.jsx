import React, { useState } from 'react';
import './nft.scss';
import pinkrrectangle from '../../assets/pinkrectangle.svg';
import bluerectangle from '../../assets/bluerectangle.svg';
import inext from '../../assets/ipreviousb.svg';
import iprevious from '../../assets/iprevious.svg';
import { nftItems } from '../../data/nftIteams';
import { nftItemsScroll } from '../../data/nftIteams';

import SwipeableViews from 'react-swipeable-views';

export default function Nft() {
  const [slideIndex, setSlideIndex] = useState(0);
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
    <section id="nft-genesis">
      <div className="container">
        <h1 className="tw-text-[2rem] tw-mt-[110px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] tw-leading-[80px]">
          NFT GENESIS SERIES
        </h1>
        <p className="tw-text-[0.8rem] xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          Play, Stake, Hold or just brag with our NFT Genesis series !
        </p>
        <div
          id="nft-mint-button"
          className="3xl:tw-ml-[1330px] 2xl:tw-ml-[1000px] xl:tw-ml-[850px] 2xl:-tw-mt-[80px] xl:-tw-mt-[65px] 3xl:tw-w-[338px] 2xl:tw-w-[220px] xl:tw-w-[190px] 3xl:tw-h-[69px] 2xl:tw-h-[50px] xl:tw-h-[50px]"
        />
        <div className="tw-hidden md:tw-block 3xl:tw-w-[1700px] tw-w-[80%] xl:tw-mb-10 3xl:tw-mt-[100px]">
          <SwipeableViews enableMouseEvents index={slideIndex}>
            <div className="tw-grid tw-grid-cols-5 tw-gap-y-[18px]">
              {nftItems.map((item) => {
                return (
                  <img
                    src={item.image}
                    alt="next"
                    onClick={nextSlide}
                    onMouseOver={(e) => {
                      e.currentTarget.src = item.hoverImage;
                    }}
                    onMouseOut={(e) => (e.currentTarget.src = item.image)}
                  />
                );
              })}
            </div>
            <div className="tw-grid tw-grid-cols-5 tw-gap-y-[18px]">
              {nftItemsScroll.map((item) => {
                return (
                  <img
                    src={item.image}
                    alt="nftimage"
                    onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                    onMouseOut={(e) => (e.currentTarget.src = item.image)}
                  />
                );
              })}
            </div>
          </SwipeableViews>
        </div>
        <div id="mobile-carousel">
          {nftItems.concat(nftItemsScroll).map((item, index) => {
            return (
              <div key={index} id="nft">
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
        <div className="lower-row">
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
              className={slideIndex === 1 && 'pink-rectangle-translate'}
              alt="playnow"
            />
            <img
              src={bluerectangle}
              alt="playnow"
              className={slideIndex === 1 && 'blue-rectangle-translate'}
            />
          </div>
          <div className="directionbuttonR">
            {mobile ? (
              <img src={inext} alt="playnow" onClick={nextSlide} />
            ) : (
              <div id="nft-next-button-desktop" onClick={prevSlide} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
