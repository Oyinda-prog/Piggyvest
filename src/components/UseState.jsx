import React, { useState } from 'react'
useState
function UseState() {
    const [num, setnum] = useState(0)
  const test = ()=>{
  setnum(num+1)
  console.log(num);
  }

//   const [number, setnumber] = useState("")
//   const test1 = ()=>{
//   setnumber(234+1)
//   console.log(num);
//   }
   
   const decrement=()=>{
setnum(num-1)
   }
  return (
    <>
     <button className='btn btn-large btn-warning w-100' onClick={test}>check</button>
     <button className='btn btn-large btn-warning w-100' onClick={decrement}>check</button>
     <h2>{num}</h2>
    
    
    </>
  )
}

export default UseState