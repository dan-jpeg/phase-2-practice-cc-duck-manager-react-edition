import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)
  const [formData, setFormData] = useState({})

 useEffect(() => {
  fetch('http://localhost:3000/ducks')
  .then(rsp => rsp.json())
  .then(duckData => {
    setDucks(duckData);
    setFeaturedDuck(duckData[0])})
 }, [])

function handleDisplayDuck (duck) {
  setFeaturedDuck(duck)
}


function addDuck(newDuck) {
  fetch('http://localhost:3000/ducks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newDuck)
  })
  .then(res => res.json())
  .then(newDuckFromServer => setDucks([...ducks, newDuckFromServer]))
}

function toggleDuckForm () {
  setDuckFormOpen(!duckFormOpen)
}


  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList handleDisplayDuck={handleDisplayDuck} ducks={ducks} />

      <DuckDisplay featuredDuck={featuredDuck}/>

      <button onClick={toggleDuckForm}>{duckFormOpen ? "閉める" : "ダックファルむを開ける"}</button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      <DuckForm duckFormOpen={duckFormOpen} addDuck={addDuck} />

    </div>
  );
}

export default App;
