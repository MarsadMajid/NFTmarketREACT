
export default function ThirdBundleCard(prop) {
    return (
      <div className={prop.see} >
      <div className={`max-w-xs rounded-2xl my-3 sm:my-0  bg-rgba-[59, 59, 59] ${prop.bg ? prop.bg : ''}`} style={{ backgroundColor: "rgba(59, 59, 59, 1)" }} >
          <img className=' w-full max-h-96 object-cover' src={prop.img1} alt="" />
         <div className="p-2 ms-2 ">
         <p className="text-lg text-white font-semibold">{prop.txt1}</p>
          </div>
      </div>
  </div>
    )
  }