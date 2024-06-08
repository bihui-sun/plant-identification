import { useState } from 'react'
import { Link } from 'react-router-dom'

function Branch({ item }) {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    if (item.children) {
      setSelected(!selected)
    }
  }
  return (
    <>
      <div>
        <button className="tree-item" onClick={handleClick}>
          {item.key}
        </button>

        {item.children ? (
          <div className={`sub-branch ${selected ? '' : 'sub-branch-shrunk'}`}>
            {item.children.map((subitem) => (
              <Branch key={subitem.id} item={subitem} />
            ))}
          </div>
        ) : (
          <Link to={`/leafkey/plant`}>
            {item.plant.map((tree) => (
              <ul key={tree.name}>
                <li>{tree.name}</li>
              </ul>
            ))}
          </Link>
        )}
      </div>
    </>
  )
}
export default Branch
