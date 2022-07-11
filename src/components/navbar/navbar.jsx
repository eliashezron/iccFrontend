import React from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"
import { navItems } from "../../data/navItems"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navcontainer'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navlinks'>
          <ul>
            {navItems.map((item) => (
              <div className='dropdown' key={item.id}>
                <button key={item.id}>{item.title}</button>
                {item.title === "Earn" ? (
                  <div className='dropdown-content'>
                    <a href={item.path}>pools</a>
                    <a href={item.path}>Farm</a>
                  </div>
                ) : item.title === "Trade" ? (
                  <div className='dropdown-content'>
                    <a href={item.path}>liquidity</a>
                    <a href={item.path}>exchange</a>
                  </div>
                ) : item.title === "More" ? (
                  <div className='dropdown-content'>
                    <a href={item.path}>WhitePaper</a>
                  </div>
                ) : null}
              </div>
            ))}
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
