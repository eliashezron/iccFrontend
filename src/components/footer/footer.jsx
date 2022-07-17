import React from "react"
import "./footer.scss"
import logo from "../../assets/logo.png"
import opensea from "../../assets/opensea.png"
import discord from "../../assets/discord.png"
import twitter from "../../assets/twitter.png"
import mintnow from "../../assets/mintnow.svg"
import mintnowhover from "../../assets/mintnowhover.svg"
import playnow from "../../assets/playnowlong.svg"
import playnowhover from "../../assets/playnowlonghover.svg"
import iccprice from "../../assets/iccprice.svg"
import buyicca from "../../assets/buyicca.svg"
import buyiccahover from "../../assets/buyiccahover.svg"
export default function Footer() {
  return (
    <div className='footer'>
      <div id='mobile-view'>
        <img src={logo} alt='logo' id='logo' />
        <h1>2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.</h1>
        <div className='btn-column'>
          <img
            id='play-now'
            src={playnow}
            alt='playnow'
            onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
            onMouseOut={(e) => (e.currentTarget.src = playnow)}
          />
          <img
            id='buy-icc'
            src={buyicca}
            alt='buyicca'
            onMouseOver={(e) => (e.currentTarget.src = buyiccahover)}
            onMouseOut={(e) => (e.currentTarget.src = buyicca)}
          />
          <img
            id='mint-icc'
            src={mintnow}
            alt='playnow'
            onMouseOver={(e) => (e.currentTarget.src = mintnowhover)}
            onMouseOut={(e) => (e.currentTarget.src = mintnow)}
          />
          <div className='btn-grid'>
            <div>
              <button>Home</button>
              <button>Earn</button>
            </div>
            <button>WhitePaper</button>
            <div>
              <button>Trade</button>
              <button>Earn</button>
            </div>
            <div>
              <button>Exchange</button>
              <button>Farms</button>
            </div>
            <div>
              <button>Liquidity</button>
              <button>Pools</button>
            </div>
            <button>Contact</button>
          </div>
          <img id='icc-price' src={iccprice} alt='icc price' />
          <div className='community-btn'>
            <p>Join our community</p>
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
      </div>
      {/* ========================================================== */}
      <div className='upper-row'>
        <div className='footerimg'>
          <div id='footerlogo'></div>
        </div>
        <div className='button-grid'>
          <button>Home</button>
          <button>Earn</button>
          <button>Trade</button>
          <button>WhitePaper</button>
          <button>Farms</button>
          <button>Exchange</button>
          <button>Nfts</button>
          <button>Pools</button>
          <button>Liquidity</button>
          {window.innerWidth < 480 && <button>contact us</button>}
        </div>
        <div className='community'>
          <div className='bgc'>
            <p>Join our community</p>
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
          <button>contact us</button>
        </div>
      </div>
      <div className='lower-row'>
        <div id='col-one'>
          <img
            src={playnow}
            alt='playnow'
            onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
            onMouseOut={(e) => (e.currentTarget.src = playnow)}
          />
          <h1>2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.</h1>
        </div>
        <div id='col-two'>
          <img id='icc-price' src={iccprice} alt='icc price' />
          <div>
            <div id='mint-button-desktop'></div>
            <div id='buy-button-desktop'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
