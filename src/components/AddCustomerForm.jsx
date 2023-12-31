import { useState } from 'react'
import { addCustomer } from '../api/fetchFunctions'

function AddCustomerForm({ afterSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    addCustomer({ name, email }).then(() => {
      afterSubmit()
      setName('')
      setEmail('')
    })
  }

  return (
    <>
      <h2>Add a new Customer</h2>
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
          <button type='submit'>Add Customer</button>
        </div>
      </form>
    </>
  )
}

export default AddCustomerForm
