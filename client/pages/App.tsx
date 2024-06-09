import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>
          Click one button to choose a key map to start your identification
        </h1>
        <div>
          <div>
            <button className="front-btns">
              <Link to={'/leafkey'}>Identify by Leaves</Link>
            </button>
          </div>
          <div>
            <button className="front-btns">
              <Link to={'/flowerkey'}>Identify by flowers</Link>
            </button>
          </div>
          <div>
            <button className="front-btns">
              <Link to={'/fruitkey'}>Identify by fruit</Link>
            </button>
          </div>
          <div>
            <button className="front-btns">
              <Link to={'/greatwalks'}>Plants in Great Walks</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
