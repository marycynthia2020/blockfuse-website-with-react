import React, { useContext } from 'react'
import { themeContextProvider } from '../Contexts/ThemeContext'

const BlockfuseAbout = () => {
    const {darkTheme} = useContext(themeContextProvider)
  return (
    <div>
         <section>
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <h1 className="w-full md:w-4/5 text-5xl md:text-6xl font-bold">
              About
              <span className="text-[#ab65ef]">Blockfuse Labs</span>
            </h1>
            <p
              className="w-4/5 md:w-3/5 text-[18px] opacity-70 md:full text-center"
            >
              At Blockfuse Labs, we provide expert training and resources to
              advance blockchain education. Since our founding, Blockfuse Labs
              has grown into a leading educational platform, trusted by
              developers and enthusiasts alike. Today, we're proud to be driving
              blockchain education and innovation across Africa, helping
              learners at all levels build their skills and confidence.
            </p>
          </div>
        </section>

        <section>
          <article className="w-[90%] md:w-[53%] mx-auto text-[#D1D5DB] mb-10">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                In the Beginning
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                Blockfuse Labs is a rapidly-growing Web3 community founded in
                2024 on a selfless code of conduct: to equip developers with
                trendsetting Web3 knowledge that transforms them into daredevil
                changemakers who will drive a sustainable Web3 Economy in
                Africa.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                Our Current State of Mind
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                In just 5 months, Blockfuse Labs has trained 65 students
                directly and indirectly through our Web3 and Web2 to Web3
                Preparatory Bootcamps. At Blockfuse Labs, our mission is clear:
                to bridge the gap between learning and real-world application,
                creating a pipeline for job-ready talent. Our state-of-the-art
                facility, equipped with high-speed internet, provides a
                supportive environment for onsite learners. Every program, every
                resource, and every connection we build is geared towards
                fostering skills that translate into job opportunities and
                career growth in the blockchain space.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                Where We Are Going
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                By 2028, our goal is to empower over 1000 developers annually
                through expanded programs and strategic partnerships. We aim to
                be the cornerstone of blockchain growth in Africa, turning
                aspiring learners into world-className innovators and fostering job
                creation across the continent. We won't stop until Africa
                becomes the pulse of the global blockchain landscape, showcasing
                its unparalleled talent and creativity.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                In the Beginning
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                Blockfuse Labs is a rapidly-growing Web3 community founded in
                2024 on a selfless code of conduct: to equip developers with
                trendsetting Web3 knowledge that transforms them into daredevil
                changemakers who will drive a sustainable Web3 Economy in
                Africa.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                What Makes Us Different? It's Our DNA
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                Our team is an army of cross-functional innovators. We are a
                blend of technical and non-technical experts who share
                comprehensive, challenge-tested insights that simplify
                blockchain's complexities, be it development, strategy, or
                design. We are laser-focused on equipping you with practical,
                real-world skills for seamless adaptation and transitioning to
                achieve your goals.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                Why Join Us?
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                We don't just sit through training, we dive into action.
                Blockfuse Labs is where hands-on learning is the livewire. We
                are the place where skills don't stay on paper—they are
                transformed into careers. Networking? We've got those too—the
                kind that opens doors and pushes you forward. Your success is
                our pleasure.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-purple-500 mb-4">
                Ready For Transformation?
              </h2>
              <p className={darkTheme? "text-justify": "text-black"}>
                Join Blockfuse Labs to transform your skills into real-world
                impact. Learn, innovate, and disrupt alongside a community
                pushing the boundaries of tech.
              </p>
            </div>
          </article>
        </section>
    </div>
  )
}

export default BlockfuseAbout