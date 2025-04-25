import React, { useContext } from 'react'
import aboutimage from "/aboutimage1.png"
import { themeContextProvider } from '../Contexts/ThemeContext'

const BigImageSection = () => {
    const {darkTheme} = useContext(themeContextProvider)
  return (
    <section>
          <div
            className={darkTheme? "flex flex-col items-center w-[80%] mx-auto mb-36 text-[#D1D5DB] relative": "flex flex-col items-center w-[80%] mx-auto mb-36  relative"}
          >
            <p className="w-[full] text-left md:w-2/5 text-xl mb-8">
              At Blockfuse Labs, we see education as a journey. Whether you're
              new to blockchain or an experienced developer, we offer resources,
              expert instructors, and tools for every stage of your growth.
            </p>
            <div className="w-[90%] mx-auto">
              <img
                src={aboutimage}
                alt=""
                className="w-[90%] z-10 mb-8"
              />
              <p className="text-xl w-fullw-[90%] text-left">
                From developers and innovators to thought leaders in the Web3
                space, our graduates are transforming the future of technology.
              </p>
            </div>
          </div>
        </section>
  )
}

export default BigImageSection