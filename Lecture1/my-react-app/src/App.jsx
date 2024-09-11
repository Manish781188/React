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


import React from 'react'
import Home from './home'

const App = () => {
  let a='hello'
  return (
    <div >
      <Home data={a}/>  
    </div>
  )
}

export default App
