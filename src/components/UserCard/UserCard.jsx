import React from 'react'

export default function UserCard(prop) {
  return (
    <div className={prop.see}  >
          <div className={`2xl:max-w-[250px] max-w-full max-h-[100px] 2xl:max-h-full bg-rgba-[59, 59, 59] rounded-2xl my-3 sm:my-0 ${prop.bg ? prop.bg : ''}`} style={{ backgroundColor: "rgba(59, 59, 59, 1)" }} >
            <div className=' inline-block ms-4 z-10 2xl:z-0 mt-0 2xl:mt-2  -translate-y-3   2xl:translate-y-6 text-gray-500 p-1 px-2 rounded-full  text-sm ' style={{ backgroundColor: "#2B2B2B" }} >1</div>
              <img className=' w-16 inline 2xl:block 2xl:w-28  2xl:mx-auto object-cover pt-2 2xl:pt-  2xl:mt- -ms-5 2xl:ms-  2xl:mb-10  z-0 ' src={prop.img1} alt="" />
             <div className=" ">
             <p className="text-lg text-white -translate-y-16 2xl:-translate-y-0 flex my-2 md:ms-5 2xl:ms-0 justify-center font-semibold">{prop.txt1}</p>
             <p className="text-lg text-gray-500 flex py-2 ps-16 2xl:ps-0 -translate-y-20 2xl:-translate-y-0 justify-center md:mt-8 2xl:mt-0 ">Total Sales: <span className='text-white font-thin text-md ms-2' >{prop.txt2}</span> </p>
              </div>
          </div>
      </div>
  )
}
