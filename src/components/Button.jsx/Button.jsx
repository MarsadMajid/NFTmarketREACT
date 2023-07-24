
export default function Button(prop) {
  return (
    
    <button className={prop.color}> <img className={prop.imgstyle} src={prop.img}  alt="" />
    {prop.txt}
    </button>
    
  )
}


