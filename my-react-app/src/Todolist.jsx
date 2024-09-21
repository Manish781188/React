import React, { useState } from 'react'

const Todolist = () => {
    let [input,setInput]=useState("")
    let [data,setData]=useState([])
    function fun1(a){
        setInput(a.target.value);
    }
    function Done(){
      setData([...data,input])
      setInput('')
    }
    function remove(id){
        let newData=data.filter((x,y)=>{
        return y!=id
       })
    setData(newData)
    }

  return (
    <div>
        <h1>Todo list</h1>
        <input   value={input} onChange={fun1} placeholder='enter any text'/>    
        <button onClick={Done}>add</button>
         {
            data.map((a,b)=>{
                return (<>

                 <li>{a}</li> 
                 <button onClick={()=>remove(b)}>delete</button>
                </>)
               
            })
         }
            

    </div>
  )
}

export default Todolist