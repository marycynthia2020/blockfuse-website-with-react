import React, { useContext } from "react";
import apply from "/apply.svg";
import { themeContextProvider } from "../Contexts/ThemeContext";

const OurJourney = () => {
    const {darkTheme} = useContext(themeContextProvider)
  return (
    <section className={darkTheme? "w-full bg-[#201f24] mx-auto": "w-full mx-auto "} >
      <div className="w-[90%] mb-28 py-20 flex flex-col items-center justify-center gap-12 mx-auto ">
        <div>
          <h2 className="text-3xl font-medium">Our Journey</h2>
        </div>

        <div className=" w-[90%] md:w-[60%] grid xl:grid-cols-3 gap-8 md:gap-6">
          <div className={darkTheme? "border-2 border-[#3f1c4a] p-6 bg-black": "border-2 border-[#3f1c4a] p-6"}>
            <div className="flex gap-2 items-center mb-4">
              <div className="w-6 h-6 gap-4 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold">The Leap</h3>
            </div>
            <p className="text-justify text-lg">
              Blockfuse Labs was established with a mission to empower
              developers through both remote and onsite training. Our primary
              agenda is to build a sustainable blockchain economy by fostering
              innovation, technical expertise, and community development across
              Africa and beyond
            </p>
          </div>

          <div className={darkTheme? "border-2 border-[#3f1c4a] p-6 bg-black": "border-2 border-[#3f1c4a] p-6"}>
            <div className="flex gap-2 items-center mb-4">
              <div className="w-6 h-6 gap-4 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold ">Our today</h3>
            </div>
            <p className="text-justify text-lg">
              Today, Blockfuse Labs stands as a beacon of blockchain education,
              offering cutting-edge courses that cover everything from basic
              blockchain principles to advanced development, helping learners
              master the future of technology.
            </p>
          </div>
          <div className={darkTheme? "border-2 border-[#3f1c4a] p-6 bg-black": "border-2 border-[#3f1c4a] p-6"}>
            <div className="flex gap-2 items-center mb-4">
              <div className="w-6 h-6 gap-4 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold ">
                Our tomorrow
              </h3>
            </div>
            <p className="text-justify text-lg">
              As we look to the future, we aim to expand our reach and impact,
              continually adapting to the evolving needs of the blockchain
              ecosystem. Our commitment is to provide unmatched training and
              comprehensive support across to blockchain enthusiasts across
              Africa and beyond.
            </p>
          </div>
        </div>
        <p>Start Your Journey Today</p>
        <button className="mb-2 border-2 border-[#3f1c4a] flex items-center gap-3 py-3 px-14 bg-[#ab65ef]">
          Join our Community
          <img src={apply} alt="" />
        </button>
      </div>
    </section>
  );
};

export default OurJourney;
