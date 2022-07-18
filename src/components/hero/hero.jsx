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
        <div className="tw-flex lg:tw-flex-row tw-w-full tw-h-[62vh] xl:tw-h-[66vh] 2xl:tw-h-[59.5vh] 3xl:tw-h-[63vh] tw-gap-10">
          <div className="tw-flex tw-flex-col tw-w-[40%] tw-justify-center tw-text-justify tw-h-full tw-items-center md:tw-items-start">
            <div
              id="hero-image"
              className="tw-h-[190px] md:tw-h-[270px] xl:tw-h-[230px] 3xl:tw-h-[270px] tw-bg-contain xl:tw-bg-cover tw-mb-2 tw-w-full"
            />
            <div className="tw-text-sm md:tw-text-[13px] lg:tw-text-[12px] 2xl:tw-text-[15px] 3xl:tw-text-[18px] 3xl:tw-leading-7 tw-tracking-wide tw-text-white tw-font-semibold md:tw-mt-2 tw-mb-2">
              Intergalactic Cockroach Space Race is an esport game based on
              blockchain technology. <br></br>
              You can gather your friends, form a team, battle with others and
              earn crypto with just your skills
            </div>
            <div className="tw-text-sm 3xl:tw-text-[18px] 3xl:tw-mb-[4rem] tw-tracking-wide md:tw-text-base tw-text-[#00ffe0] tw-font-semibold tw-mb-4">
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
            <div id="play-now-button" className="tw-h-[80px] tw-w-[100%]" />
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
          <img
            src={earn}
            onClick={() => window.location.replace('/#game-play')}
            alt=""
          />
          <img
            src={trade}
            onClick={() => window.location.replace('/#coin')}
            alt=""
          />
          <img src={more} alt="" />
        </div>
      </div>
    </section>
  );
}
