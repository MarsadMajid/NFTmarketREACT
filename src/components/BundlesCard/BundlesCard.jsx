export default function Bundlescard(prop) {
    return (
      <div className={prop.see} >
          <div className={`max-w-xs rounded-2xl my-3 sm:my-0 ${prop.bg ? prop.bg : ''}`}>
              <img className=' w-full max-h-96 object-cover' src={prop.img1} alt="" />
                    <div className=" p-2  grid grid-cols-3 gap-4" >
                    <img className=" inline w-full  my-1" src={prop.img2} alt="" />
                    <img className=" inline w-full  my-1" src={prop.img3} alt="" />
                    <p className="w-full  bg-purple-500 rounded-2xl flex justify-center py-8 font-semibold text-xl  text-white ">{prop.txt}</p>
                    </div>
             <div className="p-2 px-1 ">
             <p className="text-lg text-white font-semibold">{prop.txt1}</p>
              <img className=" inline w-8 my-4" src={prop.img4} alt="" /><span className=" ps-2  text-white">{prop.txt2}</span>
              </div>
          </div>
      </div>
    )
  }
  


  
