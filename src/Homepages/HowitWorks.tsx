import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import PrimaryButton from "../components/common/PrimaryButton"
// import HeadingSection from './HeadingSection'

const HowitWorks: React.FC = () => {
  const HowitWorksQueryData = useStaticQuery(graphql`
    query HowitWorksQuery {
      Man: file(name: { eq: "rent" }, absolutePath: { regex: "/images/how/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Lady: file(name: { eq: "detials" }, absolutePath: { regex: "/images/how/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Work: file(name: { eq: "cust" }, absolutePath: { regex: "/images/how/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Refer: file(name: { eq: "refer" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const ManImg = getImage(HowitWorksQueryData.Man)
  const LadyImg = getImage(HowitWorksQueryData.Lady)
  const WorkImg = getImage(HowitWorksQueryData.Work)
  const ReferImg = getImage(HowitWorksQueryData.Refer)




  const dataArray = [
    {
      head : "CARD & BUDGET CONTROL",
      title: "Streamline reimbursements",
      description:"Manage non-card expenses by instantly approving reimbursement requests and paying employees directly from your DevMeet balance.",
      video: "https://cloudflarestream.com/a3d4df2c46831cfa85c598c06eb1539b/downloads/default.mp4",
    },

    {
      title: "Corporate Events ",
      description:
        "We understand the importance of making a good impression on clients and colleagues. Our luxury vehicles are perfect for corporate events, such as business meetings, conferences, and roadshows.",
        video: "https://cloudflarestream.com/a3d4df2c46831cfa85c598c06eb1539b/downloads/default.mp4",

    }, 

    {
      title: "City Tours",
      description:
        "Experience the beauty and culture of Qatar in one of our luxury vehicles. Our city tour packages include popular tourist destinations and hidden gems, giving you the opportunity to explore the country in comfort and style.",
        video: "https://cloudflarestream.com/a3d4df2c46831cfa85c598c06eb1539b/downloads/default.mp4",

    },
  ]

  return (
    <>
      {/* Desktop View */}
      <section id="services" className="hidden xl:block w-full py-10 bg-theme_white">

        <div className="py-20">
          {dataArray.map((item, index) => {
            return (
              <div key={index} className="mb-10">
                <div
                  className={`w-4/5 mx-auto flex py-10 ${
                    index % 2 == 0 ? "flex-row" : "flex-row-reverse px-8"
                  } items-center`}
                >
                  <div className="w-full xl:w-2/4 p-6 mx-auto xl:flex 2xl:justify-center">
                    <video src={item.video}   autoPlay loop muted >
     </video>
                  </div>

                  <div className=" px-7 w-full xl:w-1/2 mx-auto flex flex-col space-y-4">
                    <div className="text-primary font-bold font-Poppins text-sm  ">
                      {item.head}
                    </div>
                    <div className=" text-white font-bold font-Poppins text-xl md:text-2xl  xl:leading-24">
                      {item.title}
                    </div>
                    <p className="xl:w-11/12 text-sm md:text-lg text-white font-normal">
                      {item.description}
                    </p>
                    <div className="w-1/2">
                    <PrimaryButton to="" text="Get started for FREE" />

                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Mobile View */}
      <section id="services" className="block xl:hidden w-full py-10 bg-theme_white">

      <div className="m-10 text-center mx-auto space-y-8">
          <h2 className="w-4/5 mx-auto text-lg xl:text-5xl font-poppins text-white font-bold">
          here’s how it works…
          </h2>
        </div>

        <div className="my-4">
          {dataArray.map((item, index) => {
            return (
              <div className="w-4/5 mx-auto py-4" key={index}>
                <div className="flex flex-col space-x-6 items-start">
                  <GatsbyImage image={item.image} alt={item.title} />

                  <div className="flex flex-col px-4  space-y-4 items-start">
                    <div className=" text-white font-medium text-xl md:text-2xl xl:text-3xl">
                      {item.title}
                    </div>
                    <p className="w-4/5 xl:w-11/12 text-sm md:text-base text-white font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HowitWorks
