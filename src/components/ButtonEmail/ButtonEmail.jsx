import React from 'react'

export default function ButtonEmail(prop) {
  return (
    <div>
        <input type="text"  className='px-12 py-3  rounded-xl' placeholder='Enter your email here' />
    <button className={prop.color}> <img className={prop.imgstyle} src={prop.img}  alt="" />
    {prop.txt}
    </button>
    </div>
  )
}
