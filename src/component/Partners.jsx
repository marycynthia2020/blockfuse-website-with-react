import React from 'react'
import hackmd from "/hackmdlogo.svg"

const Partners = () => {
  return (
    <div class="w-full flex flex-col items-center space-y-10 mb-28">
    <h2 class="text-3xl font-medium">Our Partners</h2>
    <div  class="flex flex-col items-center space-y-6">
      <img src={hackmd} alt="" />
      <h2 class="text-3xl font-medium">HackMD</h2>
      <div class="w-2 h-2 gap-4 bg-purple-500 rounded-full"></div>
    </div>

  </div>
  )
}

export default Partners