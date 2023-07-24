import React from 'react'
import ButtonEmail from '../ButtonEmail/ButtonEmail'

export default function Fotter() {
  return (
    <div className="max-w-full  px-7 sm:px-0 sm:py-0  my-10"  style={{ backgroundColor: "rgba(59, 59, 59, 1)" }} >
        <div className="grid max-w-screen-2xl mx-auto gap-2 grid-cols-1 lg:gap-6 sm:grid-cols-3 ">
          <div className=''>
          <span className=" z-0 "> <img className='my-4' src={require("../../assests/nav/logo.png")} alt='image'/> </span>
          <p className='text-xl my-4 text-gray-400 ' >NFT marketplace UI created with Anima for Figma.</p>
          <p className='text-xl my-4 text-gray-400 ' >Join our community</p>
          <img className='my-4' src={require("../../assests/nav/Icons.png")} alt='image'/> 
          </div>
          <div className=''>
          <p className='text-xl my-4 text-white font-semibold ' >Explore</p>
          <p className='text-xl my-4 text-gray-400 ' >Marketplace</p>
          <p className='text-xl my-4 text-gray-400 ' >Rankings</p>
          <p className='text-xl my-4 text-gray-400 ' >Connect a wallet</p>
          </div>
          <div className=''>
          <p className='text-xl my-4 text-white font-semibold ' >Join our weekly digest</p>
          <p className='text-xl my-4 text-gray-400 ' >Get exclusive promotions & updates straight to your inbox.</p>
          <ButtonEmail
                color="bg-purple-600 px-12  rounded-[20px] py-3  hover:bg-purple-700  active:bg-purple-800"
                txt="Subscribe"
                img={require("../../assests/RocketLaunch.png")}
                imgstyle="inline pe-2"
              />
          </div>
          <p className='text-xl my-4 text-white font-semibold '>
              Made with 💛 by <b> MARSAD MAJID  </b></p>
        </div>
    </div>
  )
}
