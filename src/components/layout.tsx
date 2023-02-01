import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Collapse from '../images/icons/Collapse'
import Button from './common/Button'
import Footer from './common/Footer'
import NavLink from './common/Navlink'
import Sidebar from './common/Sidebar'

type DataProps = {
  children: React.ReactNode
}

const Layout:React.FC<DataProps> = ({children}) => {

  const layoutQueryData = useStaticQuery(graphql`
      query LayoutQuery {
          Logo: file(name: {eq: "logo"}, absolutePath: {regex: "/images/"}) {
              childImageSharp {
                  gatsbyImageData(placeholder: NONE, quality: 100)
              }
          }
      }
  
  `)

    const logo = getImage(layoutQueryData.Logo)

    const [showSideBar, setShowSideBar] = useState(false)

  return (
    <>
                <div id="layout" className="w-screen h-screen mx-auto overflow-y-auto overflow-x-hidden ">


      {/* NavBar */}
        <nav className=' fixed w-full h-24  flex flex-col items-center bg-theme_white opacity-100 z-20'>
        {/* <div id='contact' className="w-full p-2 mb-2 flex flex-row items-center text-center mx-auto space-y-3 bg-purple-500">
          <h2 className=" w-full mx-auto text-sm font-poppins text-black font-normal">
          Live Webinar:  Accountants in the Modern World with Institute of Financial Accountants - 1st of February.
Join here
          </h2>

         
        </div> */}
          <div className='w-4/5 mx-auto flex justify-between items-center'>

            {/* Logo */}
            <a href='/' className='group inline-flex items-center space-x-4 cursor-pointer'>
                <GatsbyImage className='w-28 p-2  ' image={logo} alt="devmeet Logo" />
                {/* <div className='text-gray-50 text-2xl font-normal font-Poppins'>DevMeet</div> */}
            </a>

            {/* Links */}
            <div className='hidden xl:flex flex-row items-center justify-between space-x-14'>
                <NavLink to="/#about" text="About Us" />
                <NavLink to="/#features" text="Features" />
                <NavLink to="/#sponsors" text="Sponsors" />
                <NavLink to="/#team" text="Team" />
                <NavLink to="/#faqs" text="FAQs" />
                
            </div>

            {/* Button */}
            <div className='hidden xl:block font-normal font-Poppins'>
              <Button text="Coming Soon" to="#contact" />
            </div>

            {/* Collapse button for mobile view */}
            <div className="block xl:hidden cursor-pointer" onClick={()=> setShowSideBar(true)}>
                <Collapse />
            </div>

          </div>

        </nav>

      {/* SideBar */}
      {showSideBar && <div className=" hidden xl:block absolute w-screen h-screen bg-black bg-opacity-60" style={{zIndex:99}}></div>}
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} /> 

      <main className='w-full pt-10 xl:pt-24 h-screen bg-theme_white'>
          {children}
      </main>

      {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout