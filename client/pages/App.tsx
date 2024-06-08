import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <div style={{ display: 'inline-block' }}>
        <ul>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div> */}
      <div className="app">
        <h1>Follow the leaf keys and find your plant!</h1>
        <div>
          <button>
            <Link to={'/leafkey'}>Identify by Leaves</Link>
          </button>
        </div>
        <div>
          <button>Identify by flowers</button>
        </div>
        <div>
          <button>Identify by fruits</button>
        </div>
        <div>
          <button>Plants in Great Walks</button>
        </div>
      </div>
      {/* <div style={{ display: 'inline-block' }}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div> */}
    </>
  )
}

export default App
