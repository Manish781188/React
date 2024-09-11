import React from 'react'
import New from './comp/New'

const Home = (b) => {
  return (
    <div>
       {/* {
        b.data    
       } */}
    < New  data1={b.data}/>
    </div>
  )
}

export default Home