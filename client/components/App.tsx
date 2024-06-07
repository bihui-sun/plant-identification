import TEST_IMG from '/assets/test-img.png'
import LEAF_KEYS from '/assets/LEAF_KEYS.png'
import ImageZoomInOut from './ImageZoomInOut'

function App() {
  console.dir(TEST_IMG)
  return (
    <>
      <div style={{ display: 'inline-block' }}>
        <ul>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      <div className="app" style={{ display: 'inline-block' }}>
        <h1>Follow the leaf keys and find your plant!</h1>
        <ImageZoomInOut imageUrl={LEAF_KEYS} />
      </div>
      <div style={{ display: 'inline-block' }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </>
  )
}

export default App
