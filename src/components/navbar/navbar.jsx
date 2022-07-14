import React, { useState } from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import { navItems } from "../../data/navItems"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  const [clickedMenuItem, setClickedMenuItem] = useState()

  return (
    <>
      <div className='navbar'>
        <div className='navcontainer'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='navlinks'>
            <ul>
              {navItems.map((item, index) => (
                <div
                  id={index}
                  onClick={() => {
                    if (item.subMenu) {
                      setClickedMenuItem(item.title)
                    }
                  }}
                  className={`dropdown ${dropdown && "active"}`}
                  key={Math.random() * index}
                >
                  <button
                    onClick={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className={`${dropdown ? "active" : "button"}`}
                  >
                    {item.title}
                  </button>
                  {item.title === "Earn" ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title ? "visible" : "invisible"
                      }`}
                    >
                      <a href={item.path}>pools</a>
                      <a href={item.path}>farms</a>
                    </div>
                  ) : item.title === "Trade" ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title ? "visible" : "invisible"
                      }`}
                    >
                      <a
                        href={item.path}
                        key={Math.floor(Math.random() * index)}
                      >
                        Liquidity
                      </a>
                      <a
                        href={item.path}
                        key={Math.floor(Math.random() * index)}
                      >
                        Exchange
                      </a>
                    </div>
                  ) : item.title === "More" ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title ? "visible" : "invisible"
                      }`}
                    >
                      <a
                        href={item.path}
                        key={Math.floor(Math.random() * index)}
                      >
                        WhitePaper
                      </a>
                      <br />
                    </div>
                  ) : null}
                </div>
              ))}
            </ul>
            <div className='playButton'>
              <div id='play-button-desktop'></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='back-drop'
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: clickedMenuItem ? "all" : "none",
          zIndex: 0,
        }}
        onClick={() => {
          setClickedMenuItem()
        }}
      />
    </>
  )
}

export default Navbar
