import React from "react"
import "./team.scss"
import { teamItems } from "../../data/teamItems"
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
        {teamItems.map((item) => {
          return (
            <div key={item.id} className='img'>
              <img
                src={item.image}
                alt='next'
                onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                onMouseOut={(e) => (e.currentTarget.src = item.image)}
              />
              <div className='titl'>
                <h1>{item.name}</h1>
                <p>{item.role}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
// testing deploy to github
