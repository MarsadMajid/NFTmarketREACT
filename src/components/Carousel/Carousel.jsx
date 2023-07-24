import React from 'react'
import Card from '../Card/card'
import ButtonEmail from '../ButtonEmail/ButtonEmail'
export default function Carousel(prop) {
  return (
    <div className=" w-full py-12 sm:py-0 px-4 mx-auto  " >
        <div className=" max-w-screen-2xl   sm:mx-52 mx-auto  sm:my-10 md:my-10 " style={{ backgroundColor: "rgba(59, 59, 59, 1)" }} >
          <div className="grid sm:my-20 md:my-20 px-2 md:grid-cols-2 py-6 lg:grid-cols-2 md:space-x-4 2xl:space-x-0  ">
                 <div className=' sm:ms-16 '>
                 <Card img={prop.img} imgonly={prop.hid2}  />
                    </div> 
            <div className="space-y-4 mt-4 sm:ms-10 mx-3 md:ms-14 2xl:ms-52 ">
              <p className="  font-bold  text-4xl md:text-7xl  text-white  ">
              Join our weekly digest
              </p>
              <p className="w-full  max-w-xl text-2xl text-white">
              Get exclusive promotions & updates straight to your inbox.
              </p>
              <ButtonEmail
                color="bg-purple-600 px-12  rounded-[20px] py-3  hover:bg-purple-700  active:bg-purple-800"
                txt="Subscribe"
                img={require("../../assests/RocketLaunch.png")}
                imgstyle="inline pe-2"
              />
                <span className={prop.hid1}>
              </span>
            </div>

          </div>
          </div>
          </div>

  )
}
