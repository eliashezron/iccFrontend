import React from 'react';
import './gameplay.scss';
import blueman from "../../assets/bueman.png"
import runningman from "../../assets/runningman.png"
import pinkrrectangle from "../../assets/pinkrectangle.svg"
import bluerectangle from "../../assets/bluerectangle.svg"
import watch from '../../assets/watch.svg'
import watchhover from '../../assets/watchhover.svg'
import next from '../../assets/next2.svg'
import nexthover from '../../assets/nexthover.svg'
import previous from '../../assets/previous.svg'
import previoushover from '../../assets/previoushover.svg'
export default function GamePlay(){
    return (
        <div>
            <div className='title'>GAME PLAY</div>
            <div className='wording'>
                <p>Intergalactic Cockroach Space Race’s gameplay is designed to challenge your personal skills.
                    Challenge yourself with our modes: Play To Earn & Free Play to win rewards.</p>
            </div>
            <div className='sectionA'>
                <div className='running-man'>
                    <img src={runningman} alt='running-man'/>
                </div>
                <div className='blueman'>
                    <img src={blueman} alt='blueman'/>
                    <div className='watchButton'>
                    <img src={watch} alt="playnow"
                    onMouseOver={e => (e.currentTarget.src = watchhover)}
                    onMouseOut={e => (e.currentTarget.src = watch)}/>
                </div>
                </div>
            </div>
            <div className='sectionB'>
                <div className='watchButton'>
                    <img src={previous} alt="playnow"
                    onMouseOver={e => (e.currentTarget.src = previoushover)}
                    onMouseOut={e => (e.currentTarget.src = previous)}/>
                </div>
                <div className='watchButton'>
                    <img src={pinkrrectangle} alt="playnow"/>
                    <img src={bluerectangle} alt="playnow"/>
                </div>
                <div className='watchButton'>
                    <img src={watch} alt="playnow"
                    onMouseOver={e => (e.currentTarget.src = nexthover)}
                    onMouseOut={e => (e.currentTarget.src = next)}/>
                </div>
            </div>
        </div>
    )
}