import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/common/Button"

const Team = () => {
  const TeamQueryData = useStaticQuery(graphql`
    query TeamQuery {
      Img1: file(
        name: { eq: "team-1" }
        absolutePath: { regex: "/images/team/" }
      ) {
        childImageSharp {
          gatsbyImageData(
            placeholder: NONE
            quality: 100
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      Img2: file(
        name: { eq: "team-2" }
        absolutePath: { regex: "/images/team/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img3: file(
        name: { eq: "team-3" }
        absolutePath: { regex: "/images/team/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img4: file(name: { eq: "team-4" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img5: file(name: { eq: "team-5" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img6: file(name: { eq: "team-6" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img7: file(name: { eq: "team-7" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img8: file(name: { eq: "team-8" }, absolutePath: { regex: "/images/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      Img9: file(
        name: { eq: "member-2" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const Img_1 = getImage(TeamQueryData.Img1)
  const Img_2 = getImage(TeamQueryData.Img2)
  const Img_3 = getImage(TeamQueryData.Img3)
  const Img_9 = getImage(TeamQueryData.Img9)

  const itemsList = [
    {
      Name: "Sijin Raj ",
      Role: "Organizer",
      paragraph: "Software Engineer @Sadiq",
      image: Img_1,
    },
    {
      Name: "Yadeshwararam",
      Role: "Technical Lead",
      paragraph: "Software Engineer @TCS",
      image: Img_2,
    },
    {
      Name: "Rajesh Kannan",
      Role: "Community Manager",
      paragraph: "Software Engineer @Capgemini",
      image: Img_3,
    },
    {
      Name: "Surya Prakash ",
      Role: "Event Organizer",
      paragraph: "Service team @Niyo global sbm",
      image: Img_9,
    },

    {
      Role: "The Next DevMeet Star",
      paragraph: "",
      image: Img_9,
      Button: "join our team",
    },
  ]

  return (
    <>
      <section
        id="team"
        className="relative pt-14 lg:pt-24 lg:pb-20 bg-theme_white"
      >
        {/* Title Section */}
        <div className="text-left mx-auto space-y-10">
          <h1 className="w-3/4 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
            Our Team
          </h1>
        </div>

        <div className="pt-20 w-4/5 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  md:gap-x-10 sm:gap-y-16  gap-10 md:gap-y-7  items-center justify-center mx-auto  space-x-1 space-y-4">
          {itemsList.map((item, index) => {
            return (
              <div
                className="w-full p-2  cursor-pointer flex flex-col bg-theme_two rounded-xl shadow-md shadow-purple-50 hover:shadow-purple-500  items-center"
                key={index}
              >
                <div className="w-full p-4">
                  <GatsbyImage
                    image={item.image}
                    alt="icon"
                    className=" border-2 hover:border-purple-500 rounded-full"
                  />
                </div>

                <div className="pt-2 w-full text-center items-center justify-center space-y-1 ">
                  <h1 className="text-lg xl:text-xl font-Poppins font-bold text-white  ">
                    {item.Name}
                  </h1>
                  <p className="px-2  text-base font-normal font-Poppins text-gray-400 ">
                    {item.Role}
                  </p>
                  <p className="px-2  text-sm font-normal font-Poppins text-gray-500 ">
                    {item.paragraph}
                  </p>
                  <div
                    className={` ${
                      item.Button ? "block" : "hidden"
                    } p-2 flex justify-center items-center `}
                  >
                    <Button
                      to="https://rb.gy/ndfjoy"
                      text={item.Button}
                      className=""
                    />
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

export default Team
