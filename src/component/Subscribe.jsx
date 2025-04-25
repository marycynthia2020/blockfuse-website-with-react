import React, { useContext } from 'react'
import { themeContextProvider } from '../Contexts/ThemeContext'

export const Subscribe = () => {
  const {darkTheme} = useContext(themeContextProvider)
  return (
    <section className={darkTheme? " bg-[#201f24] mt-20": " mt-20"}>
    <div  className=" w-[90%] md:w-2/4 p-2 py-10 md:py-20 flex flex-col mx-auto text-center items-center justify-center space-y-6 mb-28">
      <h2 className="text-3xl font-medium">Subscribe to Our Newsletter</h2>
      <p>Stay ahead in the world of blockchain! Get the latest updates, insights, <br/>
        and exclusive resources from BlockTate Labs delivered straight to your inbox. Don't miss out—subscribe today!
        </p>
      <form action="" className="flex flex-col gap-5 w-full md:w-4/5">
        <input type="text"  placeholder="Enter your Email here" className={darkTheme? "outline-none p-4 bg-[#1e2936]": "p-4 border-[1px] border-black outline-none"} />
        <button className="bg-[#ab65ef] p-4">Subscribe</button>
      </form>

    </div>
  </section>
  )
}

export default Subscribe