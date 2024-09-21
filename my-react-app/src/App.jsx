// import React from 'react'
// // import Home from './home'
// // import New from './comp/New' 
// import  './App.css'
// const  App =()=> {
//   let arr =[1,3,5,5,3,5,3]
//   return (
//     <div>
//       {
//         arr.map((a)=>{
//           return(<>
          
//           <li>{a}</li>
          
//           </>)
//         })
//       }
      
     
//     </div>
//   )
// }

// export default App



///////////////////////////////////////////////////////////


// import React from 'react'
// import Home from './home'

// const App = () => {
//   let a='hello'
//   return (
//     <div >
//       <Home data={a}/>  
//     </div>
//   )
// }

// export default App


//////////////////////////////////////////////////////////////////////////////////
// import React, {  useState } from 'react'

// export const App = () => {

//   let [count,setcount]=useState(0)
//   let [color,setcolor]=useState('red')
//   function fun1(){
//     setcount(count+1)
//     setcolor('green')
//   }
  
//   return (
//     <div style={{background:color,height:'100px' , width:'100px '}}>
//       <p>{count}</p>
//       <button onClick={fun1}>click</button>
//       <button onClick={fun1}>color green</button>
//     </div>
//   )
// }
// export default App
////////////////////////////////////////////////////////////////

import React from 'react'
import { Clock } from './Clock'
import Input from './input'
import Todolist from './Todolist'
import UseEffect from './UseEffect'
import Practice from './Practice'

export const App = () => {
  return (
    <div>
      {/* <Clock/> */}
      {/* <Input/> */}
      {/* <Todolist/> */}
      {/* <UseEffect/> */}
        <Practice/>
    </div>
  )
}
export default App