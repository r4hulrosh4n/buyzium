import React from "react";

type Props = { className?: string };

const TwitterSvg = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={24}
      height={24}
      fill="none"
    >
      <path
        fill="#000"
        d="M17.176 4h2.76l-6.03 7.201L21 21h-5.555l-4.35-5.942L6.117 21H3.355l6.45-7.702L3 4h5.695l3.932 5.432L17.177 4Zm-.969 15.274h1.53L7.864 5.636h-1.64l9.983 13.638Z"
      />
    </svg>
  );
};

export default TwitterSvg;
