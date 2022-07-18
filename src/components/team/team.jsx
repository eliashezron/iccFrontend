import React from 'react';
import './team.scss';
import { teamItems } from '../../data/teamItems';
export default function Team() {
  return (
    <section id="core-team">
      <div className="container tw-gap-5">
        <h1 className="tw-text-[2rem] xl:tw-text-[2.3rem] 2xl:tw-text-[2.8rem] 3xl:tw-text-[64px] tw-leading-[80px]">
          CORE TEAM
        </h1>
        <p className="tw-text-[0.8rem] xl:tw-text-[0.85rem] 2xl:tw-text-[0.9rem] 3xl:tw-text-[20px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider">
          The team always plays an important role in the success of a project.
          <br></br>
          As a team, we have been working with each other for long time, with
          everyone being highly experienced in their own <br></br> expertise.
        </p>
        <div className="team">
          {teamItems.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="next"
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />
                <div className="info">
                  <h1>{item.name}</h1>
                  <p>{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// testing deploy to github
