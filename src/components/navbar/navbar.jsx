import React, { useState } from "react"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"
import { navItems } from "../../data/navItems"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className='navbar'>
      <div className='navcontainer'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navlinks'>
          <ul>
            {navItems.map((item) => (
              <div className={`dropdown ${dropdown && "active"}`} key={item.id}>
                <button
                  key={item.id}
                  onClick={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  className={`${dropdown ? "active" : "button"}`}
                >
                  {item.title}
                </button>
                {item.subMenu &&
                  item.subMenu.map((subItem, index) => (
                    <div className='dropdown-content'>
                      <a href={subItem.path} key={index}>
                        {subItem.subtitle}
                      </a>
                    </div>
                  ))}
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
