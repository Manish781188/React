import React, { useEffect, useState } from 'react'
import Food from './Food';

const Home = ({ CardData, setCardData }) => {
  let [apiData, setApidata] = useState([]);
  // console.log(apiData);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json();
    }).then((data) => {
      setApidata(data.recipes);
    })
  }, [])

  return (
    <div>

      <Food apiData={apiData} CardData={CardData} setCardData={setCardData} />
    </div>
  )

}
export default Home