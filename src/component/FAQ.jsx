import React from 'react'

const FAQ = () => {
  return (
    <div className="w-full flex flex-col space-y-10 ">
            <div className=" w-[90%] md:w-2/5 mx-auto text-center text-cent">
              <h2 className="text-3xl font-medium mb-4">FAQ'S</h2>
            <p>
              Everything you need to know about Blockfuse Labs! Can't find the answer you're looking for? 
              Please chat with our friendly team, or <a href="" className="text-[#ab65ef]">reach out to us on our Telegram channel here.</a>
            </p>
            </div>

              {/* <!-- the questions --> */}
            <div className="w-[90%] mx-auto text-l">
                
              {/* <!-- quest 1 --> */}
              <div  className="border-b-2 border-[#3f1c4a] p-8">
                <details>
                  <summary className="list-none">
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <p className="hover:text-[#ab65ef]">What is Blockfuse Labs?</p>
                      <span className="show-btn">+</span>
                    </div>
                  </summary>
                <div className="p-4">
                  <p>Blockfuse Labs is a tech hub dedicated to empowering individuals with skills in blockchain development. 
                    We offer FREE hands-on training, mentorship, and resources to help aspiring developers transition from Web2 to Web3, 
                    while also fostering innovation through product development.
                  </p>
                </div>

                </details>

              </div>

              {/* <!-- quest 2 --> */}
              <div  className="border-b-2 border-[#3f1c4a] p-8">
                <details>
                  <summary className="list-none">
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <p className="hover:text-[#ab65ef]">
                        Who can join Blockfuse Labs Cohort?</p>
                      <span className="show-btn">+</span>
                    </div>
                  </summary>
                <div className="p-4">
                  <p>Anyone with a passion for learning, a curiosity about blockchain technology, and a commitment to personal 
                    and professional growth can apply. Whether you're a beginner or an experienced developer looking to enhance 
                    your skills, we welcome you!
                  </p>
                </div>

                </details>
              </div>

            
              

              {/* <!-- quest 4 --> */}

              <div  className="border-b-2 border-[#3f1c4a] p-8">
                <details>
                  <summary className="list-none">
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <p className="hover:text-[#ab65ef]">How do I enroll in a Blockfuse Labs cohort?
                        </p>
                      <span className="show-btn">+</span>
                    </div>
                  </summary>
                <div>
                  <p className="p-4">Enrollment is easy! Visit our official website and follow the application process. 
                    Keep an eye on announcements for open registrations and deadlines. Click here to apply.
                  </p>
                </div>

                </details>
              </div>

              {/* <!-- /quest 5 --> */}

              <div  className="border-b-2 border-[#3f1c4a] p-8">
                <details>
                  <summary className="list-none">
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <p className="hover:text-[#ab65ef]">

                        How can Blockfuse Labs help with my career?</p>
                      <span className="show-btn">+</span>
                    </div>
                  </summary>
                <div className="p-4">
                  <p>Blockfuse Labs equips you with in-demand skills in blockchain and Web3 development, 
                    connecting you to a network of industry professionals and providing opportunities to work on real-world projects. 
                    Our graduates are well-prepared to enter the job market, launch startups, or contribute to cutting-edge innovations.
                  </p>
                </div>
                </details>
              </div>

              {/* <!-- qeust 6 --> */}
              <div  className="border-b-2 border-[#3f1c4a] p-8">
                <details>
                  <summary className="list-none">
                    <div className="font-semibold text-lg flex justify-between items-center">
                      <p className="hover:text-[#ab65ef]">
                        Is there a community I can join?</p>
                      <span className="show-btn">+</span>
                    </div>
                  </summary>
                <div className="p-4">
                  <p>Absolutely! Blockfuse Labs has a vibrant and supportive community where members collaborate, 
                    learn, and grow together. You can join our Telegram Group here, participate in meetups, and become part 
                    of a thriving network of developers and tech enthusiasts.
                  </p>
                </div>
                </details>
              </div>
                 
              </div>
              
            
          </div>
        
  )
}

export default FAQ