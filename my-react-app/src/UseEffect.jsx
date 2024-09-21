import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   
    let [count,setCount]=useState(0)
    let [city , setCity]=useState("bhopal")

   let [data , setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
       .then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data.recipes,"heeeeeee");
            setData(data.recipes)
        })
    },[])


 
function fun1(){
    setCount(count+1);
}
function change(){
    setCity("Delhi")
}
  return (
    <div>
        <p>{count}</p>
        <button onClick={fun1}>click</button>
        <h3>{city}</h3>
        <button onClick={change}>change</button>
       {
        data.map((a,b)=>{
                return (<>
                <li>{a.id}</li>
                 <li>{a.name}</li> 
                 <img src={a.image}  height='100px' width='100px'></img>
                </>)
               
            })
        }
    </div>
  )
}

export default UseEffect