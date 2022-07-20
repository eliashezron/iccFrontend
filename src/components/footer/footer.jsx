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
import mintNowFooterMobile from '../../assets/buy-icc-now-footer-mobile.png';
import buyIccFooterMobile from '../../assets/mint-now-footer-mobile.png';
import playNowFooterMobile from '../../assets/play-now-footer-mobile.png';

export default function Footer() {
  return (
    <section id="footer" className="tw-h-auto">
      <div className="container 3xl:tw-ml-[110px] 2xl:tw-ml-[90px] xl:tw-ml-[70px] 3xl:tw-w-[1752px] 2xl:tw-w-[1552px] xl:tw-w-[1352px] 3xl:tw-h-[421px] 2xl:tw-h-[400px] xl:tw-h-[380px] 3xl:tw-mt-[74px] 2xl:tw-mt-[64px] xl:tw-mt-[58px] 3xl:tw-mb-[67px] 2xl:tw-mb-[57px] xl:tw-mb-[48px]">
        <div className="tw-flex tw-flex-col tw-items-center">
          <img
            src={logo}
            alt="logo"
            className="tw-w-[330px] tw-h-[132.56px] tw-mb-[17px] tw-mt-[50px]"
          />
          <div className="tw-font-black tw-text-[14px] tw-leading-[15px] tw-text-[#FFF060] tw-text-center tw-mb-[11px]">
            2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.
          </div>
          <div className="tw-flex tw-flex-col tw-w-full tw-items-center">
            <img
              className="tw-w-[330px] tw-h-[41px] tw-mb-[7px]"
              src={playNowFooterMobile}
              alt="playnow"
            />
            <img
              className="tw-w-[330px] tw-h-[41px] tw-mb-[7px]"
              src={buyIccFooterMobile}
              alt="buyicca"
            />
            <img
              className="tw-w-[330px] tw-h-[41px]"
              src={mintNowFooterMobile}
              alt="playnow"
            />
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-[8px] tw-mt-[17px] tw-w-[330px] tw-h-[271px] tw-mb-[4px]">
              <div className="tw-flex tw-gap-[23px]">
                <Button className="tw-w-[153px] tw-h-[38.56px]">Home</Button>
                <Button className="tw-w-[153px] tw-h-[38.56px]">NFT</Button>
              </div>
              <Button className="tw-w-[228px] tw-h-[39px]">WhitePaper</Button>
              <div className="tw-flex tw-gap-[23px]">
                <Button className="tw-w-[153px] tw-h-[38.56px]">Trade</Button>
                <Button className="tw-w-[153px] tw-h-[38.56px]">Earn</Button>
              </div>
              <div className="tw-flex tw-gap-[23px]">
                <Button className="tw-w-[153px] tw-h-[38.56px]">
                  Exchange
                </Button>
                <Button className="tw-w-[153px] tw-h-[38.56px]">Farms</Button>
              </div>
              <div className="tw-flex tw-gap-[23px]">
                <Button className="tw-w-[153px] tw-h-[38.56px]">
                  Liquidity
                </Button>
                <Button className="tw-w-[153px] tw-h-[38.56px]">Pools</Button>
              </div>
              <Button className="tw-w-[228px] tw-h-[39px]">Contact</Button>
            </div>
            <img
              className="tw-w-[266px] tw-h-[54px] tw-mb-[17px]"
              src={iccprice}
              alt="icc price"
            />
            <div
              className="tw-w-[92%] tw-h-[67px] tw-rounded-[20px] tw-bg-no-repeat tw-gap-[10px] tw-justify-center tw-bg-center tw-bg-cover tw-flex tw-items-center"
              style={{
                backgroundImage: `url(${bgc})`,
              }}
            >
              <div className="tw-text-[#FFE856] tw-text-center tw-w-[120px] tw-text-[18px] tw-leading-[19px] tw-font-black">
                Join our community
              </div>
              <div className="tw-flex tw-w-[180px] tw-h-[46.94px] tw-justify-between tw-items-center tw-gap-[4px]">
                <a href="#home">
                  <img
                    className="tw-w-[43px] tw-h-[40px]"
                    src={opensea}
                    alt="opensea"
                  />
                </a>
                <a href="#home">
                  <img
                    className="tw-w-[42px] tw-h-[40px]"
                    src={discord}
                    alt="discord"
                  />
                </a>
                <a href="#home">
                  <img
                    className="tw-w-[50px] tw-h-[35px]"
                    src={twitter}
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================== */}
        <div className="md:tw-flex tw-w-full tw-flex-row 3xl:tw-gap-[84px] 2xl:tw-gap-[64px] tw-gap-[50px] 3xl:tw-mb-[74px] 2xl:tw-mb-[64px] xl:tw-mb-[54px] tw-hidden">
          <img
            className="3xl:tw-w-[468px] 3xl:tw-h-[188px] 2xl:tw-w-[400px] 2xl:tw-h-[150px] xl:tw-w-[380px] xl:tw-h-[130px]"
            src={logo}
            alt=""
          />
          <div className="tw-flex 2xl:tw-w-[70%] tw-w-[60%]  tw-flex-row">
            <div className="tw-grid tw-grid-cols-3 tw-gap-2 3xl:tw-gap-4 tw-w-[65%]">
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Home
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Earn
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Trade
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                WhitePaper
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Farms
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Exchange
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Nfts
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Pools
              </Button>
              <Button className="3xl:tw-w-[182px] 2xl:tw-w-[170px] xl:tw-w-[150px]">
                Liquidity
              </Button>
            </div>
            <div className="tw-border-l-[2px] 3xl:tw-mx-[56px] tw-border-[#0bfff0]" />

            <div className="tw-flex tw-flex-col tw-items-center 2xl:tw-w-[40%] tw-w-[35%] tw-gap-4">
              <div
                className="tw-bg-no-repeat 3xl:tw-h-[134px] 2xl:tw-h-[120px] tw-h-[100px] 3xl:tw-w-[400px] 2xl:tw-w-[280px] xl:tw-w-[250px] tw-rounded-[20px] 3xl:tw-p-[12px] 2xl:tw-p-[9px] tw-justify-center tw-bg-cover tw-bg-center tw-flex tw-flex-col tw-items-center tw-overflow-hidden"
                style={{
                  backgroundImage: `url(${bgc})`,
                }}
              >
                <div className="tw-font-black 3xl:tw-text-[24px] 2xl:tw-text-[20px] tw-leading-[30px] tw-text-[#fff060] tw-mb-[6.1px]">
                  Join our community
                </div>
                <div className="tw-flex tw-gap-[3rem]">
                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[72px] 3xl:tw-h-[69px]"
                    src={opensea}
                    alt="opensea"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[79.54px] 3xl:tw-h-[66px]"
                    src={discord}
                    alt="discord"
                  />

                  <img
                    className="tw-h-[40px] tw-w-[40px] 3xl:tw-w-[79.5px] 3xl:tw-h-[60.6px]"
                    src={twitter}
                    alt="twitter"
                  />
                </div>
              </div>
              <Button className="3xl:tw-w-[272px] 2xl:tw-w-[200px] xl:tw-w-[180px]">
                contact us
              </Button>
            </div>
          </div>
        </div>
        <div className="md:tw-flex tw-w-full 2xl:tw-justify-between tw-gap-8 tw-items-end tw-hidden">
          <div className="tw-flex tw-flex-col tw-text-start tw-items-start 2xl:tw-w-[60%] tw-w-[50%] ">
            <div
              id="footer-play-button"
              className="tw-h-[80px] 3xl:tw-w-[730px] 2xl:tw-w-[600px] xl:tw-w-[500px] 3xl:tw-mb-[18px]"
            />
            <div className="tw-text-[#fff060] tw-uppercase 3xl:tw-text-[1.4rem] 2xl:tw-text-[20px] xl:tw-text-[16px] tw-font-extrabold">
              2022@ INTERGALACTIC COCKROACH GAME. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-gap-2 tw-items-end 2xl:tw-w-[40%]">
            <img
              className="tw-h-[80px] tw-w-[285px] 3xl:tw-w-[362px] 3xl:tw-h-[93px] 2xl:tw-w-[342px] 2xl:tw-h-[83px]"
              src={iccprice}
              alt=""
            />
            <div className="tw-flex tw-flex-col">
              <div
                id="footer-mint-now-button"
                className="tw-h-[50px] tw-w-[200px] 3xl:tw-w-[266.7px] 3xl:tw-h-[55px] 3xl:tw-mb-[13px]"
              />

              <div
                id="footer-buy-icc-button"
                className="tw-h-[50px] tw-w-[200px] 3xl:tw-w-[266.7px] 3xl:tw-h-[55px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
