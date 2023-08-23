import { useState } from 'react'
import { addNote } from '../api/fetchFunctions'

function AddNoteForm({ afterSubmit, custId }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    addNote({ text, custId: parseInt(custId) }).then(() => {
      afterSubmit()
      setText('')
    })
  }

  return (
    <>
      <h2>Add a new Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </div>
        <div>
          <button type='submit'>Add Note</button>
        </div>
      </form>
    </>
  )
}

export default AddNoteForm
