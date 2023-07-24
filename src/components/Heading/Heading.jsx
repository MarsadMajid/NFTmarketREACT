import Button from "../Button.jsx/Button"
export default function Heading(prop) {
  return (
    <div className=" max-w-screen-2xl  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <span>
            <h1 className='font-bold text-4xl  text-white'>{prop.txt1}</h1>
            <h3 className='text-xl text-white mt-3  ' > {prop.txt2}</h3>
            </span>
             <span className="flex sm:py-4 my-2 2xl:pe-40 sm:pe-20 sm:justify-end  ">
             <Button
                color={`border-2 border-purple-600 px-12   text-white  rounded-[20px] hover:bg-purple-700 active:bg-purple-800 ${prop.bg} }`}
                txt={prop.bttxt}
                img={prop.img}
                imgstyle={prop.imgstyle}
              />
             </span>
            </div>
        </div>
  )
}
