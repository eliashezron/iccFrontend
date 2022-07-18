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
import logo from '../../assets/logo.png';
import footerlogoicon from '../../assets/footerlogoicon.png';
import CopyToClipboard from 'react-copy-to-clipboard';

import NavBar from '../navbar/navbar';
import HeroPlayButton from './components/HeroPlayButton';

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
        <div className="tw-flex lg:tw-flex-row tw-w-full tw-h-[62vh] xl:tw-h-[66vh] 2xl:tw-h-[59.5vh] 3xl:tw-h-[644px] tw-gap-[35px] 3xl:tw-ml-[50px]">
          <div className="tw-flex tw-flex-col 3xl:tw-w-[672px] tw-justify-start tw-text-justify tw-items-center md:tw-items-start">
            <img
              src={logo}
              onMouseOver={(e) => (e.currentTarget.src = footerlogoicon)}
              onMouseOut={(e) => (e.currentTarget.src = logo)}
              alt=""
              className="tw-h-[190px] md:tw-h-[270px] xl:tw-h-[230px] 3xl:tw-h-[270px] 3xl:tw-w-[672.56px] tw-bg-contain xl:tw-bg-cover tw-mb-2 tw-w-full"
            />
            {/* className="tw-text-sm md:tw-text-[13px] lg:tw-text-[12px] 2xl:tw-text-[15px] 3xl:tw-text-[18px] 3xl:tw-leading-7 tw-tracking-wide tw-text-white tw-font-semibold md:tw-mt-2 tw-mb-2" */}
            <div className="tw-text-white tw-my-2 tw-font-semibold tw-text-[19px]">
              Intergalactic Cockroach Space Race is an esport game based on
              blockchain technology.
              <br /> You can gather your friends, form a team, battle with
              others and earn crypto with just your skills
            </div>
            {/* className="tw-text-sm 3xl:tw-text-[18px] 3xl:tw-mb-[3rem] tw-tracking-wide md:tw-text-base tw-text-[#00ffe0] tw-font-semibold tw-mb-4" */}
            <div className="tw-text-[#00ffe0] tw-text-[17px] tw-my-2 tw-font-semibold tw-tracking-wider">
              #IntergalacticCockroach #ICC #SpaceRace # P2E #NFT
            </div>
            <iframe
              className="mobile-iframe"
              title="icc video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0"
            ></iframe>
            <div className="tw-flex tw-text-base tw-font-semibold tw-text-white tw-w-full tw-mt-auto">
              <span>$ICC Contract Address</span>
              {copied && <span className="tw-ml-auto ">Copied</span>}
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
            <HeroPlayButton />
            {/* <img
              src={playNow}
              onMouseOver={(e) => (e.currentTarget.src = playNowidlehover)}
              onMouseOut={(e) => (e.currentTarget.src = playNow)}
              alt=""
              className="tw-h-[76px] tw-w-[660px] tw-mt-4"
            /> */}
          </div>
          <iframe
            className="3xl:tw-rounded-[50px] 2xl:tw-rounded-[40px] 3xl:tw-w-[936px] 3xl:tw-h-[644px] tw-hidden md:tw-block tw-h-full tw-w-full tw-border-[10px] tw-border-[#fbc4e6]"
            title="icc video"
            src="https://www.youtube.com/embed/HhIl_XJ-OGA?autoplay=1&mute=1&loop=1&controls=0"
          ></iframe>
        </div>
        <div className="social-icons 2xl:tw-gap-[1.8rem] 3xl:tw-h-[318px] 3xl:tw-w-[90px]">
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
