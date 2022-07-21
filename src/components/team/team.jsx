import React from 'react';
import './team.scss';
import { teamItems } from '../../data/teamItems';
export default function Team() {
  return (
    <section id="core-team">
      <div className="container">
        <h1 className="tw-text-[30px] tw-mt-[52px] xl:tw-mt-[110px] tw-mb-[7px] xl:tw-text-[2.3rem] 2xl:tw-text-[58px] 3xl:tw-text-[64px] tw-leading-[38px] xl:tw-leading-[80px]">
          CORE TEAM
        </h1>
        <p className="tw-text-[18px] tw-mb-[28px] md:tw-mb-0 xl:tw-text-[0.85rem] 2xl:tw-text-[17px] 3xl:tw-text-[18px] tw-leading-[19px] 2xl:tw-leading-8 tw-tracking-wider tw-text-center">
          The team always plays an important role in the success of a project.
          <br></br>
          As a team, we have been working with each other for long time, with
          everyone being highly experienced in their own <br></br> expertise.
        </p>
        <div className="team md:flex tw-grid tw-grid-cols-2">
          {teamItems.map((item) => {
            return (
              <div
                key={item.id}
                className="3xl:-tw-mx-[15px] 2xl:-tw-mx-[30px] xl:-tw-mx-[30px]"
              >
                <img
                  className="3xl:tw-w-[315px] 2xl:tw-w-[300px] xl:tw-w-[250px] tw-w-[165px] 3xl:tw-h-[250px] 2xl:tw-h-[265px] xl:tw-h-[215px] tw-h-[135px]"
                  src={item.image}
                  alt="#"
                  onMouseOver={(e) => (e.currentTarget.src = item.hoverImage)}
                  onMouseOut={(e) => (e.currentTarget.src = item.image)}
                />

                <div className="info">
                  <h1 className="tw-text-center tw-mb-[3px] 3xl:tw-text-[25px] 2xl:tw-text-[20px] tw-text-[15px] tw-leading-[19px] 3xl:tw-pt-[17px] 2xl:tw-pt-[13px] 3xl:tw-leading-[31px] 2xl:tw-leading-[26px]">
                    {item.name}
                  </h1>
                  <p className="tw-text-center 3xl:tw-text-[20px] 2x:tw-text-[18px] tw-text-[14px] 3xl:tw-leading-[25px] 2xl:tw-leading-[20px] tw-leading-[15px] tw-w-[90%]">
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
