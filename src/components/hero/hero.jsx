import React, { useState, useEffect } from 'react';
import './hero.scss';
import twitter from '../../assets/twittericon.png';
import discord from '../../assets/discordicon.png';
import opensea from '../../assets/openseaicon.png';
import copy from '../../assets/iccaddress.png';
import copyM from '../../assets/copymobiletoken.png';
import home from '../../assets/homeicon.png';
import earn from '../../assets/earnicon.png';
import trade from '../../assets/tradeicon.png';
import more from '../../assets/moreicon.png';
import nft from '../../assets/nfticon.png';
// import playNow from '../../assets/playnowidle.png';
// import playNowidlehover from '../../assets/playnowidlehover.png';
import CopyToClipboard from 'react-copy-to-clipboard';

import NavBar from '../navbar/navbar';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, [6000]);
    }
  }, [copied]);
  return (
    <section id="hero">
      <NavBar />
      <div id="hero">
        <div className="tw-flex md:tw-flex-row tw-w-full tw-gap-10">
          <div className="tw-flex tw-flex-col md:tw-flex-[1] tw-text-center md:tw-text-start">
            <div id="hero-image" />
            <div className="tw-text-sm md:tw-text-md tw-tracking-wide tw-text-white tw-font-semibold md:tw-mt-10 tw-my-2">
              Intergalactic Cockroach Space Race is an esport game based on
              blockchain technology. <br></br>
              You can gather your friends, form a team, battle with others and
              earn crypto with just your skills
            </div>
            <div className="tw-text-sm tw-tracking-wide md:tw-text-base tw-text-[#00ffe0] tw-font-semibold tw-mb-4">
              #IntergalacticCockroach #ICC #SpaceRace # P2E #NFT
            </div>
            <iframe
              className="mobile-iframe"
              title="icc video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0"
            ></iframe>
            <div className="tw-text-base tw-font-semibold tw-mb-2 tw-text-white">
              <span>$ICC Contract Address</span>
              {copied && <span id="copyid">Copied</span>}
            </div>
            <div className="md:tw-hidden">
              <CopyToClipboard
                text="0x8d672014fb107cb409dccd9042dda3b97313f4c3"
                onCopy={() => setCopied(true)}
              >
                <img src={copyM} alt="copy" />
              </CopyToClipboard>
            </div>
            <div className="tw-hidden md:tw-block">
              <CopyToClipboard
                text="0x8d672014fb107cb409dccd9042dda3b97313f4c3"
                onCopy={() => setCopied(true)}
              >
                <img src={copy} alt="copy" />
              </CopyToClipboard>
            </div>
            <div id="play-now-button" />
          </div>
          <div className="tw-hidden md:tw-flex tw-flex-col tw-flex-[1]">
            <iframe
              className="tw-rounded-[25px] tw-hidden md:tw-block tw-h-full tw-w-full tw-border-[5px] tw-border-[#fbc4e6]"
              title="icc video"
              src="https://www.youtube.com/embed/HhIl_XJ-OGA?autoplay=1&mute=1&loop=1&controls=0"
            ></iframe>
          </div>
        </div>
        <div className="social-icons">
          <div className="community-buttons">
            <a href="#home">
              <img src={opensea} alt="opensea" />
            </a>
            <a href="#home">
              <img src={twitter} alt="discord" />
            </a>
            <a href="#home">
              <img src={discord} alt="twitter" />
            </a>
          </div>
        </div>
        <div id="mobile-nav">
          <img
            src={home}
            alt=""
            onClick={() => window.location.replace('/#hero')}
          />
          <img
            src={nft}
            alt=""
            onClick={() => window.location.replace('/#nft-genesis')}
          />
          <img src={earn} alt="" />
          <img src={trade} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </section>
  );
}
