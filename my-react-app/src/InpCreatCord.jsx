import React, { useState } from 'react'

const InpCreatCord = () => {
    let [input ,setinput]=useState()
    let [state ,setState]=useState([])
   let arr =[]
   console.log(input);
   
    
    console.log(arr,'ye raha array');
    
     function fun1(){
        
        for(let i=0;i<input;i++){
            arr.push(i);
        }
        console.log(arr,'isko');
        setState(arr)
        
     }
    
  return (
    <div>
     <input type='number' onChange={(e)=>setinput(e.target.value)}/>
     <button onClick={fun1} >click</button>

        {
             state.map(()=>
            {
                return(
                    <div style={{backgroundColor:'red'}} >king</div>
                )
            })
        }

    </div>
  )
}

export default InpCreatCord