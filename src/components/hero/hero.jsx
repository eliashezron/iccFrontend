import React, { useState, useEffect } from "react"
import "./hero.scss"
import opensea from "../../assets/openseaicon.png"
import discord from "../../assets/discordicon.png"
import twitter from "../../assets/twittericon.png"
import copy from "../../assets/iccaddress.png"
import copyM from "../../assets/copymobiletoken.png"
import home from "../../assets/homeicon.png"
import earn from "../../assets/earnicon.png"
import trade from "../../assets/tradeicon.png"
import more from "../../assets/moreicon.png"
import nft from "../../assets/nfticon.png"
import CopyToClipboard from "react-copy-to-clipboard"

import NavBar from "../navbar/navbar"

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const windowWidth = window.innerWidth
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, [6000])
    }
  }, [copied])
  return (
    <div className='herosection'>
      <NavBar />
      <div className='hero'>
        <div className='heroContainer'>
          <div className='theorySection'>
            <div className='logoImage'>
              <div id='heroImage'></div>
            </div>
            <div className='textfield'>
              <p>
                Intergalactic Cockroach Space Race is an esport game based on
                blockchain technology. <br></br>
                You can gather your friends, form a team, battle with others and
                earn crypto with just your skills
              </p>
              <p>#IntergalacticCockroach #ICC #SpaceRace # P2E #NFT</p>

              <iframe
                className='mobile-iframe'
                title='icc video'
                src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0'
              ></iframe>

              <div className='inputdv'>
                <div className='inputdiv'>
                  <p>$ICC Contract Address</p>
                  {copied && <span id='copyid'>Copied</span>}
                </div>
                <div className='icccontractx'>
                  {/* <p>BEP20|0x8d672014fb107cb409dccd9042dda3b97313f4c3</p> */}
                  {windowWidth < 480 ? (
                    <CopyToClipboard
                      text='0x8d672014fb107cb409dccd9042dda3b97313f4c3'
                      onCopy={() => setCopied(true)}
                    >
                      <img src={copyM} alt='copy' />
                    </CopyToClipboard>
                  ) : (
                    <CopyToClipboard
                      text='0x8d672014fb107cb409dccd9042dda3b97313f4c3'
                      onCopy={() => setCopied(true)}
                    >
                      <img src={copy} alt='copy' />
                    </CopyToClipboard>
                  )}
                </div>
              </div>
            </div>
            <div className='playButton'>
              {windowWidth < 480 ? (
                <div id='playmobile-button-desktop' />
              ) : (
                <div id='playh-button-desktop' />
              )}
            </div>
          </div>
          <div className='gifSection'>
            {windowWidth > 480 && (
              <div className='gifSection'>
                <iframe
                  title='icc video'
                  src='https://www.youtube.com/embed/HhIl_XJ-OGA?autoplay=1&mute=1&loop=1&controls=0'
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <div className='socialIcons'>
          <div className='communitybuttons'>
            <a href='#home'>
              <img src={opensea} alt='opensea' />
            </a>
            <a href='#home'>
              <img src={twitter} alt='discord' />
            </a>
            <a href='#home'>
              <img src={discord} alt='twitter' />
            </a>
          </div>
        </div>
        <div className='mobile-nav'>
          <img src={home} alt='' />
          <img src={nft} alt='' />
          <img src={earn} alt='' />
          <img src={trade} alt='' />
          <img src={more} alt='' />
        </div>
      </div>
    </div>
  )
}
