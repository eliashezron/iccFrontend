import React, { useState, useEffect } from "react"
import "./hero.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnowlong.svg"
import playnowhover from "../../assets/playnowlonghover.svg"
import opensea from "../../assets/openseaicon.png"
import discord from "../../assets/discordicon.png"
import twitter from "../../assets/twittericon.png"
import copy from "../../assets/iccaddress.png"
import homeSvg from "../../assets/ihome.svg"
// import homehoverSvg from "../../assets/ihomehover.svg"
// import earn from "../../assets/iearn.svg"
// import earnhover from "../../assets/iearn.svg"
// import coin from "../../assets/icoin.svg"
// import more from "../../assets/imore.svg"
// import morehover from "../../assets/imorehover.svg"
import { CopyToClipboard } from "react-copy-to-clipboard"

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
    <div className='hero'>
      <div className='heroContainer'>
        <div className='theorySection'>
          <div className='logoImage'>
            <img src={logo} alt='logo' />
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
                <CopyToClipboard
                  text='0x8d672014fb107cb409dccd9042dda3b97313f4c3'
                  onCopy={() => setCopied(true)}
                >
                  <img src={copy} alt='copy' />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className='playButton'>
            {/* <div id='playh-button-desktop' /> */}
            <img
              src={playnow}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
              onMouseOut={(e) => (e.currentTarget.src = playnow)}
            />
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
        <img src={homeSvg} alt='' />
        <img src={homeSvg} alt='' />
        <img src={homeSvg} alt='' />
        <img src={homeSvg} alt='' />
      </div>
    </div>
  )
}
