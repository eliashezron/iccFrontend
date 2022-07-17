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
export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        {/* <div id="mobile-view">
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
        </div> */}
        {/* ==================================================== */}
        <div className="tw-flex tw-w-full tw-flex-row tw-gap-10 tw-mb-6">
          <div
            className="tw-bg-center tw-bg-contain tw-bg-no-repeat tw-w-[600px] tw-h-[150px]"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
          <div className="tw-flex tw-w-full tw-flex-row">
            <div className="tw-grid tw-grid-cols-3 tw-gap-1 tw-w-[65%]">
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Home
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Earn
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Trade
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                WhitePaper
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Farms
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Exchange
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Nfts
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Pools
              </button>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                Liquidity
              </button>
            </div>
            <div className="tw-border-l-[1.5px] tw-mx-4 tw-border-[#0bfff0]" />

            <div className="tw-flex tw-flex-col tw-items-center tw-w-[40%] tw-gap-4">
              <div
                className="tw-bg-no-repeat tw-h-[83px] tw-w-full tw-rounded-[30px] tw-p-1 tw-bg-cover tw-bg-center tw-flex tw-flex-col tw-items-center tw-overflow-hidden tw-gap-1"
                style={{
                  backgroundImage: `url(${bgc})`,
                }}
              >
                <div className="tw-font-semibold tw-text-[#fff060]">
                  Join our community
                </div>
                <div className="tw-flex tw-gap-[3rem]">
                  <img
                    className="tw-h-[40px] tw-w-[40px]"
                    src={opensea}
                    alt="opensea"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px]"
                    src={discord}
                    alt="discord"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px]"
                    src={twitter}
                    alt="twitter"
                  />
                </div>
              </div>
              <button className="tw-p-[3px] tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[50px] tw-w-[50%] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0">
                contact us
              </button>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-w-full tw-justify-between tw-items-end">
          <div className="tw-flex tw-flex-col tw-text-start tw-items-start tw-w-[60%]">
            <img
              className="tw-h-[80px] tw-w-[500px]"
              src={playnow}
              alt="playnow"
              onMouseOver={(e) => (e.currentTarget.src = playnowhover)}
              onMouseOut={(e) => (e.currentTarget.src = playnow)}
            />
            <div className="tw-text-[#fff060] tw-uppercase tw-text-base tw-font-extrabold">
              2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-gap-2 tw-items-end tw-w-[40%]">
            <div
              className="tw-bg-no-repeat tw-bg-center tw-bg-contain tw-h-[70px] tw-w-[280px]"
              style={{
                backgroundImage: `url(${iccprice})`,
              }}
            />
            <div className="tw-flex tw-flex-col">
              <div
                className="tw-bg-no-repeat tw-bg-center tw-bg-contain tw-h-[50px] tw-w-[200px]"
                id="mint-button-desktop"
              ></div>
              <div
                className="tw-bg-no-repeat tw-bg-center tw-bg-contain tw-h-[50px] tw-w-[200px]"
                id="buy-button-desktop"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
