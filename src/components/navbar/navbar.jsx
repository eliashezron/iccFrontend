import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/logo.png';
import { navItems } from '../../data/navItems';
import { motion, AnimatePresence } from 'framer-motion';
import NavBarPlayButton from './components/NavBarPlayButton';

const Navbar = () => {
  const [clickedMenuItem, setClickedMenuItem] = useState('1');

  React.useEffect(() => {}, []);

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
                  className="dropdown"
                  key={Math.random() * index}
                >
                  <button>
                    <span>{item.title}</span>
                  </button>
                  <AnimatePresence>
                    {clickedMenuItem === item.title && (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          y: '-15px',
                          pointerEvents: 'none',
                        }}
                        animate={{
                          pointerEvents: 'all',
                          y: '0px',
                          opacity: 1,
                        }}
                        exit={{
                          pointerEvents: 'none',
                          y: '-15px',
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="dropdown-content">
                          {item?.subMenu?.map((subMenuItem, index) => {
                            return (
                              <a href={subMenuItem.path} key={index}>
                                {subMenuItem.subtitle}
                              </a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </ul>
            <NavBarPlayButton />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          opacity: 0,
          pointerEvents: clickedMenuItem ? 'all' : 'none',
          zIndex: 0,
        }}
        onMouseOver={() => {
          setClickedMenuItem();
        }}
      />
    </>
  );
};

export default Navbar;
