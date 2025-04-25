import React from 'react'
import girlsimage1 from "/girlsimage1.png"
import secondaryImage from "/Secondary Image.svg"

const PhotoComponent = () => {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto mb-36">
    <div className="text-xl mb-6 opacity-70">
      <p
        className="w-[320px] text-center tracking-[3] leading-loose text-xl md:w-[500px] md:text-left md:tracking-normal md:leading-normal"
      >
        At Blockfuse Labs, we see education as a journey.
      </p>
      <p
        className="w-[320px] text-center tracking-[3] leading-loose text-xl md:w-[700px] md:text-left md:tracking-normal md:leading-normal"
      >
        Whether you're new to blockchain or an experienced developer,
      </p>
      <p
        className="w-[320px] text-center tracking-[3] leading-loose text-xl md:w-[800px] md:text-left md:tracking-normal md:leading-normal"
      >
        we offer resources, expert instructors,and tools for every stage
        of your growth.
      </p>
    </div>
    <div className="w-[90%]  relative ">
      <img
        src={girlsimage1}
        alt=""
        className="w-full md:h-[80vh] z-100 object-cover"
      />
      <img src={secondaryImage} alt="" className=" w-20 h-20 md:w-72 md:h-72 absolute -top-4 -left-4 md:-top-14 md:-left-8 z-10" />
    </div>
  </div>
  )
}

export default PhotoComponent