import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/common/Button"

const Sponsers = () => {
  const SponsersQueryData = useStaticQuery(graphql`
    query SponsersQuery {
      Logo1: file(
        name: { eq: "github" }
        absolutePath: { regex: "/images/sponsors/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Logo2: file(
        name: { eq: "hackclub" }
        absolutePath: { regex: "/images/sponsors/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Logo3: file(
        name: { eq: "stickermule" }
        absolutePath: { regex: "/images/sponsors/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Logo4: file(
        name: { eq: "agora" }
        absolutePath: { regex: "/images/sponsors/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Logo5: file(
        name: { eq: "5" }
        absolutePath: { regex: "/images/feature/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const Logo_1 = getImage(SponsersQueryData.Logo1)
  const Logo_2 = getImage(SponsersQueryData.Logo2)
  const Logo_3 = getImage(SponsersQueryData.Logo3)
  const Logo_4 = getImage(SponsersQueryData.Logo4)
  const Logo_5 = getImage(SponsersQueryData.Logo5)
  const Logo_6 = getImage(SponsersQueryData.Logo6)

  const itemsList = [
    {
      // title: "Professional Drivers",
      paragraph: "Regular Meetups",
      image: Logo_1,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Presentations and Workshops ",
      image: Logo_2,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Virtual and In-person events ",
      image: Logo_3,
    },
    {
      // title: "Professional Drivers",
      paragraph: "Mentorship",
      image: Logo_4,
    },
  ]

  return (
    <>
      <section
        id="sponsors"
        className="relative pt-14 lg:pt-28 lg:pb-20 secondbg"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Sponsers
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  md:gap-x-10 sm:gap-y-16  gap-10  items-center justify-center mx-auto space-x-1">
          {itemsList.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col space-y-2 items-center justify-center"
                key={index}
              >
                <div className="w-full bg-theme_two p-4 rounded-2xl shadow-md shadow-gray-600  flex items-center justify-center">
                  <GatsbyImage
                    image={item.image}
                    alt={item.title}
                    className="w-36"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Sponsers
