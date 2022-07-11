import React from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"
// import home from "../../assets/ihomei.svg"
// import homehover from "../../assets/ihomehoveri.svg"
// import earn from "../../assets/iearni.svg"
// import earnhover from "../../assets/iearnhoveri.svg"
// import trade from "../../assets/itrade.svg"
// import tradehover from "../../assets/itradehover.svg"
// import nft from "../../assets/infti.svg"
// import nfthover from "../../assets/infthoveri.svg"
// import more from "../../assets/imore.svg"
// import morehover from "../../assets/imorehover.svg"

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
              <button>
                Home
                {/* <img
                  src={home}
                  alt='home'
                  onMouseOver={(e) => (e.currentTarget.src = homehover)}
                  onMouseOut={(e) => (e.currentTarget.src = home)}
                /> */}
              </button>
            </li>
            <li>
              <button>
                nft
                {/* <img
                  src={nft}
                  alt='nft'
                  onMouseOver={(e) => (e.currentTarget.src = nfthover)}
                  onMouseOut={(e) => (e.currentTarget.src = nft)}
                /> */}
              </button>
            </li>
            <li>
              <button>
                earn
                {/* <img
                  src={earn}
                  alt='earn'
                  onMouseOver={(e) => (e.currentTarget.src = earnhover)}
                  onMouseOut={(e) => (e.currentTarget.src = earn)}
                /> */}
              </button>
            </li>
            <li>
              <button>
                trade
                {/* <img
                  src={trade}
                  alt='trade'
                  onMouseOver={(e) => (e.currentTarget.src = tradehover)}
                  onMouseOut={(e) => (e.currentTarget.src = trade)}
                /> */}
              </button>
            </li>
            <li>
              <button>
                More
                {/* <img
                  src={more}
                  alt='more'
                  onMouseOver={(e) => (e.currentTarget.src = morehover)}
                  onMouseOut={(e) => (e.currentTarget.src = more)}
                /> */}
              </button>
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
