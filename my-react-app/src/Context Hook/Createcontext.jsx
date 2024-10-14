import React, { createContext } from 'react'
import Usecontext from './Usecontext';

const dataFirst = createContext();
const datasec = createContext();
const Createcontext = () => {
  return (
    <div>
        <dataFirst.Provider value={"manish"}>
         <datasec.Provider value={"yadav"}>
         <Usecontext/>
         </datasec.Provider>            
        </dataFirst.Provider>
    </div>
  )
}

export default Createcontext
export {dataFirst,datasec}