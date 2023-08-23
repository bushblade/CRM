const headers = {
  'Content-type': 'application/json',
}

export async function fetchAllCustomers() {
  const res = await fetch('/api/customers')
  const customers = await res.json()
  return customers
}

export async function fetchCustomersNotes(customerID) {
  const res = await fetch(`/api/notes?custId=${customerID}`)
  const notes = await res.json()
  return notes
}

export async function deleteNote(noteId) {
  const res = await fetch(`/api/notes/${noteId}`, {
    method: 'DELETE',
    headers,
  })
  const data = await res.json()
  return data
}

export async function addNote(note) {
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers,
    body: JSON.stringify(note),
  })
  const data = res.json()
  return data
}

export async function updateCustomer(customer) {
  const res = await fetch(`/api/customers/${customer.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(customer),
  })
  const newCustomer = await res.json()
  return newCustomer
}

export async function fetchSingleCustomer(customerID) {
  const res = await fetch(`/api/customers/${customerID}`)
  const customer = await res.json()
  return customer
}

export async function addCustomer(customer) {
  const res = await fetch('/api/customers', {
    method: 'POST',
    headers,
    body: JSON.stringify(customer),
  })
  const newCustomer = await res.json()
  return newCustomer
}
