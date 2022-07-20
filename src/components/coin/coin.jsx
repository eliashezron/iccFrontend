import React from 'react';
import './coin.scss';
import coinDesktop from '../../assets/coin-desktop.png';
import mcoin from '../../assets/mcoin.png';

export default function Coin() {
  return (
    <section id="icc-coin">
      <div className="container">
        <h1 className="tw-text-[2rem] tw-mt-[110px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] tw-leading-[80px]">
          What's ICC Coin?
        </h1>
        <p className="tw-text-[0.8rem] xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] tw-mb-[82px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          ICC Coin is our main ingame currency which can be achieved by purchase
          in open market or<br></br>by playing game modes and participating in
          many other activities.
        </p>
        <div
          className="tw-hidden tw-bg-no-repeat tw-bg-center md:tw-flex 3xl:tw-w-[1649px] 3xl:tw-h-[511px]"
          style={{
            backgroundImage: `url(${coinDesktop})`,
          }}
        />

        <img className="md:tw-hidden" src={mcoin} alt="" />
        <div
          id="buy-icc-button"
          className="2xl:-tw-mt-[8rem] 3xl:-tw-mt-[5rem] 3xl:tw-h-[3.5rem]"
        />
      </div>
    </section>
  );
}
