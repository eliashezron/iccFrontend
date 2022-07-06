import React from 'react';
import './hero.scss';
import sidebar from '../../assets/sidebar.svg'
import sidebarhover from "../../assets/sidebarhover.svg"
import gifimage from "../../assets/gifimage.png"
import logo from "../../assets/logo.png"
import playnow from "../../assets/playnow.svg"
import playnowhover from "../../assets/playnowhover.svg"

export default function Hero(){
    return (
        <div className='heroContainer'>
            <div className='theorySection'>
                <div className='logoImage'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='textfield'>
                <p>Intergalactic Cockroach Space Race is an esport game based on blockchain technology. 
                    You can gather your friends, form a team, battle with others and earn crypto with just your skills
                    #IntergalacticCockroach #ICC #SpaceRace # P2E #NFT
                </p>
                <p>$ICC Contract Address</p>
                <input placeholder='BEP20
                0x8d672014fb107cb409dccd9042dda3b97313f4c3'></input>
                </div>
                <div className='playButton'>
                    <img src={playnow} alt="playnow"
                    onMouseOver={e => (e.currentTarget.src = playnowhover)}
                    onMouseOut={e => (e.currentTarget.src = playnow)}/>
                </div>
            </div>
            <div className='gifSection'>
                <img src={gifimage} alt="gifimage"/>
            </div>
            <div className='socialIcons'>
            <img src={sidebar} alt="playnow"
                onMouseOver={e => (e.currentTarget.src = sidebarhover)}
                onMouseOut={e => (e.currentTarget.src = sidebar)}/>
            </div>
        </div>
    )
}