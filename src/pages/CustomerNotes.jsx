import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddNoteForm from '../components/AddNoteForm'
import { fetchCustomersNotes, deleteNote } from '../api/fetchFunctions.js'

function CustomerNotes() {
  const { id } = useParams()

  const [customerNotes, setCustomerNotes] = useState(null)

  useEffect(() => {
    fetchCustomersNotes(id).then(setCustomerNotes)
  }, [id])

  function handleDeleteNote(noteId) {
    return function () {
      if (confirm('Delte note, Are you sure?'))
        deleteNote(noteId).then(() => {
          fetchCustomersNotes(id).then(setCustomerNotes)
        })
    }
  }

  return (
    <>
      <h2>Notes</h2>
      <ul style={{ minHeight: '7rem' }}>
        {customerNotes ? (
          customerNotes.map((note) => (
            <li
              key={note.id}
              style={{
                display: 'flex',
              }}
            >
              <button
                onClick={handleDeleteNote(note.id)}
                style={{ padding: '4px' }}
              >
                🗑️
              </button>
              <span>{note.text}</span>
            </li>
          ))
        ) : (
          <h2>Loading the notes...</h2>
        )}
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
