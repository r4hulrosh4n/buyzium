import React from "react";

type Props = { className?: string };

const DropDown = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // camelCase for React
      strokeLinecap="round" // camelCase for React
      strokeLinejoin="round" // camelCase for React
      className={className}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export default DropDown;

