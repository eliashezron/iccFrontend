import React, { useState, useEffect } from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"
import { navItems } from "../../data/navItems"

const Navbarm = () => {
  const [dropdown, setDropdown] = useState(false)

  const [clickedMenuItem, setClickedMenuItem] = useState()
  useEffect(() => {
    if (dropdown) {
      setTimeout(() => {
        setDropdown(false)
      }, [60])
    }
  }, [dropdown])
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
                    // onClick={() => setDropdown(true)}
                    // onMouseLeave={() => setDropdown(false)}
                    className={`${dropdown ? "active" : "button"}`}
                  >
                    {item.title}
                  </button>
                  {item.title === "Earn" ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title &&
                        "dropdown-content-visible"
                      }`}
                      visible={clickedMenuItem === item.title}
                    >
                      <a href={item.path}>pools</a>
                      <a href={item.path}>farms</a>
                    </div>
                  ) : item.title === "Trade" ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title &&
                        "dropdown-content-visible"
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
                        clickedMenuItem === item.title &&
                        "dropdown-content-visible"
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
