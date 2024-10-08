import React, { useContext } from 'react'
import New from './comp/New'
import Context from './Context'

const Home = () => {
   let data= useContext(Context)

  return (
    <div>
      {/* <p>app to home </p>
       {
        b.data    
       }
    < New  data1={b.data}/> */}
    {data}
    </div>
  )
}

export default Home