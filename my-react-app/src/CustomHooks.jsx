import React, { useState } from 'react'

const CustomHooks = () => {
    let [count , setcount]=useState(0);
    let [color , setcolor]=useState(false);
    let [inpcolor , setinpcolor]=useState();

    let changecolor = ()=>{
      if(color){
        setcolor(false)
      }else{
        setcolor(true)
      }
    }
    let inpchange=(e)=>{
  setinpcolor(e.target.value)
    }
    const increament =()=> setcount(count+1)
    const decreament =()=> setcount(count-1)


  return {count,increament,decreament,changecolor ,color,inpchange,inpcolor}
}

export default CustomHooks