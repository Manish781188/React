import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Api.css'
const API = () => {
  let [data, setData] = useState([])
  let [filter, setFilter] = useState("all");
  let [searchData, setSearchData] = useState();


  async function call() {
    let apidata = await axios('https://dummyjson.com/recipes')
    setData(apidata.data.recipes)
    // console.log(apidata.data.recipes, "hiiiiiiiii");
    // console.log(apidata);


  }
  const filteredData = data.filter((recipe) => {

    if (filter === "all") return true;
    else if (filter === searchData) {
      return recipe.name.includes(searchData);
    }
    return recipe.mealType.includes(filter);

  });

  function searchItem(e) {
    setSearchData(e.target.value)

  }


  useEffect(() => {
    call()

  }, [])

  return (
    <>
      <div id='search'>
        <input type='text' onChange={searchItem} placeholder='Search' />
        <button onClick={() => setFilter(searchData)}>Search</button>
      </div>
      <div id='button'>
        <button onClick={() => setFilter("Breakfast")}>BreakFast</button>
        <button onClick={() => setFilter("Dinner")}>Dinner</button>
        <button onClick={() => setFilter("Lunch")}>Lunch</button>
        <button onClick={() => setFilter("all")} >Reset</button>
      </div>
      {

        filteredData.map((a) => {
          return <div id='one'>


            <img height={200} src={a.image} />
            <p>{a.name}</p>
          </div>
        })

      }

    </>
  )
}

export default API