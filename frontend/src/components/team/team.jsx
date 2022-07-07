import React from "react"
import "./team.scss"
import coreTeam from "../../assets/coreTeam.png"
export default function Team() {
  return (
    <div className='main'>
      <div className='imgdiv'>
        <img src={coreTeam} alt='coreteam' />
      </div>
    </div>
  )
}
