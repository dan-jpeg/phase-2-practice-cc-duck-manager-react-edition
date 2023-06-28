import React from 'react'

function DuckDisplay({ featuredDuck }) {
  return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      <h2>{featuredDuck.name}</h2>

      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button> {featuredDuck.likes} likes</button>

    </div>
  )
}

export default DuckDisplay
