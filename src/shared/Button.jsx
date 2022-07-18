import * as React from 'react';
export default function Button(props) {
  const { children, className } = props;
  return (
    <button
      className={`tw-border-[#0bfff0] tw-border-b-[3px] tw-h-[60px] tw-font-[Orbitron] tw-text-[0.65rem] tw-uppercase tw-text-[#0bfff0] tw-bg-transparent tw-rounded-3xl tw-border-t-0 3xl:tw-font-semibold 3xl:tw-text-[1.2rem] ${className}`}
    >
      {children}
    </button>
  );
}
