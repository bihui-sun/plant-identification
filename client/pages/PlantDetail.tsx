import { useFruits } from '../hooks/useFruits.ts'
import LEAF_KEYS from '/assets/LEAF_KEYS.png'
import ImageZoomInOut from '../components/ImageZoomInOut.tsx'

function PlantDetail() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Kawakawa</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
        <ImageZoomInOut imageUrl={LEAF_KEYS} />
      </div>
    </>
  )
}

export default PlantDetail
