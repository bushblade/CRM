import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

async function updateCustomer(customer) {
  const res = await fetch(`/api/customers/${customer.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
  const newCustomer = await res.json()
  return newCustomer
}

function CustomerEdit() {
  const [customer, setCustomer] = useOutletContext()
  const [name, setName] = useState(customer.name || '')
  const [email, setEmail] = useState(customer.email || '')

  function handleSubmit(e) {
    e.preventDefault()
    updateCustomer({ ...customer, name, email }).then(setCustomer)
  }

  return (
    <>
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type='submit'>Update Customer</button>
        </div>
      </form>
    </>
  )
}

export default CustomerEdit
