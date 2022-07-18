import * as React from 'react';
import playnow from '../../../assets/playnow.svg';
import playnowhover from '../../../assets/playnowhover.svg';

export default function NavBarPlayButton() {
  const [hovered, setHovered] = React.useState();

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className={`tw-relative tw-cursor-pointer 3xl:tw-w-[338px] 3xl:tw-h-[69px] tw-w-[300px] tw-h-[50px]`}
    >
      <img
        src={playnowhover}
        alt=""
        style={{
          transitionDelay: '100ms',
        }}
        className={`tw-w-full tw-h-full tw-absolute tw-ease-in tw-transition-opacity ${
          hovered ? 'tw-opacity-100' : 'tw-opacity-0'
        }`}
      />
      <img
        src={playnow}
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
