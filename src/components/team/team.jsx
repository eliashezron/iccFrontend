import React from "react"
import "./team.scss"
import anhu from "../../assets/png4.png"
import elias from "../../assets/png5.png"
import shahar from "../../assets/png2.png"
import maksym from "../../assets/png3.png"
import liran from "../../assets/png1.png"
import sufyan from "../../assets/png6.png"
export default function Team() {
  return (
    <div className='main'>
      <div className='absolutediv'>
        <div className='title'>CORE TEAM</div>
        <div className='wording'>
          <p>
            The team always plays an important role in the success of a project.
            <br></br>
            As a team, we have been working with each other for long time, with
            everyone being highly experienced in their own <br></br> expertise.
          </p>
        </div>
      </div>
      <div className='imgdiv'>
        <div className='img one'>
          <img src={liran} alt='coreteam' />
          <div className='titl'>
            <h1>NIGHTWALKER</h1>
            <p>Founder</p>
          </div>
        </div>
        <div className='img  two'>
          <img src={shahar} alt='coreteam' />
          <div className='titl'>
            <h1>KEDICAL</h1>
            <p>
              Project Manager <br></br>& Marketing
            </p>
          </div>
        </div>
        <div className='img three'>
          <img src={maksym} alt='coreteam' />
          <div className='titl'>
            <h1>DELTAWOLF</h1>
            <p>Game Developer</p>
          </div>
        </div>
        <div className='img four'>
          <img src={anhu} alt='coreteam' />
          <div className='titl'>
            <h1>ANH TU TRAN</h1>
            <p>Art Director</p>
          </div>
        </div>
        <div className='img five'>
          <img src={elias} alt='coreteam' />
          <div className='titl'>
            <h1>ELIAS</h1>
            <p>
              blockchain<br></br>Developer
            </p>
          </div>
        </div>
        <div className='img six'>
          <img src={sufyan} alt='coreteam' />
          <div className='titl'>
            <h1>SUFYAN</h1>
            <p>ui/ux</p>
          </div>
        </div>
      </div>
    </div>
  )
}
// testing deploy to github
