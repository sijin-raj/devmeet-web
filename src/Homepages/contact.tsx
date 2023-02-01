import React from 'react'



const Contact:React.FC= () => {
  return (
    <>
        <div id='contact' className="w-full p-4 flex mb-6 flex-row items-center text-center mx-auto space-y-3 bg-primary">
          <h2 className=" w-full xl:w-1/2 mx-auto text-lg xl:text-3xl font-poppins text-white font-medium">
          GET IN TOUCH WITH US
          </h2>

          <p className="w-full xl:w-1/2  mx-auto text-white text-base md:text-lg lg:text-2xl font-bold ">
           +974 4143 6493
          </p>
        </div>
    </>
  )
}

export default Contact