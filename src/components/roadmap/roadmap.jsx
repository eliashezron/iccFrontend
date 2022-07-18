import React from 'react';
import './roadmap.scss';
import roadmap from '../../assets/roadmap.png';
import mrmp from '../../assets/mrmp.png';
export default function RoadMap() {
  return (
    <section id="road-map">
      <div className="container">
        <h1 className="tw-text-[2rem] md:tw-hidden">ROAD MAP</h1>
        <div
          id="road-map-img-desktop"
          style={{
            backgroundImage: `url(${roadmap})`,
          }}
        />
        <div
          id="road-map-img-mobile"
          style={{
            backgroundImage: `url(${mrmp})`,
          }}
        />
      </div>
    </section>
  );
}
