import React from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"

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
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#nft'>Nft</a>
            </li>
            <li>
              <a href='#earn'>Earn</a>
            </li>
            <li>
              <a href='#trade'>Trade</a>
            </li>
            <li>
              <a href='#More'>More</a>
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
