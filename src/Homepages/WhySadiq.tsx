import React from "react"
import Button from "../components/common/Button"

const WhySadiq: React.FC = () => {
  return (
    <>
      <div className="p-16 text-center mx-auto space-y-6 bg-theme_white ">
        <h1 className="pt-4 w-4/5 mx-auto text-4xl  font-poppins text-white font-bold">
        WHAT WE OFFER{" "}
        </h1>
        <div className="text-left items-center justify-center">
          <h2 className="pt-5 w-4/5 mx-auto text-lg xl:text-3xl font-poppins text-white font-bold xl:leading-24">
            {" 👉"} Transport Services: We provide a driver and the car of your choice to transport you to your destination.
          </h2>

          <h2 className="pt-10 w-4/5 mx-auto text-lg xl:text-3xl font-poppins text-white font-bold xl:leading-24">
            {" 👉"} Short Term Rentals: Rent a car of your choice for a day.

          </h2>

          <h2 className="pt-10 w-4/5 mx-auto text-lg xl:text-3xl font-poppins text-white font-bold xl:leading-24">
            {" 👉"} Long Term Rentals: Rent a car of your choice for a week or longer periods.

          </h2>
        </div>
        <div className="space-y-5">
          <p className="w-full  mx-auto text-white text-sm font-normal md:text-base lg:text-lg ">
            <span className="font-bold">
            All our drivers undergo background checks and are highly trained to work with the principle of safety first. Our mission is to make our customers and their families safer on the road through high-quality service. We provide our customers with a true sense of trust and peace of mind.
            </span>{" "}
          </p>
          <h2 className="pt- w-4/5 mx-auto text-lg xl:text-4xl font-poppins text-white font-bold xl:leading-24">
            See if Manycon Limousine is for you.
          </h2>
        </div>
        {/* <div className="relative px-7 py-8 w-full sm:w-1/4 mx-auto font-semibold">
        <Button text="Watch how it works" to="" />

        </div> */}
      </div>
    </>
  )
}

export default WhySadiq
