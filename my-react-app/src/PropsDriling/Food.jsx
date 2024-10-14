import React, { useContext } from 'react'
import './Food.css'
import { CartContext } from './Contex';

const Food = ({apiData,CardData,setCardData}) => {
    let {dispatch}=useContext(CartContext);
    const addToCart = (item) => {
      console.log(item,"dekhoooooooo");
   
      dispatch({
        type:"add",
        payload:item
      })
    }
    let data=true
  return (
    // <div> 
    //   {
    //     apiData.map((value)=>{
    //        return<div id='card'>
    //         {<img src={value.image}/>}
    //        {<p>{value.name}</p>}
    //          <button onClick={()=>setCardData([...CardData,value])}>AddToCard</button>
    //         </div>
    //     })
    //   }

    // </div>.
///////////////////////////////////
<div>
{apiData.map((item,index) => (
  <div key={item.id} id='card'>
    <img src={item.image} alt={item.name} />
    <p>{item.name}</p>
    {
      data?  <button onClick={() => addToCart(item)}>Add to Cart</button>:   <button >remove</button> 
    }
   
 

  </div>
))}
</div>
);

}

export default Food