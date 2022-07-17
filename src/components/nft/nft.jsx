import React, { useState } from 'react';
import './nft.scss';
import pinkrrectangle from '../../assets/pinkrectangle.svg';
import bluerectangle from '../../assets/bluerectangle.svg';
import inext from '../../assets/ipreviousb.svg';
import iprevious from '../../assets/iprevious.svg';
import { nftItems } from '../../data/nftIteams';
import { nftItemsScroll } from '../../data/nftIteams';
// import mintmobile from '../../assets/mintmobile.png';
// import mintmobilehover from '../../assets/mintmobilehover.png';

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
        <h1>NFT GENESIS SERIES</h1>
        <p>Play, Stake, Hold or just brag with our NFT Genesis series !</p>
        <div id="mint-button-desktop" />
        <div id="mint-button-mobile" />
        <div className="desktop-carousel md:tw-mt-[1.5rem]">
          <SwipeableViews enableMouseEvents index={slideIndex}>
            <div className="nft-grid">
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
            <div className="nft-grid">
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
              <div id="nft-next-button-desktop" onClick={nextSlide} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
