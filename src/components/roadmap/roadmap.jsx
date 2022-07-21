import React from 'react';
import './roadmap.scss';
import roadmap from '../../assets/roadmap.png';
import mrmp from '../../assets/mrmp.png';
export default function RoadMap() {
  return (
    <section id="road-map">
      <div className="container">
        <h1 className="tw-text-[30px] tw-leading-[38px] md:tw-hidden tw-mt-[120px]">
          ROAD MAP
        </h1>
        <div
          id="road-map-img-desktop"
          style={{
            backgroundImage: `url(${roadmap})`,
          }}
        />
        <div
          id="road-map-img-mobile"
          className="tw-w-[377px] tw-h-[630px] tw-mr-[50px]"
          style={{
            backgroundImage: `url(${mrmp})`,
          }}
        />
      </div>
    </section>
  );
}
