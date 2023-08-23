import { useState, useEffect } from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'
import { fetchSingleCustomer } from '../api/fetchFunctions.js'

function CustomerPage() {
  const { id } = useParams()

  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    fetchSingleCustomer(id).then(setCustomer)
  }, [id, setCustomer])

  return (
    <>
      <div style={{ minHeight: '6rem' }}>
        <h1>{customer ? customer.name : 'Loading Customer...'}</h1>
        <strong>email:</strong>{' '}
        {customer ? (
          <a href={`mailto:${customer.email}`}>{customer.email}</a>
        ) : (
          <span>Loading Customer...</span>
        )}
      </div>
      <hr />
      <nav>
        <Link to=''>Notes</Link> | <Link to='edit'>Edit</Link>
      </nav>
      <Outlet context={[customer, setCustomer]} />
    </>
  )
}

export default CustomerPage
