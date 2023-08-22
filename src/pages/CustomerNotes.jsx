import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddNoteForm from '../components/AddNoteForm'

async function fetchCustomersNotes(customerID) {
  const res = await fetch(`/api/notes?custId=${customerID}`)
  const notes = await res.json()
  return notes
}

async function deleteNote(noteId) {
  const res = await fetch(`/api/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
  const data = await res.json()
  return data
}

function CustomerNotes() {
  const { id } = useParams()

  const [customerNotes, setCustomerNotes] = useState(null)

  useEffect(() => {
    fetchCustomersNotes(id).then(setCustomerNotes)
  }, [id])

  function handleDeleteNote(noteId) {
    return function () {
      deleteNote(noteId).then(() => {
        fetchCustomersNotes(id).then(setCustomerNotes)
      })
    }
  }

  if (!customerNotes) {
    return <h2>Loading the notes...</h2>
  }

  return (
    <>
      <h2>Notes</h2>
      <ul>
        {customerNotes.map((note) => (
          <li key={note.id}>
            {note.text} - <button onClick={handleDeleteNote(note.id)}>x</button>
          </li>
        ))}
      </ul>
      <AddNoteForm
        custId={id}
        afterSubmit={() => {
          fetchCustomersNotes(id).then(setCustomerNotes)
        }}
      />
    </>
  )
}

export default CustomerNotes
