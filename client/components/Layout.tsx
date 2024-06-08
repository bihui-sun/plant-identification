import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div>
        <p>do i need a header?</p>
        <Outlet />
      </div>
    </>
  )
}
