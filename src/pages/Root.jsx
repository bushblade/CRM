import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
        <nav>
          <Link to='/' style={{ fontSize: '1.5rem' }}>
            Home
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Root
