import React from "react"

const PrimaryButton = ({ to, classNames = "", text, width = "w-auto" }) => {
  return (
    <>
      <a
        href={to}
        className={`px-6 py-2.5 flex items-center justify-center text-sm   font-Poppins  md:text-lg ${width} text-black bg-primary hover:bg-primary`}
      >
        {text}
      </a>
    </>
  )
}

export default PrimaryButton
