import React, { useContext } from 'react'
import myself from "/Snapchat-1623240771(1).jpg"
import { themeContextProvider } from '../Contexts/ThemeContext'

const Testimonial = () => {
    const {darkTheme} = useContext(themeContextProvider)
  return (
    <div className=" w-[70%] md:w-[50%] flex flex-col mx-auto items-center space-y-12 mb-36">
    <h2 className="text-3xl font-medium">Testimonial</h2>

    <div className="flex flex-col md:flex-row  border-2 border-[#3f1c4a]">
      <div className="h-60 w-full">
        <img src={myself} alt="" className=" h-full w-full object-cover md:aspect-square" />
      </div>
      <div className="flex flex-col gap-4  p-4">
        <p>20/02/2025</p>
        <h2 className="text-lg md:text-2xl font-medium">Chinemerem Ugbaja</h2>
        <p className={darkTheme? "text-[#D1D5DB]": ""}>My experience at Blockfuse labs has been a life changing experience, 
          nothing short of Amazing. From the quality of knowledge being taught, to 
          participating in real life projects and having the opportunity to learn from the 
          best mentors and other brilliant minds in the community.
        </p>
      </div>
     
    </div>
   

  </div>
  )
}

export default Testimonial