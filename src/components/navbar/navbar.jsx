import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/logo.png';
import playnow from '../../assets/playnow.svg';
import playnowhover from '../../assets/playnowhover.svg';
import { navItems } from '../../data/navItems';

const Navbar = () => {
  const [clickedMenuItem, setClickedMenuItem] = useState();

  return (
    <>
      <div className="navbar">
        <div className="navcontainer">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navlinks">
            <ul>
              {navItems.map((item, index) => (
                <div
                  id={index}
                  onClick={() => {
                    if (item.subMenu) {
                      setClickedMenuItem(item.title);
                    }
                  }}
                  onMouseOut={() => {
                    setClickedMenuItem();
                  }}
                  className="dropdown"
                  key={Math.random() * index}
                >
                  <button>{item.title}</button>
                  {item.title === 'Earn' ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title &&
                        'dropdown-content-visible'
                      }`}
                    >
                      <a href={item.path}>pools</a>
                      <a href={item.path}>farms</a>
                    </div>
                  ) : item.title === 'Trade' ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title &&
                        'dropdown-content-visible'
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
                  ) : item.title === 'More' ? (
                    <div
                      className={`dropdown-content ${
                        clickedMenuItem === item.title &&
                        'dropdown-content-visible'
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
            <div className="playButton">
              <img
                src={playnow}
                alt="playnow"
                onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
                onMouseOut={(e) => (e.currentTarget.src = playnow)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
