import { useFruits } from '../hooks/useFruits.ts'

function PlantDetail() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Kawakawa</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default PlantDetail
