import React from 'react';
import './team.scss';
import { teamItems } from '../../data/teamItems';
export default function Team() {
  return (
    <section id="core-team">
      <div className="container tw-gap-5">
        <h1 className="tw-text-[2rem] tw-mt-[110px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] tw-leading-[80px]">
          CORE TEAM
        </h1>
        <p className="tw-text-[0.8rem] xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] tw-leading-[20px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          The team always plays an important role in the success of a project.
          <br></br>
          As a team, we have been working with each other for long time, with
          everyone being highly experienced in their own <br></br> expertise.
        </p>
        <div className="team">
          {teamItems.map((item) => {
            return (
              <div
                key={item.id}
                className="3xl:-tw-mx-[15px] 2xl:-tw-mx-[30px] xl:-tw-mx-[30px]"
              >
                <img
                  className="3xl:tw-w-[315px] 2xl:tw-w-[300px] xl:tw-w-[250px] 3xl:tw-h-[250px] 2xl:tw-h-[265px] xl:tw-h-[215px]"
                  src={item.image}
                  alt="#"
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />

                <div className="info">
                  <h1 className="3xl:tw-text-[25px] 2xl:tw-text-[20px] 3xl:tw-pt-[17px] 2xl:tw-pt-[13px] 3xl:tw-leading-[31px] 2xl:tw-leading-[26px]">
                    {item.name}
                  </h1>
                  <p className="3xl:tw-text-[20px] 2x;:tw-text-[18px] 3xl:tw-leading-[25px] 2xl:tw-leading-[20px] tw-w-[90%]">
                    {item.role}
                  </p>
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
