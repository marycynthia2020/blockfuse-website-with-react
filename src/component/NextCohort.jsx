import React from 'react'
import apply from "/apply.svg"

const NextCohort = () => {
  return (
    <div class=" w-[90%] md:w-[50%] text-center mx-auto flex flex-col items-center space-y-5 mb-36">
            <h2 class="text-3xl font-medium">Join the next cohort</h2>
            <p>
              Step into the future of blockchain with Blockfuse Labs! Our upcoming cohort offers hands-on training, expert mentorship, and 
              a vibrant community to help you build and thrive in Web3. Secure your spot and start your journey today!
            </p>
            <p>
              Start Your Journey Today
            </p>
            <button
                  class="  mb-2 border-2 border-[#3f1c4a] flex items-center gap-3 py-3  px-10 bg-[#ab65ef]"
                >
                  Join our Community
                  <img src={apply} alt="" />
                </button>

          </div>
  )
}

export default NextCohort