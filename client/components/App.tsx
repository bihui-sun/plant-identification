import TEST_IMG from '../../public/assets/test-img.png'
import ImageZoomInOut from './ImageZoomInOut'

function App() {
  console.dir(TEST_IMG)
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ImageZoomInOut imageUrl={TEST_IMG} />
      </div>
    </>
  )
}

export default App
