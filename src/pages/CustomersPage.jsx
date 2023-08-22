import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddCustomerForm from '../components/AddCustomerForm.jsx'

async function fetchAllCustomers() {
  const res = await fetch('/api/customers')
  const customers = await res.json()
  return customers
}

function CustomerPage() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchAllCustomers().then(setCustomers)
  }, [])

  return (
    <section>
      <h1>Current Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link to={`customers/${customer.id}`}>{customer.name}</Link>
          </li>
        ))}
      </ul>
      <AddCustomerForm
        afterSubmit={() => fetchAllCustomers().then(setCustomers)}
      />
    </section>
  )
}

export default CustomerPage
