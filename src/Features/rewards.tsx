import React from 'react'


const Rewards:React.FC= () => {
  return (
    <>
        <div className="m-10 text-center mx-auto space-y-8 items-center justify-center">


          <h2 className="pt-10 w-4/6 mx-auto text-3xl xl:text-7xl font-poppins text-black font-bold">
          a simple, easy to use rewards program.
          </h2>

          <p className="w-4/5 mx-auto text-gray-500 font-medium font-Poppins text-lg md:text-xl lg:text-2xl ">
          sadiq offers all the tools and features you need to run a simple but effective rewards program at your shop. You get every tool we make (now and in the future) for one low cost.

          </p>
          {/* Button section */}
          <div className="px-3 py-5 w-4/5 text-xl lg:w-1/5 bg-primary text-white mx-auto font-medium cursor-pointer">
         Start the tour
        </div>
        </div>
    </>
  )
}

export default Rewards