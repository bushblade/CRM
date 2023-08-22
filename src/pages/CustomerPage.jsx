import { useState, useEffect } from 'react'
import { useParams, Outlet, Link } from 'react-router-dom'

async function fetchSingleCustomer(customerID) {
  const res = await fetch(`/api/customers/${customerID}`)
  const customer = await res.json()
  return customer
}

function CustomerPage() {
  const { id } = useParams()

  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    fetchSingleCustomer(id).then(setCustomer)
  }, [id, setCustomer])

  if (!customer) {
    return <h1>Loading Customer...</h1>
  }

  return (
    <>
      <h1>{customer.name}</h1>
      email: <a href={`mailto:${customer.email}`}>{customer.email}</a>
      <hr />
      <nav>
        <Link to=''>Notes</Link> | <Link to='edit'>Edit</Link>
      </nav>
      <Outlet context={[customer, setCustomer]} />
    </>
  )
}

export default CustomerPage
