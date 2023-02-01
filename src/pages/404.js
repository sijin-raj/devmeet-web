import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/common/Button"

// import SEO from "../components/seo"

const NotFoundPage = () => {
  const ErrorQueryData = useStaticQuery(graphql`
    query ErrorQuery {
      Head: file(name: { eq: "err" }, absolutePath: { regex: "/images/404/" }) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `)

  const ErrorImg = getImage(ErrorQueryData.Head)
  return (
    <div className="w-full pt-10 xl:pt-5 h-screen flex flex-col space-y-5 items-center justify-center bg-theme_white">
      <GatsbyImage image={ErrorImg} alt="Header" className="w-96" />
      <h1 className="text-7xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">
        404
      </h1>
      <Button to="/" text="Back To Home" />
    </div>
  )
}

export default NotFoundPage
