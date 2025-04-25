import React from 'react'
import blockfuseLogo from "/blockfuselogo1.png"
import human11 from "/human11.jpg"
import human21 from "/human21.jpeg"
import human31 from "/human31.jpeg"
import human41 from "/human41.jpeg"
import human51 from "/human51.jpeg"
import human61 from "/human61.jpeg"
import human71 from "/human71.jpg"
import human81 from "/human81.jpeg"
import apply from "/apply.svg"

const Community = () => {
  return (
    <section className="w-full pb-12">
    <div className="w-[90%] md:w-3/4 flex flex-col items-center justify-center mx-auto space-y-8  text-center">
      <h2 className="text-3xl font-medium">Join our Community</h2>
      <p>Become part of a thriving network of blockchain enthusiasts and professionals.</p>
      <div className="rounded-full border-2  border-[#3f1c4a] h-20 w-20 flex items-center justify-center">
        <img src={blockfuseLogo} alt="" width="32" height="32" />
      </div>

      {/* <!-- images --> */}
      <div className=" hidden 2xl:flex items-center w-3/4 justify-end">
        <div className=" w-14 h-14 md:h-28 md:w-28 ">
          <img src={human11} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human11} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[20px] "/>
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human21} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[40px]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human31} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[80px]" />
        </div>
        <div className=" w-14 h-14 md:h-32 md:w-32 z-1">
          <img src={human41} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[100px]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human51} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[120px]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human61} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[140px]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human71} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[180px]" />
        </div>
        <div className=" w-14 h-14 md:h-28 md:w-28">
          <img src={human81} alt="" className="w-full h-full object-cover rounded-full border-2 border-[#ab65ef] -ml-[180px]" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-4 items-center">
        <p>Connect with us on Telegram</p>
        <button
            className=" flex items-center gap-2 py-2 px-8 bg-[#ab65ef]"
          >
            Join our Community
            <img src={apply} alt="" />
          </button>
      </div>
    </div>
   </section>
  )
}

export default Community