import React from 'react'

type Props = {className?: string}

const InstagramSvg = ({className}: Props) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
      className={className}
    width={24}
    height={24}
    fill="none"
  >
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path fill="#000" d="M17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
  )
}

export default InstagramSvg
