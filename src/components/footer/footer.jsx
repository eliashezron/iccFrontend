import React from 'react';
import './footer.scss';
import logo from '../../assets/logo.png';
import opensea from '../../assets/opensea.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import mintnow from '../../assets/mintnow.svg';
import mintnowhover from '../../assets/mintnowhover.svg';
import playnow from '../../assets/playnowlong.svg';
import playnowhover from '../../assets/playnowlonghover.svg';
import iccprice from '../../assets/iccprice.svg';
import buyicca from '../../assets/buyicca.svg';
import bgc from '../../assets/bgc.png';
import buyiccahover from '../../assets/buyiccahover.svg';
import Button from '../../shared/Button';

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div id="mobile-view">
          <img src={logo} alt="logo" id="logo" />
          <h1>2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.</h1>
          <div className="btn-column">
            <img
              id="play-now"
              src={playnow}
              alt="playnow"
              onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
              onMouseOut={(e) => (e.currentTarget.src = playnow)}
            />
            <img
              id="buy-icc"
              src={buyicca}
              alt="buyicca"
              onMouseOver={(e) => (e.currentTarget.src = buyiccahover)}
              onMouseOut={(e) => (e.currentTarget.src = buyicca)}
            />
            <img
              id="mint-icc"
              src={mintnow}
              alt="playnow"
              onMouseOver={(e) => (e.currentTarget.src = mintnowhover)}
              onMouseOut={(e) => (e.currentTarget.src = mintnow)}
            />
            <div className="btn-grid">
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
            <img id="icc-price" src={iccprice} alt="icc price" />
            <div className="community-btn">
              <p>Join our community</p>
              <div className="communitybuttons">
                <a href="#home">
                  <img src={opensea} alt="opensea" />
                </a>
                <a href="#home">
                  <img src={discord} alt="discord" />
                </a>
                <a href="#home">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================== */}
        <div className="md:tw-flex tw-w-full tw-flex-row tw-gap-10 tw-mb-6 tw-hidden">
          <img
            className="tw-w-[600px] tw-h-[150px] 3xl:tw-w-[468px] 3xl:tw-h-[188px]"
            src={logo}
            alt=""
          />
          <div className="tw-flex tw-w-[70%] tw-flex-row">
            <div className="tw-grid tw-grid-cols-3 tw-gap-1 3xl:tw-gap-4 tw-w-[65%]">
              <Button className="3xl:tw-w-[212px]">Home</Button>
              <Button className="3xl:tw-w-[212px]">Earn</Button>
              <Button className="3xl:tw-w-[212px]">Trade</Button>
              <Button className="3xl:tw-w-[212px]">WhitePaper</Button>
              <Button className="3xl:tw-w-[212px]">Farms</Button>
              <Button className="3xl:tw-w-[212px]">Exchange</Button>
              <Button className="3xl:tw-w-[212px]">Nfts</Button>
              <Button className="3xl:tw-w-[212px]">Pools</Button>
              <Button className="3xl:tw-w-[212px]">Liquidity</Button>
            </div>
            <div className="tw-border-l-[1.5px] tw-mx-4 tw-border-[#0bfff0]" />

            <div className="tw-flex tw-flex-col tw-items-center tw-w-[40%] tw-gap-4">
              <div
                className="tw-bg-no-repeat tw-h-[83px] 3xl:tw-h-[134px] tw-w-[400px] tw-rounded-[30px] tw-p-1 tw-bg-cover tw-bg-center tw-flex tw-flex-col tw-items-center tw-overflow-hidden tw-gap-1"
                style={{
                  backgroundImage: `url(${bgc})`,
                }}
              >
                <div className="tw-font-semibold 3xl:tw-text-[1.4rem] tw-text-[#fff060]">
                  Join our community
                </div>
                <div className="tw-flex tw-gap-[3rem]">
                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[60px] 3xl:tw-h-[60px]"
                    src={opensea}
                    alt="opensea"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[60px] 3xl:tw-h-[60px]"
                    src={discord}
                    alt="discord"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[60px] 3xl:tw-h-[60px]"
                    src={twitter}
                    alt="twitter"
                  />
                </div>
              </div>
              <Button className="3xl:tw-w-[272px]">contact us</Button>
            </div>
          </div>
        </div>
        <div className="md:tw-flex tw-w-full tw-justify-between tw-items-end tw-hidden">
          <div className="tw-flex tw-flex-col tw-text-start tw-items-start tw-w-[60%]">
            <div
              id="footer-play-button"
              className="tw-h-[80px] tw-w-[500px] 3xl:tw-w-[730px]"
            />
            <div className="tw-text-[#fff060] tw-uppercase tw-text-base 3xl:tw-text-[1.4rem] tw-font-extrabold">
              2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-gap-2 tw-items-end tw-w-[40%]">
            <img
              className="tw-h-[70px] tw-w-[280px] 3xl:tw-w-[362px] 3xl:tw-h-[98px]"
              src={iccprice}
              alt=""
            />
            <div className="tw-flex tw-flex-col">
              <div
                id="footer-mint-now-button"
                className="tw-h-[50px] tw-w-[200px] 3xl:tw-w-[266px] 3xl:tw-h-[55px] tw-mb-1"
              />

              <div
                id="footer-buy-icc-button"
                className="tw-h-[50px] tw-w-[200px] 3xl:tw-w-[266px] 3xl:tw-h-[55px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
