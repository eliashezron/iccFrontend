import React from "react"
import "./team.scss"
import anhu from "../../assets/anhu.png"
import elias from "../../assets/ELIAS.png"
import shahar from "../../assets/KEDICAL.png"
import maksym from "../../assets/MAKSYM.png"
import liran from "../../assets/NIGHTWALKER.png"
import sufyan from "../../assets/SUFYAN.png"
export default function Team() {
  return (
    <div className='main'>
      <div className='title'>NFT GENESIS SERIES</div>
      <div className='wording'>
        <p>
          The team always plays an important role in the success of a project.
          <br></br>
          As a team, we have been working with each other for long time, with
          everyone being highly experienced in their own <br></br> expertise.
        </p>
      </div>
      <div className='imgdiv'>
        <img src={liran} alt='coreteam' />
        <img src={shahar} alt='coreteam' />
        <img src={maksym} alt='coreteam' />
        <img src={anhu} alt='coreteam' />
        <img src={elias} alt='coreteam' />
        <img src={sufyan} alt='coreteam' />
      </div>
    </div>
  )
}
