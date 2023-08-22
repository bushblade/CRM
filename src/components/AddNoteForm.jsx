import { useState } from 'react'

function AddNoteForm({ afterSubmit, custId }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, custId }),
    })
      .then((res) => res.json())
      .then(() => {
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
            cols='60'
            rows='6'
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
