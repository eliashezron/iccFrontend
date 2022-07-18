import * as React from 'react';
import playNow from '../../../assets/playnowidle.png';
import playNowidlehover from '../../../assets/playnowidlehover.png';

export default function HeroPlayButton() {
  const [hovered, setHovered] = React.useState();

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className={`tw-relative tw-cursor-pointer tw-h-[96px] tw-w-[660px] tw-mt-4`}
    >
      <img
        src={playNowidlehover}
        alt=""
        style={{
          transitionDelay: '100ms',
        }}
        className={`tw-w-full tw-h-full tw-absolute tw-ease-in tw-transition-opacity ${
          hovered ? 'tw-opacity-100' : 'tw-opacity-0'
        }`}
      />
      <img
        src={playNow}
        alt=""
        style={{
          transitionDelay: '100ms',
        }}
        className={`tw-w-full tw-h-full tw-absolute tw-ease-in tw-transition-opacity ${
          hovered ? 'tw-opacity-0' : 'tw-opacity-100'
        }`}
      />
    </div>
  );
}
