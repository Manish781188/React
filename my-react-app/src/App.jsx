// import React from 'react'
// import Home from './home'
// import New from './comp/New' 
// import  './App.css'
// const  App =()=> {
//   let arr =[1,3,5,5,3,5,3]
  
//   return (
//     <div>
//       {/* {
//         arr.map((a)=>{
//           return(<>
          
//           <li>{a}</li>
          
//           </>)
//         })
//       } */}
//       <Home data={arr}/>
//      <New/>
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


import React from 'react'
import { Clock } from './Clock'
import Input from './input'
import Todolist from './Todolist'
import UseEffect from './UseEffect'
import Practice from './Practice'
import UseState from './UseState'
import Boot from './Bootstap/Boot'
export const App = () => {
  return (
    <div>
      {/* <Clock/> */}
      {/* <Input/> */}
      {/* <Todolist/> */}
      {/* <UseEffect/> */}
      {/* <UseState/> */}
       <Boot/>   
         


        {/* <Practice/> */}
    </div>
  )
}
export default App

//////.....................Routing
// import React from 'react'
// import Navbar from './Rauting/Navbar'
// import About from './Rauting/About'
// import Home from './Rauting/Home'
// import Contact from './Rauting/Contact'
// import { BrowserRouter as Router , Route,Routes} from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       <Router>
//       <Navbar/>
//       <Routes>
//        <Route path='/' element={ <Home/>}/>
//        <Route path='/about' element={ <About/>}/>
//        <Route path='/contact' element={ <Contact/>}/>
//       </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App