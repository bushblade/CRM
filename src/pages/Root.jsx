import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Root
