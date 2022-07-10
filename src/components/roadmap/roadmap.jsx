import React from "react"
import "./roadmap.scss"
import roadmap from "../../assets/roadmap.png"
import mrmp from "../../assets/mrmp.png"
export default function RoadMap() {
  const windowWidth = window.innerWidth
  return (
    <div className='main'>
      {windowWidth < 550 ? (
        <>
          <div className='title'>ROAD MAP</div>
          <img src={mrmp} alt='roadMap' />
        </>
      ) : (
        <img src={roadmap} alt='roadMap' />
      )}
    </div>
  )
}
