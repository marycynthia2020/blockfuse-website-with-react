import React from 'react'
import real from "/real.svg"

const MoreThanBasics = () => {
  return (
    <div
    class="w-[90%]  md:w-[75%] px-4 md:mx-auto  mb-20 flex flex-col items-center justify-center space-y-20"
  >
    <div >
      <h2 class="text-3xl font-medium">More Than Just the Basic</h2>
    </div>

    <div class="w-full grid md:grid-cols-2 gap-8 md:gap-16">
      <div class="md:flex md:items-center md:space-x-6">
        <img src={real} alt="" />
        <div class="border-b-2 border-[#ab65ef] pb-4">
          <h2 class="font-bold text-2xl my-4">REAL WORLD EXPERIENCE</h2>
          <div class="flex space-x-4">
            <p>
              Apply your skills to solve real-world problems and see
              immediate results.
            </p>
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99988%2016.7705L13.2699%2012.5005H20.9219V11.5005H13.2679L8.99988%207.23047L4.22987%2012.0005L8.99988%2016.7705Z'%20fill='white'/%3e%3c/svg%3e"
              alt="Diamond"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
      <div class="md:flex items-center md:space-x-6">
        <img src="/images/real.svg" alt="" />
        <div class="border-b-2 border-[#ab65ef] pb-4">
          <h2 class="font-bold text-2xl my-4">HANDS-ON LEARNING</h2>
          <div class="flex space-x-4">
            <p>
              Dive into projects and learn by doing, transforming theory
              into practice.
            </p>
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99988%2016.7705L13.2699%2012.5005H20.9219V11.5005H13.2679L8.99988%207.23047L4.22987%2012.0005L8.99988%2016.7705Z'%20fill='white'/%3e%3c/svg%3e"
              alt="Diamond"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center md:space-x-6">
        <img src={real} alt="" />
        <div class="border-b-2 border-[#ab65ef] pb-4">
          <h2 class="font-bold text-2xl my-4">INTERACTIVE LEARNING</h2>
          <div class="flex space-x-4">
            <p>
              Engage actively with hands-on activities that bring
              concepts to life.
            </p>
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99988%2016.7705L13.2699%2012.5005H20.9219V11.5005H13.2679L8.99988%207.23047L4.22987%2012.0005L8.99988%2016.7705Z'%20fill='white'/%3e%3c/svg%3e"
              alt="Diamond"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center md:space-x-6">
        <img src={real} alt="" />
        <div class="border-b-2 border-[#ab65ef] pb-4">
          <h2 class="font-bold text-2xl my-4">
            COLLABORATIVE LEARNING
          </h2>
          <div class="flex space-x-4">
            <p>
              Collaborate with peers to share insights, tackle
              challenges, and grow together.
            </p>
            <img
              src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99988%2016.7705L13.2699%2012.5005H20.9219V11.5005H13.2679L8.99988%207.23047L4.22987%2012.0005L8.99988%2016.7705Z'%20fill='white'/%3e%3c/svg%3e"
              alt="Diamond"
              class="w-5 h-5 sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MoreThanBasics