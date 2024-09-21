import React, { useState } from 'react'

export const Clock = () => {
    let [time,setTime]=useState()
    setInterval(()=>{
        let samay=new Date().toLocaleTimeString()
        setTime(samay)
    })
   
  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}
export default Clock