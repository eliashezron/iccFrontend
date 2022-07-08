import React from "react"
import "./roadmap.scss"
import coin from "../../assets/coinImage.png"
export default function RoadMap() {
  return (
    <div className='main'>
      <div className='imgdiv'>
        <img src={coin} alt='roadMap' />
      </div>
    </div>
  )
}
