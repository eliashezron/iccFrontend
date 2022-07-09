import React from "react"
import "./roadmap.scss"
import roadmap from "../../assets/roadmap.png"
export default function RoadMap() {
  return (
    <div className='main'>
      <img src={roadmap} alt='roadMap' />
    </div>
  )
}
