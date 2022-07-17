import React from 'react';
import './coin.scss';
import coin from '../../assets/coinimagepng.png';
import mcoin from '../../assets/mcoin.png';
export default function Coin() {
  return (
    <section id="icc-coin">
      <div className="container">
        <h1>What's ICC Coin?</h1>
        <p>
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
        <div id="buy-icc-button" />
      </div>
    </section>
  );
}
