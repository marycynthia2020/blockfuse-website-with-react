import React, { useContext } from 'react'
import { themeContextProvider } from '../Contexts/ThemeContext'

const MissionVision = () => {
    const {darkTheme} = useContext(themeContextProvider)
  return (
    <section>
          <div
            className="w-[90%] md:w-[60%] grid md:grid-cols-2 gap-8 md:gap-6 mx-auto mb-20"
          >
            <div className={darkTheme? "border-2 border-[#3f1c4a] p-6 bg-black":  "border-2 border-[#3f1c4a] p-6 " }>
              <div className="flex gap-2 items-center mb-4">
                <div className="w-6 h-6 gap-4 bg-purple-500 rounded-full"></div>
                <h3 className={darkTheme? "text-2xl font-semibold": "text-2xl font-semibold text-black"}>Vision</h3>
              </div>
              <p className={darkTheme? "text-justify text-lg": "text-justify text-lg"}>
                To be the leading global hub for blockchain innovation, where
                creativity, knowledge, and technology intersect to create
                solutions that change the world.
              </p>
            </div>

            <div className={darkTheme? "border-2 border-[#3f1c4a] p-6 bg-black":  "border-2 border-[#3f1c4a] p-6 " }>
              <div className="flex gap-2 items-center mb-4">
                <div className="w-6 h-6 gap-4 bg-purple-500 rounded-full"></div>
                <h3 className={darkTheme? "text-2xl font-semibold": "text-2xl font-semibold text-black"}>Mission</h3>
              </div>
              <p className={darkTheme? "text-justify text-lg": "text-justify text-lg text-black"}>
                To cultivate a thriving community of skilled blockchain
                developers and pioneers in Nigeria, equipped to drive the future
                of technology in our region and beyond.
              </p>
            </div>
          </div>
        </section>
  )
}

export default MissionVision