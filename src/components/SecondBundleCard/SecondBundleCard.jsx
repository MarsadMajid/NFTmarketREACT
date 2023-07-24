import React from 'react'

export default function SecondBundleCard(prop) {
  return (
    <div className={prop.see} >
    <div className={`max-w-xs rounded-2xl my-3 sm:my-0  bg-rgba-[59, 59, 59] ${prop.bg ? prop.bg : ''}`} style={{ backgroundColor: "rgba(59, 59, 59, 1)" }} >
        <img className=' w-full max-h-96 object-cover' src={prop.img1} alt="" />
       <div className="p-2 ms-2 ">
       <p className={`text-lg text-white font-semibold  ${prop.hd}`}>{prop.txt1}</p>
       <span className={prop.hid}>
        <img className=" inline w-8 " src={prop.img4} alt="" /><span className=" ps-2  text-white">{prop.txt2}</span>
        <div className='flex justify-between mx-1 mt-3'>
            <div>
                <p className='text-xl text-gray-500 ' >{prop.txt3}</p>
                <p className='text-white font-thin text-md '>1.{prop.txt4} ETH</p>
            </div>
            <div>
                <p className='text-xl text-gray-500 '> {prop.txt5}</p>
                <p className='text-white font-thin text-md '>{prop.txt6}</p>
            </div>
        </div>
        </span>
        <p className='text-white font-thin text-md '>{prop.hid1}</p>
        </div>
    </div>
</div>
  )
}