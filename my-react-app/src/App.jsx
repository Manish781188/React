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
// import Home from './Home'

// const App = () => {
//   // let a='hello'
//   return (
//     <div >
//       {/* <Home data={a}/>   */}
//       <Home/>
//     </div>
//   )
// }

// export default App


////////////////////////////////////////////////////////////////////////////////


// import React from 'react'
// import { Clock } from './Clock'
// import Input from './input'
// import Todolist from './Todolist'
// import UseEffect from './UseEffect'
// import Practice from './Practice'
// import UseState from './UseState'
// import Boot from './Bootstap/Boot'
// import Form from './Form'
// import UseReducer from './UseReducer'
// import API from './API'
// import LoginSignup from './Login SignUp/LoginSignup'
// import UseRef from './UseRef'
// import InpCreatCord from './InpCreatCord'
// import Createcontext from './Context Hook/Createcontext'
// export const App = () => {
//   return (
//     <div>
//       {/* <Clock/> */}
//       {/* <Input/> */}
//       {/* <Todolist/> */}
//       {/* <UseEffect/> */}
//       {/* <UseState/> */}
//        {/* <Boot/>    */}
//        {/* <Form/> */}
//        {/* <UseReducer/> */}
//          {/* <API/> */}
//          {/* <LoginSignup/> */}
//          {/* <InpCreatCord/> */}
//          {/* <UseRef/> */}
//          <Createcontext/>
//         {/* <Practice/> */}
//     </div>
//   )
// }
// export default App

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



///////////////////////////////// Login signup
// import React from 'react'
// import { BrowserRouter as Router , Route,Routes} from 'react-router-dom'
// import Login from './Login'
// import SignUp from './SignUp'

// const App = () => {
//   return (
//     <div>
//    <Router>
//     <Routes>
//       <Route path='/' element={<Login/>}/>
//       <Route path='/SignUp' element={<SignUp/>}/>
//     </Routes>
//    </Router>


//     </div>
//   )
// }

// export default App
   //<--------------------custom hooks------------------------------->
//    import React from 'react'

// import  CustomHooks  from './CustomHooks.jsx'
// const App = () => {
//      let {count,increament,decreament , changecolor,color,inpchange,inpcolor}=CustomHooks() 
//      return (
//       //  <div style={color?{backgroundColor:'red'} : {backgroundColor:'green'}}>
//   <div style={{backgroundColor:inpcolor}}>;
//         <h1>count : {count}</h1>
//         <button onClick={increament}>++</button>
//         <button onClick={decreament}>--</button>
//         <button onClick={changecolor}>Red/Green</button>
//         <input type='text' onChange={inpchange}/>
//        </div>
//      )
//    }
   
//    export default App


//<-----------------------PropsDring------------------------------->
import React, { useState } from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './PropsDriling/Home.jsx'
import Card from './PropsDriling/Card.jsx'
import NavBar from './PropsDriling/NavBar'

const App = () => {
  let [CardData, setCardData]=useState([]);
  console.log(CardData ,"card data");
  
  return (
    <div>
   <NavBar/>
      
         <Routes>
          <Route path='/' element={<Home CardData={CardData}  setCardData={setCardData}/>}/>
          <Route path='/card' element={<Card/>}/>
         </Routes>
  
    </div>
  )
}

export default App