import { useState } from 'react'

function Nav() {
  const [item, setItem] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }
  return (
    <>
      <form>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          name="search"
          value={item}
          onChange={handleChange}
          style={{ marginRight: '30px' }}
        />
      </form>
    </>
  )
}
export default Nav
