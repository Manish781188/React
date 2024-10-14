import React, { useReducer } from 'react'

const UseReducer = () => {
   function reduser(count, action) {
      if (action.type === 'increament') {
         return count += 1
      }
      else if (action.type === 'decreament') {
         return count -= 1
      }
      else {
         return count
      }
   }

   let [count, dispatch] = useReducer(reduser, 0)
   return (
      <div>
         <h3>{count}</h3>
         <button onClick={() => dispatch({ type: "increament" })}>++</button>
         <button onClick={() => dispatch({ type: "decreament" })}>--</button>
      </div>
   )
}

export default UseReducer