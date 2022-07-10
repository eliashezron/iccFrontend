import React from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"
import home from "../../assets/ihomei.svg"
import homehover from "../../assets/ihomehoveri.svg"
import earn from "../../assets/iearni.svg"
import earnhover from "../../assets/iearnhoveri.svg"
import trade from "../../assets/itrade.svg"
import tradehover from "../../assets/itradehover.svg"
import nft from "../../assets/infti.svg"
import nfthover from "../../assets/infthoveri.svg"
import more from "../../assets/imore.svg"
import morehover from "../../assets/imorehover.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navcontainer'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navlinks'>
          <ul>
            <li>
              <a href='#home'>
                <img
                  src={home}
                  alt='home'
                  onMouseOver={(e) => (e.currentTarget.src = homehover)}
                  onMouseOut={(e) => (e.currentTarget.src = home)}
                />
              </a>
            </li>
            <li>
              <a href='#nft'>
                <img
                  src={nft}
                  alt='nft'
                  onMouseOver={(e) => (e.currentTarget.src = nfthover)}
                  onMouseOut={(e) => (e.currentTarget.src = nft)}
                />
              </a>
            </li>
            <li>
              <a href='#earn'>
                <img
                  src={earn}
                  alt='earn'
                  onMouseOver={(e) => (e.currentTarget.src = earnhover)}
                  onMouseOut={(e) => (e.currentTarget.src = earn)}
                />
              </a>
            </li>
            <li>
              <a href='#trade'>
                <img
                  src={trade}
                  alt='trade'
                  onMouseOver={(e) => (e.currentTarget.src = tradehover)}
                  onMouseOut={(e) => (e.currentTarget.src = trade)}
                />
              </a>
            </li>
            <li>
              <a href='#More'>
                <img
                  src={more}
                  alt='more'
                  onMouseOver={(e) => (e.currentTarget.src = morehover)}
                  onMouseOut={(e) => (e.currentTarget.src = more)}
                />
              </a>
            </li>
          </ul>
          <div className='playButton'>
            <img
              src={playnow}
              alt='playnow'
              onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
              onMouseOut={(e) => (e.currentTarget.src = playnow)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
