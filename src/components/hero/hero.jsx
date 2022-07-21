import React, { useState, useEffect } from "react"
import "./hero.scss"
import twitter from "../../assets/twittericon.png"
import discord from "../../assets/discordicon.png"
import opensea from "../../assets/openseaicon.png"
import copy from "../../assets/iccaddress.png"
import copyM from "../../assets/copymobiletoken.png"
import home from "../../assets/homeicon.png"
import earn from "../../assets/earnicon.png"
import trade from "../../assets/tradeicon.png"
import more from "../../assets/moreicon.png"
import nft from "../../assets/nfticon.png"
import logo from "../../assets/logo.png"
import footerlogoicon from "../../assets/footerlogoicon.png"
import CopyToClipboard from "react-copy-to-clipboard"

import NavBar from "../navbar/navbar"

export default function Hero() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, [6000])
    }
  }, [copied])
  return (
    <section id='hero'>
      <NavBar />
      <div id='hero' className=''>
        <div className='tw-flex lg:tw-flex-row tw-w-full xl:tw-h-[480px] 2xl:tw-h-[550px] 3xl:tw-h-[644px] 2xl:tw-gap-[35px] tw-gap-[22px] 3xl:tw-ml-[150px] 2xl:tw-ml-[120px] xl:tw-ml-[93px]'>
          <div className='tw-flex tw-flex-col tw-mt-[75px] xl:tw-mt-0 3xl:tw-w-[672px] 2xl:tw-w-[550px] xl:tw-w-[480px] tw-justify-start tw-text-justify tw-items-center md:tw-items-start'>
            <img
              src={logo}
              onMouseOver={(e) => (e.currentTarget.src = footerlogoicon)}
              onMouseOut={(e) => (e.currentTarget.src = logo)}
              alt=''
              className='tw-h-[132px] tw-w-[330px] xl:tw-h-[180px] 2xl:tw-h-[230px] 3xl:tw-h-[255px] tw-bg-contain xl:tw-bg-cover xl:tw-w-full'
            />
            <div className='tw-text-white tw-text-center tw-w-[330px] xl:tw-w-full 3xl:tw-mt-[48px] tw-mt-[15px] xl:tw-mt-[30px] tw-font-[900] tw-tracking-[-0.01em] 3xl:tw-text-[18px] 2xl:tw-text-[16px] xl:tw-text-[14px] tw-text-[18px] tw-leading-[20px]'>
              Intergalactic Cockroach Space Race is an esport game based on
              blockchain technology.
              <br /> You can gather your friends, form a team, battle with
              others and earn crypto with just your skills
            </div>
            <div className='tw-text-[#00FFE0] tw-text-center 3xl:tw-text-[18px] 2xl:tw-text-[16px] xl:tw-text-[14px] xl:tw-my-2 tw-font-[800] tw-mt-[13px] 3xl:tw-mb-[48px] tw-mb-[24px] xl:tw-mb-[30px] tw-tracking-wider'>
              #IntergalacticCockroach #ICC #SpaceRace # P2E #NFT
            </div>
            <iframe
              className='mobile-iframe tw-mb-[22px]'
              title='icc video'
              src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0'
            ></iframe>
            <div className='tw-flex tw-text-[18px] tw-justify-center 3xl:tw-text-[18px] 2xl:tw-text-[16px] xl:tw-text-[14px] tw-font-[800] tw-leading-[23px] tw-text-white tw-w-full tw-mb-[5px]'>
              <div>$ICC Contract Address</div>
              {copied && <span className='tw-ml-auto tw-text-sm'>Copied</span>}
            </div>
            <div className='md:tw-hidden'>
              <CopyToClipboard
                text='0x8d672014fb107cb409dccd9042dda3b97313f4c3'
                onCopy={() => setCopied(true)}
              >
                <img src={copyM} alt='copy' />
              </CopyToClipboard>
            </div>
            <div className='tw-hidden md:tw-block'>
              <CopyToClipboard
                text='0x8d672014fb107cb409dccd9042dda3b97313f4c3'
                onCopy={() => setCopied(true)}
              >
                <img src={copy} alt='copy' />
              </CopyToClipboard>
            </div>

            <div className='hero-play-button tw-mt-[15px] tw-relative tw-min-w-full 3xl:tw-h-[75px] 2xl:tw-h-[70px] xl:tw-h-[60px]' />
          </div>
          <iframe
            className='3xl:tw-rounded-[50px] 2xl:tw-rounded-[40px] xl:tw-rounded-[30px] lg:tw-rounded-[20px] 3xl:tw-w-[936px] 2xl:tw-w-[780px] xl:tw-w-[680px] tw-hidden md:tw-block tw-min-h-full tw-w-full 3xl:tw-border-[10px] tw-border-[8px] tw-border-[#fbc4e6]'
            title='icc video'
            src='https://www.youtube.com/embed/HhIl_XJ-OGA?autoplay=1&mute=1&loop=1&controls=0'
          ></iframe>
        </div>
        {/*  height: 242px;
      width: 100px; */}
        <div className='social-icons 3xl:tw-w-[90px] tw:tw-h-[318px] tw-w-[75px] tw-h-[280px]'>
          <div className='container 3xl:tw-w-[90px] tw:tw-h-[242px] tw-w-[75px] tw-h-[260px] 3xl:tw-gap-[35px] tw-gap-[20px]'>
            <a
              href='#home'
              className='3xl:tw-w-auto 3xl:tw-h-auto xl:tw-w-[40px] xl:tw-h-[40px]'
            >
              <img src={opensea} alt='opensea' />
            </a>
            <a
              href='#home'
              className='3xl:tw-w-auto 3xl:tw-h-auto xl:tw-w-[40px] xl:tw-h-[40px]'
            >
              <img src={twitter} alt='discord' />
            </a>
            <a
              href='#home'
              className='3xl:tw-w-auto 3xl:tw-h-auto xl:tw-w-[40px] xl:tw-h-[40px]'
            >
              <img src={discord} alt='twitter' />
            </a>
          </div>
        </div>
        <div id='mobile-nav'>
          <img
            src={home}
            alt=''
            onClick={() => window.location.replace("/#hero")}
          />
          <img
            src={nft}
            alt=''
            onClick={() => window.location.replace("/#nft-genesis")}
          />
          <img
            src={earn}
            onClick={() => window.location.replace("/#game-play")}
            alt=''
          />
          <img
            src={trade}
            onClick={() => window.location.replace("/#coin")}
            alt=''
          />
          <img src={more} alt='' />
        </div>
      </div>
    </section>
  )
}
