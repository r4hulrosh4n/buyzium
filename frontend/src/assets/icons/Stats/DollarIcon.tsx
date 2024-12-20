import React from "react";

type Props = {
  className?: string; // Optional className prop
};

const DollarIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      className={className} // Apply className prop
    >
      <path
        stroke="currentColor" // Use currentColor for dynamic stroke color
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 37.273c9.54 0 17.273-7.734 17.273-17.273 0-9.54-7.733-17.273-17.273-17.273S2.728 10.461 2.728 20c0 9.54 7.733 17.273 17.272 17.273Z"
      />
      <path
        stroke="currentColor" // Use currentColor for dynamic stroke color
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.75}
        d="M25.091 14.547a3.637 3.637 0 0 0-3.272-1.818h-3.637a3.637 3.637 0 0 0-2.571 6.206A3.637 3.637 0 0 0 18.182 20h3.637a3.637 3.637 0 0 1 2.57 6.206 3.637 3.637 0 0 1-2.57 1.065h-3.637a3.638 3.638 0 0 1-3.272-1.818M20 8.182v3.94m0 15.757v3.94"
      />
    </svg>
  );
};

export default DollarIcon;

