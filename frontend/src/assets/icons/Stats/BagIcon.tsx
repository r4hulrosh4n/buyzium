import React from "react";

type Props = {
  className?: string; // Optional className prop
};

const BagIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      className={className} // Apply className prop
    >
      <path
        fill="currentColor" // Use currentColor for dynamic color
        d="M11.667 11.667V8.333A5 5 0 0 1 20 4.607a5 5 0 0 1 8.334 3.726v3.334h2.5a2.5 2.5 0 0 1 2.5 2.5v16.675a5.825 5.825 0 0 1-5.825 5.825H13.334A6.667 6.667 0 0 1 6.667 30V14.167a2.5 2.5 0 0 1 2.5-2.5h2.5Zm11.058 22.5a5.798 5.798 0 0 1-1.041-3.325V14.167H9.167V30a4.167 4.167 0 0 0 4.167 4.167h9.391Zm-3.558-22.5V8.333a2.5 2.5 0 0 0-5 0v3.334h5Zm2.5 0h4.167V8.333a2.5 2.5 0 0 0-4.427-1.593c.168.5.26 1.037.26 1.593v3.334Zm2.517 19.175a3.325 3.325 0 1 0 6.65 0V14.167h-6.65v16.675Z"
      />
    </svg>
  );
};

export default BagIcon;

