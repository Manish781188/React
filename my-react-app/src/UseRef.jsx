import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    let [ state, setState]=useState(' ')
    let data = useRef(0)

    useEffect(()=>{
        data.current = data.current+1
    })
  return (
    <div>
        {/* <input  onChange={(e)=>setState(e.target.value)}/>
        <br></br>
{
    <h1>{data.current}</h1>
}
     */}

   
    </div>
  )
}

export default UseRef