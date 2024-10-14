import React, { useContext } from 'react'
import { dataFirst, datasec } from './Createcontext'
const Usecontext = () => {
    const name = useContext(dataFirst)
    const cast = useContext(datasec)
  return (
    <div>Usecontext
        <h1>my name is :: {name}</h1>
              <h1>{cast}</h1>
    </div>
  )
}

export default Usecontext