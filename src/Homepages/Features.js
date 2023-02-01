import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/common/Button"

const Features = () => {
  const FeaturesQueryData = useStaticQuery(graphql`
    query FeaturesQuery {
      Img1: file(
        name: { eq: "1" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img2: file(
        name: { eq: "2" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img3: file(
        name: { eq: "3" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img4: file(
        name: { eq: "4" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img5: file(
        name: { eq: "5" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const Img_1 = getImage(FeaturesQueryData.Img1)
  const Img_2 = getImage(FeaturesQueryData.Img2)
  const Img_3 = getImage(FeaturesQueryData.Img3)
  const Img_4 = getImage(FeaturesQueryData.Img4)
  const Img_5 = getImage(FeaturesQueryData.Img5)
  const Img_6 = getImage(FeaturesQueryData.Img6)

  const itemsList = [
    {
      // title: "Professional Drivers",
      paragraph: "Regular Meetups",
      image: Img_1,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Presentations and Workshops ",
      image: Img_2,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Virtual and In-person events ",
      image: Img_3,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Mentorship",
      image: Img_4,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Networking Opportunities",
      image: Img_5,
    },
  ]

  return (
    <>
      <section
        id="features"
        className="relative pt-14 lg:pt-28 lg:pb-20 secondbg"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Features that work together
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5  md:gap-x-10 sm:gap-y-16  gap-10  items-center justify-center mx-auto space-x-1">
          {itemsList.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col space-y-2 items-center justify-center"
                key={index}
              >
                <div className="w-full  flex items-center justify-center">
                  <GatsbyImage
                    image={item.image}
                    alt={item.title}
                    className="w-full"
                  />
                </div>
                <div className="w-full text-center  items-center justify-center space-y-4 ">
                  <h1 className="text-lg xl:text-2xl font-semibold text-white ">
                    {item.title}
                  </h1>
                  <p className="text-base  text-white">{item.paragraph}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Button Section */}
        <div className="mt-10 flex items-center justify-center">
          <Button to="" text="Learn More" />
        </div>
      </section>
    </>
  )
}

export default Features
