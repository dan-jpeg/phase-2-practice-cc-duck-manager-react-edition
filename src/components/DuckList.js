import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({ducks, handleDisplayDuck }) {

  const duckComponents = ducks.map(duck => {
    return <DuckListCard key={duck.id} handleDisplayDuck={handleDisplayDuck}  duck={duck}/>
  })
  return (

    <div className="duck-nav">
      {duckComponents}
    </div>

  )
}

export default DuckList
