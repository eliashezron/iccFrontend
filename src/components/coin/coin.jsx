import React from 'react';
import './coin.scss';
import coin from '../../assets/coinimagepng.png';
import mcoin from '../../assets/mcoin.png';
export default function Coin() {
  return (
    <section id="icc-coin">
      <div className="container">
        <h1 className="tw-text-[2rem] xl:tw-text-[2.3rem] 2xl:tw-text-[2.8rem] 3xl:tw-text-[3.4rem]">
          What's ICC Coin?
        </h1>
        <p className="tw-text-[0.8rem] tw-leading-6 xl:tw-text-[0.85rem] 2xl:tw-text-[0.9rem] 3xl:tw-text-[1.2rem] 2xl:tw-leading-8 tw-tracking-wider">
          ICC Coin is our main ingame currency which can be achieved by purchase
          in open market or<br></br>by playing game modes and participating in
          many other activities.
        </p>
        <div
          id="icc-coin-img-desktop"
          style={{
            backgroundImage: `url(${coin})`,
          }}
        />
        <div
          id="icc-coin-img-mobile"
          style={{
            backgroundImage: `url(${mcoin})`,
          }}
        />
        {/* <div id="buy-icc-button" /> */}
      </div>
    </section>
  );
}
