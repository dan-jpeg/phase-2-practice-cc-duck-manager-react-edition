function DuckListCard({ duck, handleDisplayDuck }) {
  return (
    <img src={duck.img_url} onClick={() => handleDisplayDuck(duck)} alt={duck.name} />
  )
}

export default DuckListCard
