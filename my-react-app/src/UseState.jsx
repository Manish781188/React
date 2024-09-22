import React, { useState } from 'react'

const UseState = () => {

    let [count,setcount]=useState(0)
      let [color,setcolor]=useState('red')
      function fun1(){
        setcount(count+1)
        setcolor('green')
      }
  return (
    <div>
         <div style={{background:color,height:'100px' , width:'100px '}}></div>
          <p>{count}</p>
          <button onClick={fun1}>click</button>
       <button onClick={fun1}>color green</button>
    </div>
  )
}

export default UseState