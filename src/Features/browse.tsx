import React from 'react'


const Browse:React.FC= () => {
    const itemsList = [
        {
          title: "Referral program",
          paragraph:
            "Gain new customers the best way possible: word of mouth.",
        },
        {
          title: "Loyalty program",
          paragraph:
            "Reward existing customers & keep them coming back.",
        },
        {
            title: "Flash deals",
            paragraph:
              "Reward existing customers & keep them coming back.",
          },
        {
          title: "Birthday Rewards",
          paragraph:
            "Send your customers a gift on their big day, automatically.",
        },
        {
          title: "Personalize your program",
          paragraph:
            "Bring in more customers with limited time offers.",
        },
        {
          title: "Text customers",
          paragraph:
            "Text customers important updates, in seconds.",
        },
        {
            title: "Hands-free redemption",
            paragraph:
              "Text customers important updates, in seconds.",
          },
        {
          title: "Manual redemption",
          paragraph:
            "Browse all features.",
        },
      ];
    
  return (
    <>
        <div className="m-10 text-center mx-auto space-y-8 items-center justify-center">


          <h2 className="pt-10 w-4/6 mx-auto text-3xl xl:text-6xl font-poppins text-black font-bold">    
          Or browse features
          </h2>
          <div className="pt-20 w-4/5 grid sm:grid-cols-1  lg:grid-cols-2  md:gap-x-10 sm:gap-y-16  gap-10 md:gap-y-7  items-center justify-center mx-auto space-x-1 space-y-4">
          {itemsList.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col space-y-7 items-center"
                key={index}
              >
                <div className="w-14 mx-auto flex xl:items-center xl:justify-center">
                  {/* <GatsbyImage image={item.Icon} alt="icon" /> */}
                </div>
                <div className="w-full text-left  items-center justify-center space-y-6 ">
                  <h1 className="text-lg xl:text-4xl font-semibold text-black ">{item.title}</h1>
                  <p className="w-4/5 text-xl font-normal font-Poppins text-gray-700">{item.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        </div>
    </>
  )
}

export default Browse