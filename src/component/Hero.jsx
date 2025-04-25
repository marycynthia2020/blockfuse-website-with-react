import React, { useContext } from 'react'
import apply from "/apply.svg"
import { themeContextProvider } from '../Contexts/ThemeContext'

const Hero = () => {
    const {darktheme} = useContext(themeContextProvider)
  return (
    <div
            className="2xl:w-4/5 mx-auto flex flex-col items-center text-center space-y-6 mb-52 md:mb-96"
          >
            <h1 className=" text-5xl md:text-6xl  font-medium">
              Unlock the Future with
              <span className="text-[#ab65ef]"> Blockchain</span>
            </h1>
            <div className="flex flex-col space-y-1 opacity-70  w-4/5 md:full text-center">
              <p className="text-[18px]">
                Transform your skills and career with comprehensive
              </p>
              <p className="text-[18px]">
                training designed to lead the digital revolution
              </p>
            </div>

            <button
              className="outline-none flex items-center gap-3 py-3 px-10 bg-[#ab65ef]"
            >
              Explore our Bootcamps
              <img src={apply} alt="" />
            </button>
          </div>
  )
}

export default Hero