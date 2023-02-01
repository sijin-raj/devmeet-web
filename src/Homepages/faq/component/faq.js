import React, { useState } from "react"

export default function FAQ({ id, title, desc }) {
  const [toggle, setToggle] = useState(false)

  const onHandlestate = () => {
    setToggle(!toggle)
  }

  return (
    <article className="px-2 text-left pt-4 p-2 bg-gray-900 border rounded-md">
      <div
        onClick={() => onHandlestate()}
        className="flex flex-row cursor-pointer hover:text-blue-800 justify-between"
      >
        <h2
          className="px-4 text-center text-base lg:text-lg text-gray-200 font-Poppins font-normal"
          onClick={() => onHandlestate()}
        >
          {title}
        </h2>

        <button
          className=" text-lg lg:text-3xl p-2 bg-primary rounded-full text-gray-50 font-semibold"
          onClick={() => onHandlestate()}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>

      {toggle && (
        <p className="text-sm lg:text-base font-Poppins text-gray-200">
          {desc}
        </p>
      )}
    </article>
  )
}
