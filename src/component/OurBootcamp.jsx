import React from 'react'
import apply from "/apply.svg"

export const OurBootcamp = () => {
  return (
    <div
            class="w-[90%] mb-28 p-4 flex flex-col items-center md:mx-auto  space-y-10 space-x-10"
          >
            <div>
              <h2 class="text-2xl font-bold">Our Bootcamps</h2>
            </div>

            <div
              class="w-full flex flex-col md:flex-row  space-x-10 space-y-10 items-end"
            >
              <div
                class="w-full mx-auto md:w-1/2 border-2 border-[#3f1c4a] p-6 flex flex-col"
              >
                <div
                  class="bg-web2 h-[250px]  flex items-center justify-center mb-8"
                >
                  <h2 class="text-2xl text-center">Web2 for Web3 Preparatory Bootcamp</h2>
                </div>
                <p class="tracking-wider leading-loose">
                  Learn the essentials of modern web development in HTML, CSS,
                  Tailwind CSS, JavaScript, and Node.js/React. This program
                  guides you through creating interactive, responsive websites,
                  providing the skills and confidence to start building
                  real-world projects. Perfect for beginners ready to launch
                  their web journey!
                </p>
                <button
                  class="mb-2 self-center border-2 border-[#3f1c4a] flex items-center gap-3 py-3 px-8 bg-[#ab65ef] mt-8 md:mt-36"
                >
                  Join the Waitlist
                  <img src={apply} alt="" />
                </button>
                <p class="italic text-[#107c9f] self-center">
                  NOTE: Registration for Cohort III will start on March 1st.
                </p>
              </div>

              <div
                class="w-full mx-auto md:w-1/2 border-2 border-[#3f1c4a] p-6  flex flex-col "
              >
                <div
                  class="bg-web3 h-[250px] flex items-center justify-center mb-8"S
                >
                  <h2 class="text-2xl">Web3 Bootcamp</h2>
                </div>
                <p class="tracking-wider leading-loose">
                  Unlock the future of the internet with our Web3 Bootcamp!
                  Learn blockchain fundamentals, smart contracts, and dApps to
                  build decentralized applications. Ideal for beginners eager to
                  explore Web3 technology and launch into the world of
                  blockchain development!
                </p>
                <button
                  class="mb-2 self-center border-2 border-[#3f1c4a] flex items-center gap-3 py-3 px-8 bg-[#ab65ef] mt-8 md:mt-36"
                >
                  Join the Waitlist
                  <img src={apply} alt="" />
                </button>
                <p class="italic text-[#107c9f] self-center">
                  NOTE: Registration for Cohort III will start on March 1st.
                </p>
              </div>
            </div>
          </div>
  )
}
