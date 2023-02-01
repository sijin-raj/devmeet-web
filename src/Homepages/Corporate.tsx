import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrimaryButton from "../components/common/PrimaryButton";

const Corporate: React.FC = () => {
  const CorporateQueryData = useStaticQuery(graphql`
    query CorporateQuery {
      GroImg: file(
        name: { eq: "us" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
      PaImg: file(
        name: { eq: "last" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 100)
        }
      }
    }
  `);

  const GrowImg = getImage(CorporateQueryData.GroImg);
  const PayImg = getImage(CorporateQueryData.PaImg);


  return (
    <>
      <section id="about" className="relative pb-8 pt-14 lg:pt-20 lg:pb-14 bg-theme_two  ">
     
        <div className="w-full p-6  px-24 flex flex-col  ">


          <div className="w-1/2 mb-8 ">
            <div className=" text-left space-y-8 items-left">
              <h1 className="text-lg  text-primary  font-bold font-Poppins">
              CORPORATE CARDS


              </h1>
              <div className="text-left text-white space-y-8" >
              <p className="  text-sm xl:text-4xl font-bold font-Poppins">
              Issue unlimited corporate cards for your team in seconds


              </p>
              <p className="text-sm xl:text-lg mt-2 font-Poppins">
              Get the freedom and flexibility to provide every employee with a DevMeet card while managing their daily, weekly, or monthly card expenses in real-time.


              </p>
              <div className="w-1/2">
              <PrimaryButton text="Get Start for Free" to="" />

              </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            {/* Image  Section  */}
            <div className="w-full  flex xl:items-center xl:justify-center">
            <video src="https://cloudflarestream.com/e46b9a306d3fd3308e0b382a80d5958a/downloads/default.mp4"   autoPlay loop muted >
     </video>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Corporate;
