import React from "react"
import "./roadmap.scss"
import roadmap from "../../assets/roadmap.png"
export default function RoadMap() {
  return (
    <div className='main'>
      <div className='imgdiv'>
        <img src={roadmap} alt='coreteam' />
      </div>
    </div>
  )
}
