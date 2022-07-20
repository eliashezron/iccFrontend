import React from 'react';
import './coin.scss';
import coinDesktop from '../../assets/coin-desktop.png';
import mcoin from '../../assets/mcoin.png';

export default function Coin() {
  return (
    <section id="icc-coin">
      <div className="container">
        <h1 className="tw-text-[30px] tw-mb-[7px] tw-mt-[52px] xl:tw-mt-[110px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] xl:tw-leading-[80px] tw-leading-[38px]">
          What's ICC Coin?
        </h1>
        <p className="tw-text-[18px] xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] 2x:tw-mb-[82px] tw-mb-[40px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          ICC Coin is our main ingame currency which can be achieved by purchase
          in open market or<br></br>by playing game modes and participating in
          many other activities.
        </p>
        <div
          className="tw-hidden tw-bg-no-repeat tw-bg-contain tw-bg-center md:tw-flex 3xl:tw-w-[1649px] 3xl:tw-h-[511px] 2xl:tw-w-[1549px] 2xl:tw-h-[411px] xl:tw-w-[1149px] xl:tw-h-[381px]"
          style={{
            backgroundImage: `url(${coinDesktop})`,
          }}
        />

        <img className="md:tw-hidden" src={mcoin} alt="" />
        <div
          id="buy-icc-button"
          className="2xl:-tw-mt-[5rem] xl:-tw-mt-[5rem] 3xl:tw-h-[69px] 3xl:tw-w-[338px] 2xl:tw-h-[58px] 2xl:tw-w-[300px] xl:tw-h-[49px] xl:tw-w-[250px] tw-h-[49px] tw-w-[250px] tw-bg-red-500"
        />
      </div>
    </section>
  );
}
