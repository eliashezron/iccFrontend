import React from "react"
import "./hero.scss"
import sidebar from "../../assets/sidebar1.svg"
import sidebarhover from "../../assets/sidebar1hover.svg"
import gifimage from "../../assets/gifimage.png"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnowlong.svg"
import playnowhover from "../../assets/playnowlonghover.svg"
import opensea from "../../assets/opensea.png"
import discord from "../../assets/discord.png"
import twitter from "../../assets/twitter.png"

export default function Hero() {
  const windowWidth = window.innerWidth
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
            {windowWidth < 480 && (
              <div className='gifSection'>
                <iframe src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0'></iframe>
              </div>
            )}
            <div className='inputdv'>
              <p>$ICC Contract Address</p>
              <input
                placeholder='BEP20|
                0x8d672014fb107cb409dccd9042dda3b97313f4c3'
              ></input>
            </div>
          </div>
          <div className='playButton'>
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
              <iframe src='https://www.youtube.com/embed/HhIl_XJ-OGA?autoplay=1&mute=1&loop=1&controls=0'></iframe>
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
            <img src={discord} alt='discord' />
          </a>
          <a href='#home'>
            <img src={twitter} alt='twitter' />
          </a>
        </div>
      </div>
    </div>
  )
}
