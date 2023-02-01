import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../components/common/Button";

const UseSadiq: React.FC = () => {
  const UseSadiqQueryData = useStaticQuery(graphql`
    query UseSadiqQuery {
      Img: file(
        name: { eq: "about" }
        absolutePath: { regex: "/images/banner/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }   
    }
  `);

  const GrowImg = getImage(UseSadiqQueryData.Img);


  return (
    <>
      <section className="relative pb-8 pt-14 lg:pt-18 lg:pb-14 bg-theme_white  ">

        <div className="w-full p-4 px-10  flex flex-col md:flex-row lg:flex-row items-center justify-center">
        <div className=" w-full xl:w-2/5">
            {/* Image  Section  */}
            <div className="w-full px-4 mx-auto flex xl:items-center xl:justify-center">
              <GatsbyImage  image={GrowImg} alt="about" className="rounded-lg" />
            </div>
          </div>
          <div className="w-4/5 xl:w-1/2 px-4">
            <div className="text-left mx-auto space-y-5 items-center">
            <h1 className="text-xl  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 font-bold font-Poppins">
              About Us

              </h1>
              <div className="text-left text-3xl font-bold font-Poppins text-white">🚀 Welcome to <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">DevMeet</span> !</div>
              <div className="text-left text-white font-normal space-y-3" >
              <p className="text-lg font-Poppins ">🧑🏾‍💻  We are a community of developers, hackers, and geeks who come together to share knowledge, collaborate on projects, and have fun. Whether you're a seasoned pro or just starting out, there's a place for you here.</p>
              <p className="text-lg font-Poppins ">💻  Our community is focused on technology and programming, but we welcome anyone with an interest in learning and innovation. We host regular meetups and events, as well as online forums and resources to help you stay connected and engaged.</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
};

export default UseSadiq;
