import React, { useState } from 'react'

const Input = () => {
    let [data,SetData]=useState("kuchh nhi ")
    function fun1(e){
        SetData(e.target.value)
    }
 
  return (
    <div>
        <h2>{data}</h2>
        <input onChange={fun1} placeholder='Enter the any value'/> 
      
       
    </div>
  )
}

export default Input