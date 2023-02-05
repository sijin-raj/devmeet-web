import React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../Homepages/Features"
import HowitWorks from "../Homepages/HowitWorks"
import Corporate from "../Homepages/Corporate"
import Footer from "../components/common/Footer"
import Button from "../components/common/Button"
import UseSadiq from "../Homepages/UseSadiq"
import Team from "../Homepages/team"
import Sponsers from "../Homepages/Sponsors"
import Mentors from "../Homepages/mentor"
import FAQS from "../Homepages/faq/faqs"
import Welcome from "../images/welcome.mp4"

const IndexPage = () => {
  const indexQueryData = useStaticQuery(graphql`
    query IndexQuery {
      Head: file(
        name: { eq: "tel" }
        absolutePath: { regex: "/images/banner/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const HeadImg = getImage(indexQueryData.Head)

  return (
    <>
      {/* <Cursor /> */}
      <Layout>
        <SEO title="DevMeet Community " />
        <section
          id="header"
          className="relative w-full pt-20 pb-5 md:pt-18 xl:pt-10"
          // style={{
          //   backgroundImage: `url(${Banner})`,
          //   backgroundRepeat: "no-repeat",
          //   height: 500,
          // }}
        >
          <div className="w-4/5  mx-auto flex flex-col-reverse xl:flex-row items-center space-y-6 xl:space-y-0 xl:space-x-10">
            <div className="w-full xl:w-1/2 mt-12 mx-auto flex xl:items-center xl:justify-center">
              <div className="flex  flex-col items-start space-y-6">
                <h2 className="text-2xl md:text-3xl xl:text-5xl font-Poppins font-bold tracking-normal text-white   xl:leading-snug">
                  Building a Stronger Community of{" "}
                  <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">
                    {" "}
                    Developers, Hackers and Geeks Together{" "}
                  </span>{" "}
                  🛸 .
                </h2>

                <p className="text-sm md:text-lg font-medium font-Poppins tracking-normal text-gray-200 xl:leading-snug">
                  we welcome anyone with an interest in learning and innovation.
                  Join us for regular meetups, events, and online forums to stay
                  connected and engaged. Let's build the future of technology
                  together! 🚀
                </p>

                <div className="text-3xl sm:w-full lg:w-1/2 ">
                  <Button
                    text="Join the Team"
                    width="full"
                    classNames="py-5"
                    to="https://rb.gy/ndfjoy"
                  />
                </div>
                <p className="text-white    text-sm">
                  Come together to reach the peak.{" "}
                  {/* <span className="font-medium"> 200+ members</span>. */}
                </p>
              </div>
            </div>
            <div className="w-full xl:w-2/5 flex flex-col items-start space-y-8">
              <GatsbyImage image={HeadImg} alt="Header" />
            </div>
          </div>
        </section>

        <UseSadiq />

        {/* Features Section */}
        <Features />
        {/* Mentors */}
        {/* <Mentors /> */}
        <div className="w-full p-2 lg:p-40  flex xl:items-center xl:justify-center">
          <video src={Welcome} autoPlay loop muted></video>
        </div>
        {/* Grow Section */}
        <Sponsers />
        {/* How it Works */}
        <Team />

        {/* <HowitWorks /> */}

        <FAQS />
        {/* Footer Section */}
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
