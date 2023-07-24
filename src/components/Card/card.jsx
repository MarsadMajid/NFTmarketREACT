// import React from 'react'

export default function card(prop) {
  return (
    <div>
        <div className='bg-slate-800 max-w-[500px] rounded-2xl my-3 sm:my-0 ' >
            <img className=' w-full max-h-96 object-cover ' src={prop.img} alt="" />
            <span  className={prop.imgonly}>
            <div className="px-2 ">
           <p className="text-lg my-1 text-white font-semibold">Space Walking</p>
            <img className=" inline w-8 my-1" src={require("../../assests/Avatar Placeholder-9.png")} alt="" /><span className=" ps-2 text-white">Animakid</span>
            </div>
        </span>
        </div>
    </div>
  )
}


