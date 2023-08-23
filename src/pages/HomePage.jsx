import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddCustomerForm from '../components/AddCustomerForm.jsx'
import { fetchAllCustomers } from '../api/fetchFunctions.js'

function Home() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetchAllCustomers().then(setCustomers)
  }, [])

  return (
    <section>
      <h1>Current Customers</h1>
      <ul style={{ minHeight: '7rem' }}>
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

export default Home
