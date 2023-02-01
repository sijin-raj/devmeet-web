import { graphql, Link, navigate, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const FooterLink = ({to, text, externalLink=false}) => {
  return(
    externalLink ? 
      <a href={to} target="_blank" className="text-white text-15px font-normal hover:font-medium">{text}</a>
      :
      <Link to={to} className="text-white text-15px font-normal hover:font-medium">{text}</Link>
  )
}

const solutionsArray = [
  {text: 'Increase ROI', to: '#'},,
  {text: 'Personalized Experiences', to: '#'},
  {text: 'Data-Driven Marketing', to: '#'},
  {text: 'Email Deliverability', to: '#'},
  {text: 'Deep-Data Integrations', to: '#'},
  {text: 'Multi-Store Connection', to: '#'},
  {text: 'Switch ESP', to: '#'},
]

const industriesArray = [
  {text: 'About Us', to: '/#about'},,
  {text: 'Sponsors  ', to: '/#sponsors'},
  {text: 'Team', to: '/#team'},
  {text: 'FAQs', to: '/#faqs'},
]


const aboutArray = [
  {text: 'dev.to', to: '/'},,
  {text: 'Blog', to: '#'},
  {text: 'Sponsor Us', to: '/', externalLink: true},
  {text: 'Swags', to: '/#pricing'},
  {text: 'Schedule', to: '#'}
]

const Footer: React.FC = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
  }

  const data = useStaticQuery(graphql`
    query FooterQuery {
      Logo: file(
        name: { eq: "logo" }
        absolutePath: { regex: "/images/" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 240, height: 200, placeholder: NONE)
        }
      }
    }
  `)

  const logo = getImage(data.Logo)

  const callBackToTop = () => {
    navigate('#header')
  }

  return (

    <>
      {/* Footer Section */}
      <div className="relative  w-full bg-theme_white" style={{zIndex: 900}}>

        <div className="w-4/5 px-4 mx-auto rounded-xl py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10  ">

          {/* Growthzen Growth */}
            <div className="flex px-6 flex-col">

              <div className="cursor-pointer" onClick={() => navigate("/")}>
                <GatsbyImage
                  image={logo}
                  alt="Manycon Logo"
                  className="cursor-pointer mt-4 p-5 "
                />
              </div>

            


            </div>
          
          {/* INDUSTRY SECTION */}
          <div className="w-full md:w-4/5 xl:w-3/4 mx-auto space-y-5">
              <h3 className="text-white text-sm font-bold uppercase">Solutions</h3>

              <div className="w-full list-none text-white text-sm space-y-4">
                {industriesArray.map((item, index) => {
                  return(
                    <div key={index}>
                      <FooterLink to={item.to} text={item.text} />
                    </div>
                  )
                })}
              </div>

          </div>

          {/* ABOUT SECTION */}
          <div className="w-full md:w-4/5 xl:w-3/4 mx-auto space-y-5">
              <h3 className="text-white text-sm font-bold uppercase">ABOUT</h3>

              <div className="w-full list-none text-white text-sm space-y-4">
                {aboutArray.map((item, index) => {
                  return(
                    <div key={index}>
                      <FooterLink to={item.to} text={item.text} externalLink={item.externalLink && item.externalLink} />
                    </div>
                  )
                })}
              </div>

          </div>

          {/* Social Icon Section */}
          <div className="w-full md:w-4/5 xl:3/4 mx-auto space-y-5">

            <h3 className="text-white text-sm font-bold uppercase">FOLLOW US</h3>

            <div className="flex flex-row items-center space-x-5">

              {/* Facebook Icon */}
              <a href="#" target="_blank" className="bg-primary p-2 rounded-full">
                <svg className="cursor-pointer" width="18" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.4893 2.63607H7.93865V0.111793C7.6886 0.0773953 6.82865 0 5.82714 0C3.73747 0 2.30598 1.3144 2.30598 3.73019V5.95349H0V8.77544H2.30598V15.876H5.13323V8.7761H7.34594L7.6972 5.95415H5.13257V4.01C5.13323 3.19438 5.35285 2.63607 6.4893 2.63607Z" fill="white"/>
                </svg>
              </a>

              {/* Twitter Icon */}
              <a href="#" target="_blank" className="bg-primary p-2 rounded-full">
                <svg className="cursor-pointer" width="18" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.494 1.881C19.7668 2.2 18.9919 2.41144 18.184 2.51411C19.0151 2.01789 19.6495 1.23811 19.9477 0.298222C19.1728 0.760222 18.3173 1.08656 17.4055 1.26867C16.6697 0.485222 15.621 0 14.477 0C12.2575 0 10.4706 1.80156 10.4706 4.01011C10.4706 4.32789 10.4975 4.63344 10.5635 4.92433C7.23048 4.76178 4.28125 3.16433 2.30003 0.730889C1.95414 1.331 1.75125 2.01789 1.75125 2.75733C1.75125 4.14578 2.46625 5.37656 3.53203 6.08911C2.88792 6.07689 2.25603 5.88989 1.7207 5.59533C1.7207 5.60756 1.7207 5.62344 1.7207 5.63933C1.7207 7.58756 3.11037 9.20578 4.9327 9.57856C4.60637 9.66778 4.2507 9.71056 3.88159 9.71056C3.62492 9.71056 3.36581 9.69589 3.12259 9.64211C3.64203 11.2298 5.11603 12.397 6.8687 12.4349C5.5047 13.5019 3.77281 14.1448 1.89792 14.1448C1.56914 14.1448 1.25381 14.1301 0.938477 14.0898C2.71437 15.235 4.81903 15.8889 7.0887 15.8889C14.466 15.8889 18.4994 9.77778 18.4994 4.48067C18.4994 4.30344 18.4933 4.13233 18.4847 3.96244C19.2804 3.39778 19.9489 2.69256 20.494 1.881Z" fill="white"/>
                </svg>
              </a>

              {/* Insta Icon */}
              <a href="#" target="_blank" className="bg-primary p-2 rounded-full">
                <svg className="cursor-pointer" width="18" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.49414 0H11.4941C14.2551 0 16.4941 2.239 16.4941 5V11C16.4941 13.761 14.2551 16 11.4941 16H5.49414C2.73314 16 0.494141 13.761 0.494141 11V5C0.494141 2.239 2.73314 0 5.49414 0ZM11.4941 14.5C13.4241 14.5 14.9941 12.93 14.9941 11V5C14.9941 3.07 13.4241 1.5 11.4941 1.5H5.49414C3.56414 1.5 1.99414 3.07 1.99414 5V11C1.99414 12.93 3.56414 14.5 5.49414 14.5H11.4941Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.49414 8C4.49414 5.791 6.28514 4 8.49414 4C10.7031 4 12.4941 5.791 12.4941 8C12.4941 10.209 10.7031 12 8.49414 12C6.28514 12 4.49414 10.209 4.49414 8ZM5.99414 8C5.99414 9.378 7.11614 10.5 8.49414 10.5C9.87214 10.5 10.9941 9.378 10.9941 8C10.9941 6.621 9.87214 5.5 8.49414 5.5C7.11614 5.5 5.99414 6.621 5.99414 8Z" fill="white"/>
                  <circle cx="12.7942" cy="3.69999" r="0.533" fill="white"/>
                </svg>
              </a>

            </div>

          </div>

        </div>

        {/* Back to Top button */}
        <div onClick={() => callBackToTop()} className="absolute bottom-20 right-0 md:right-10 md:top-10 cursor-pointer">
          <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_704_1058)">
            <rect x="24" y="20" width="50" height="50" rx="25" fill="#7805C8"/>
            </g>
            <path d="M52.8208 48L49 44.1792L45.1792 48L44 46.8208L49 41.8208L54 46.8208L52.8208 48Z" fill="white"/>
            <defs>
            <filter id="filter0_d_704_1058" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="12"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0823529 0 0 0 0 0.176471 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_1058"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_1058" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>

        <div className="w-4/5 mx-auto border-b border-border border-opacity-10"></div>

          {/* Copyright  */}
        <div className="py-6 text-center text-white text-opacity-60">
          <p className="text-white text-sm md:text-base text-opacity-60 lg:text-lg font-normal">
            Copyright &copy; {getYear()}{" "}
            <span
              className="text-white text-opacity-50 cursor-pointer hover:text-opacity-100"
              onClick={() => navigate("/")}
            >
              DevMeet. All rights reserved
            </span>
          </p>
        </div>

      </div>
    </>

  )
}

export default Footer